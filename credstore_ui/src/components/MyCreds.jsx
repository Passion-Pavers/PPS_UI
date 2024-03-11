// src/components/MyCreds.jsx

import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { IconButton, TextField, Button, InputAdornment } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ppappsService from "../services/ppAppsService";
import { useSnackbar } from "../context/SnackbarProvider";
import CRED_STORE_CONSTANTS from "../util/constants";
import LoadingSpinner from "./LoadingSpinner";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "website", headerName: "Website Name", flex: 1 },
  { field: "username", headerName: "Username", flex: 1 },
  {
    field: "password",
    headerName: "Password",
    flex: 1,
    renderCell: (params) => <PasswordCell password={params.value} />,
  },
];

const PasswordCell = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      {showPassword ? <span>{password}</span> : <span>•••••••••</span>}
      <IconButton onClick={togglePasswordVisibility}>
        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
    </div>
  );
};

const CustomToolbar = () => (
  <GridToolbarContainer>
    <GridToolbarColumnsButton />
    <GridToolbarFilterButton />
    <GridToolbarExport />
  </GridToolbarContainer>
);

const MyCreds = () => {
  const [values, setValues] = useState({
    websiteName: "",
    userName: "",
    password: "",
    showPassword: false,
  });
  const [rows, setRows] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // New state for selected row
  const [loading, setLoading] = useState(false);
  const showSnackbar = useSnackbar();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const addCredential = async () => {
    setLoading(true);
    const addCredsRequest = {
      appId: CRED_STORE_CONSTANTS.APP_ID,
      subAppId: 0,
      isPreview: true,
      username: values.userName,
      password: values.password,
      webSite: values.websiteName,
    };

    try {
      // Make a post call to create the credential
      await ppappsService.add(addCredsRequest);
      // Show Success Snackbar
      showSnackbar("Successfully added new credential!", "success");
      setTimeout(() => {
        setValues({
          websiteName: "",
          userName: "",
          password: "",
          showPassword: false,
        });
      }, 250);
      setRefreshData(true);
    } catch (error) {
      console.error("Error adding credential:", error);
      const errorMessage = error?.response?.data?.message
        ? error.response.data.message
        : "Error adding credential. Please try again.";
      // Show Error Snackbar
      showSnackbar(errorMessage, "error");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  };

  const handleEditClick = (id) => {
    // Find the selected row data and update the state
    const selectedRowData = rows.find((row) => row.id === id);
    setSelectedRow(selectedRowData);

    // Populate the form fields with the selected row data
    setValues({
      id: selectedRowData.id,
      websiteName: selectedRowData.website,
      userName: selectedRowData.username,
      password: selectedRowData.password,
      showPassword: false,
    });
  };

  const updateCredential = async () => {
    setLoading(true);
    const updateCredsRequest = {
      appId: CRED_STORE_CONSTANTS.APP_ID,
      subAppId: 0,
      isPreview: true,
      id: values.id,
      username: values.userName,
      password: values.password,
      webSite: values.websiteName,
    };

    try {
      await ppappsService.update(updateCredsRequest);
      console.log("updateResponse :");
      // Show Success Snackbar
      showSnackbar("Update successful!", "success");
      setTimeout(() => {
        setValues({
          websiteName: "",
          userName: "",
          password: "",
          showPassword: false,
        });
        setSelectedRow(null);
      }, 250);
      setRefreshData(true);
    } catch (error) {
      console.error("Error updating credential:", error);
      const errorMessage = error?.response?.data?.message
        ? error.response.data.message
        : "Error updating credential. Please try again.";
      // Show Error Snackbar
      showSnackbar(errorMessage, "error");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  };

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    async function startFetchingData() {
      try {
        const searchFilter = {
          appId: 0,
          subAppId: 0,
          isPreview: true,
          id: 0,
        };
        const response = await ppappsService.getAll(searchFilter);
        console.log("API Response:", response?.data);
        const data = response?.data;
        if (!ignore) {
          setRows(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 250);
      }
    }
    startFetchingData();
    return () => {
      ignore = true;
      setRefreshData(false);
    };
  }, [refreshData]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      style={{
        paddingBottom: "64px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          height: 400,
          width: "97%",
          margin: "0 auto",
        }}
      >
        <form
          onSubmit={selectedRow ? updateCredential : addCredential}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2>My credentials management</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Website Name"
              variant="outlined"
              margin="normal"
              value={values.websiteName}
              onChange={handleChange("websiteName")}
              required
              fullWidth
            />
            <TextField
              label="User name"
              variant="outlined"
              margin="normal"
              value={values.userName}
              onChange={handleChange("userName")}
              required
              fullWidth
            />

            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            {selectedRow ? "Update credential" : "Add new credential"}
          </Button>
        </form>
        <h2>Credentials List </h2>
        <DataGrid
          rows={rows}
          columns={[
            ...columns,
            {
              field: "actions",
              headerName: "Actions",
              flex: 1,
              renderCell: (params) => (
                <IconButton
                  color="primary"
                  onClick={() => handleEditClick(params.row.id)}
                >
                  <EditIcon />
                </IconButton>
              ),
            },
          ]}
          pageSize={5}
          checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default MyCreds;

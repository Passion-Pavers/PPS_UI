import { useState, useEffect } from "react";
import ppAppsService from "../services/ppapps";

const PpHome = () => {
  const [ppApps, setPpApps] = useState([]);

  const getPpAppsEffect = () => {
    ppAppsService.getAllApps().then((ppAppsResp) => {
      setPpApps(ppAppsResp);
    });
  };
  useEffect(getPpAppsEffect, []);

  return (
    <div>
      <p>Weclcome to PP Services!</p>
      <ul>
        {ppApps.map((ppApp) => (
          <li key={ppApp.id}>
            {ppApp.applicationName}-{ppApp.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PpHome;

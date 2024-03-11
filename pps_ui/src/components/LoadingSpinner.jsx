// src/components/LoadingSpinner.jsx

import React from "react";
import { styled } from "@mui/system";

const LoadingSpinnerContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: semi-transparent background
  zIndex: 9999,
});

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <svg
        width="80px"
        height="80px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-flickr"
      >
        <circle
          cx="59.6"
          cy="50"
          ng-attr-fill="{{config.c1}}"
          ng-attr-r="{{config.radius}}"
          fill="#263238"
          r="18"
        >
          <animate
            attributeName="cx"
            calcMode="linear"
            values="32;68;32"
            keyTimes="0;0.5;1"
            dur="1"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle
          cx="40.4"
          cy="50"
          ng-attr-fill="{{config.c2}}"
          ng-attr-r="{{config.radius}}"
          fill="#d4af37"
          r="18"
        >
          <animate
            attributeName="cx"
            calcMode="linear"
            values="32;68;32"
            keyTimes="0;0.5;1"
            dur="1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle
          cx="59.6"
          cy="50"
          ng-attr-fill="{{config.c1}}"
          ng-attr-r="{{config.radius}}"
          fill="#263238"
          r="18"
        >
          <animate
            attributeName="cx"
            calcMode="linear"
            values="32;68;32"
            keyTimes="0;0.5;1"
            dur="1"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="fill-opacity"
            values="0;0;1;1"
            calcMode="discrete"
            keyTimes="0;0.499;0.5;1"
            ng-attr-dur="{{config.speed}}s"
            repeatCount="indefinite"
            dur="1s"
          ></animate>
        </circle>
      </svg>
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;

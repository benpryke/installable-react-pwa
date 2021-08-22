import React from "react";

import { showInstallPrompt } from "../logic/installation";
import AppContext from "./AppContext";

export default function InstallButton() {
  const { installable, installed } = React.useContext(AppContext);
  return (
    <>
      {installable && !installed && (
        <button
          onClick={showInstallPrompt}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
          }}
        >
          Install
        </button>
      )}
      {installed && <span>You installed the app!</span>}
    </>
  );
}

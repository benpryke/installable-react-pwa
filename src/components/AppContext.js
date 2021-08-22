import React from "react";

import { isInstalled } from "../logic/installation";

const AppContext = React.createContext({
  installable: null,
  installed: false,
});

export function AppContextProvider({ children }) {
  const [installable, setInstallable] = React.useState(false);
  const [installed, setInstalled] = React.useState(isInstalled());
  const state = {
    installable,
    installed,
  };

  window.addEventListener("beforeinstallprompt", () => setInstallable(true));
  window.addEventListener("appinstalled", () => setInstallable(false));
  window
    .matchMedia("(display-mode: standalone)")
    .addEventListener("change", (event) => setInstalled(isInstalled(event)));

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppContext;

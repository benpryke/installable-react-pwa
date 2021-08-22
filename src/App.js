import "./App.css";

import React from "react";

import { AppContextProvider } from "./components/AppContext";
import InstallButton from "./components/InstallButton";
import TitleBar from "./components/TitleBar";
import logo from "./logo.svg";

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const shortcutText = urlSearchParams.get("shortcut");
  return (
    <AppContextProvider>
      <TitleBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This PWA is installable when built</h1>
          <ol>
            <li>
              Run <code>yarn build</code> to generate a prod build.
            </li>
            <li>
              Run <code>yarn serve</code> to serve the build.
            </li>
            <li>
              Go to <a href="localhost:3001">localhost:3001</a> in your browser.
            </li>
            <li>
              Enable <code>#enable-desktop-pwas-window-controls-overlay</code>{" "}
              in <code>about://flags</code>.
            </li>
          </ol>
          <InstallButton />
          {!!shortcutText && (
            <p>You opened a shortcut called: {shortcutText}</p>
          )}
        </header>
      </div>
    </AppContextProvider>
  );
}

export default App;

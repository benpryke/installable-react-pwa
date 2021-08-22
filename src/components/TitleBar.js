/**
 * Inspired by https://web.dev/window-controls-overlay/
 */

import React from "react";

export default function TitleBar() {
  return (
    <div
      class="search"
      style={{
        // The entire region is draggable
        appRegion: "drag",
        "-webkit-app-region": "drag",
        position: "fixed",
        overflow: "hidden",
        background: "#000",
        color: "#fff",
        // Use the environment variable for the left anchoring with a fallback.
        left: "env(titlebar-area-x, 0)",
        // Use the environment variable for the top anchoring with a fallback.
        top: "env(titlebar-area-y, 0)",
        // Use the environment variable for setting the width with a fallback.
        width: "env(titlebar-area-width, 100%)",
        // Use the environment variable for setting the height with a fallback.
        height: "env(titlebar-area-height, 32px)",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.5rem",
      }}
    >
      <img src="logo192.png" alt="React Logo" width="32" height="32" />
      <strong
        style={{
          paddingLeft: "0.5rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Custom Title Bar
      </strong>
    </div>
  );
}

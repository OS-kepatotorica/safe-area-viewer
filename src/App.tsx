import React, { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    const updateSafeAreaValues = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const safeTop = computedStyle.getPropertyValue("--safe-area-inset-top").trim();
      const safeRight = computedStyle.getPropertyValue("--safe-area-inset-right").trim();
      const safeBottom = computedStyle.getPropertyValue("--safe-area-inset-bottom").trim();
      const safeLeft = computedStyle.getPropertyValue("--safe-area-inset-left").trim();

      // Update the display elements
      const topEl = document.getElementById("safe-top");
      const rightEl = document.getElementById("safe-right");
      const bottomEl = document.getElementById("safe-bottom");
      const leftEl = document.getElementById("safe-left");

      if (topEl) topEl.textContent = safeTop || "0px";
      if (rightEl) rightEl.textContent = safeRight || "0px";
      if (bottomEl) bottomEl.textContent = safeBottom || "0px";
      if (leftEl) leftEl.textContent = safeLeft || "0px";

      // Update the green inset bars
      const topBar = document.getElementById("safe-inset-top");
      const rightBar = document.getElementById("safe-inset-right");
      const bottomBar = document.getElementById("safe-inset-bottom");
      const leftBar = document.getElementById("safe-inset-left");

      if (topBar) topBar.style.height = safeTop || "0px";
      if (rightBar) rightBar.style.width = safeRight || "0px";
      if (bottomBar) bottomBar.style.height = safeBottom || "0px";
      if (leftBar) leftBar.style.width = safeLeft || "0px";
    };

    // Initial update
    updateSafeAreaValues();

    // Listen for safe area changes from MainActivity
    const handleSafeAreaChanged = () => {
      console.log('Safe area changed event received');
      updateSafeAreaValues();
    };

    // Update on resize or orientation change
    window.addEventListener("resize", updateSafeAreaValues);
    window.addEventListener("orientationchange", updateSafeAreaValues);
    window.addEventListener("safeAreaChanged", handleSafeAreaChanged);

    return () => {
      window.removeEventListener("resize", updateSafeAreaValues);
      window.removeEventListener("orientationchange", updateSafeAreaValues);
      window.removeEventListener("safeAreaChanged", handleSafeAreaChanged);
    };
  }, []);

  return (
    <div>
      {/* Green bars to visualize safe area insets */}
      <div
        id="safe-inset-top"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "0px",
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          zIndex: 1000,
          pointerEvents: "none",
          borderBottom: "2px solid #FF00FF",
        }}
      />
      <div
        id="safe-inset-bottom"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "0px",
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          zIndex: 1000,
          pointerEvents: "none",
          borderTop: "2px solid #FF00FF",
        }}
      />
      <div
        id="safe-inset-left"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "0px",
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          zIndex: 1000,
          pointerEvents: "none",
          borderRight: "2px solid #FF00FF",
        }}
      />
      <div
        id="safe-inset-right"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "0px",
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          zIndex: 1000,
          pointerEvents: "none",
          borderLeft: "2px solid #FF00FF",
        }}
      />

      <div className="container">
        <div
          style={{
            fontSize: "24px",
            fontFamily: "monospace",
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Safe Area Insets</h2>
        </div>

        <div
          id="safe-area-inset-display"
          style={{
            fontSize: "20px",
            fontFamily: "monospace",
            marginTop: "15px",
            padding: "15px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <h1>To have this work paste the content here as stated MainActivity (PASTE MY CONENT INTO ANDROID STUDIO).java</h1>
          <h3 style={{ marginTop: 0 }}>Computed Values</h3>
          <div>
            Top: <span id="safe-top">--</span>
          </div>
          <div>
            Right: <span id="safe-right">--</span>
          </div>
          <div>
            Bottom: <span id="safe-bottom">--</span>
          </div>
          <div>
            Left: <span id="safe-left">--</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

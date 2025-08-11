import React from "react";

const Home: React.FC = () => {

  return (
    <div>
      {/* Green bars to visualize safe area insets */}
      <div
        id="safe-inset-top"
        style={{
          height: "var(--safe-area-inset-top)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          zIndex: 1000,
          pointerEvents: "none",
          borderBottom: "2px solid #FF00FF",
        }}
      />
      <div
        id="safe-inset-bottom"
        style={{
          height: "var(--safe-area-inset-bottom)",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          zIndex: 1000,
          pointerEvents: "none",
          borderTop: "2px solid #FF00FF",
        }}
      />
      <div
        id="safe-inset-left"
        style={{
          width: "var(--safe-area-inset-left)",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          zIndex: 1000,
          pointerEvents: "none",
          borderRight: "2px solid #FF00FF",
        }}
      />
      <div
        id="safe-inset-right"
        style={{
          width: "var(--safe-area-inset-right)",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
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
          <p>
            To have this work paste the content here as stated MainActivity
            (PASTE MY CONENT INTO ANDROID STUDIO).java
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

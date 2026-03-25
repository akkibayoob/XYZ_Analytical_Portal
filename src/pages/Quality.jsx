import React from "react";

export default function Quality() {
  return (
    <div className="tableau-embed" style={{ marginBottom: 28 }}>
      
      {/* Header */}
      <div className="embed-header">
        <div className="embed-header-left">
          <div>
            <div className="embed-title">
              Quality Dashboard · Tableau Public
            </div>
            <div className="embed-sub">
              Live Quality Insights
            </div>
          </div>
        </div>
      </div>

      {/* iframe */}
      <div style={{ padding: 16 }}>
        <div
          style={{
            position: "relative",
            paddingBottom: "65%",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://public.tableau.com/views/Book2_17742810420960/QualityDashboard?:embed=y&:display_count=n&:showVizHome=no"
            title="Quality Tableau Dashboard"
            loading="lazy"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: 10,
            }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
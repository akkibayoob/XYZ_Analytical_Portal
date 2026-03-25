import React from "react";

export default function Sales() {
  return (
    <div className="tableau-embed" style={{ marginBottom: 28 }}>
      
      {/* Header */}
      <div className="embed-header">
        <div className="embed-header-left">
          <div>
            <div className="embed-title">
              Sales Dashboard · Tableau Public
            </div>
            <div className="embed-sub">
              Live Tableau Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Responsive iframe */}
      <div style={{ padding: 16 }}>
        <div
          style={{
            position: "relative",
            paddingBottom: "65%", // slightly increased for better view
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://public.tableau.com/views/Book2_17742810420960/SalesDashboard?:embed=y&:display_count=n&:showVizHome=no"
            title="Sales Tableau Dashboard"
            loading="lazy" // ✅ improves performance
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
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050505",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 92, letterSpacing: "0.04em" }}>
          <span style={{ color: "#F5F1E8" }}>VISION</span>
          <span style={{ color: "#C9A24A" }}>G</span>
        </div>
        <div style={{ display: "flex", marginTop: 28, height: 2, width: 180, background: "#C9A24A" }} />
        <div style={{ display: "flex", marginTop: 28, color: "#A3A3A3", fontSize: 32, maxWidth: 820 }}>
          Consultoría de marketing y ventas para negocios digitales
        </div>
      </div>
    ),
    { ...ogSize },
  );
}

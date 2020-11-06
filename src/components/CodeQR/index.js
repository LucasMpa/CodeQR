import React from "react";
import QRCode from "qrcode.react";

export default function CodeQR() {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: 30,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#e65e00",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid",
          padding: "10px",
          boxShadow: "5px 3px",
        }}
      >
        <div style={{  height: "22%"}}>
          <text style={{ color: "#FFF" }}>Speed Apps</text>
        </div>
        <QRCode
          value={"https://www.lucas-lanches.zap704.com.br/"}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          renderAs={"svg"}
        />
      </div>
    </div>
  );
}

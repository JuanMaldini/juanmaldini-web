import { ChangeEvent, useRef, useState } from "react";
import QRCode from "react-qr-code";
import "./qrcode.css";
import "../00-Button/Button.css";

type QRFormat = "svg" | "png" | "jpg";

const QRCodePage = () => {
  const [value, setValue] = useState("");
  const defaultQR = "juanmaldini.com"; // QR por defecto visible antes del input
  const [qrSize, setQrSize] = useState(256);
  const [format, setFormat] = useState<QRFormat>("png");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const effectiveValue =
    value && value.trim().length > 0 ? value.trim() : defaultQR;

  const handleFormatChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextValue = event.target.value;
    if (nextValue === "svg" || nextValue === "png" || nextValue === "jpg") {
      setFormat(nextValue);
    }
  };

  const handleDownload = () => {
    const svg = containerRef.current?.querySelector(
      "svg"
    ) as SVGSVGElement | null;
    if (!svg || !effectiveValue) return;
    if (format === "svg") {
      const serializer = new XMLSerializer();
      const source = serializer.serializeToString(svg);
      const blob = new Blob([source], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qr-code.svg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      // PNG o JPG
      const serializer = new XMLSerializer();
      const source = serializer.serializeToString(svg);
      const img = new window.Image();
      const svg64 = btoa(unescape(encodeURIComponent(source)));
      const image64 = "data:image/svg+xml;base64," + svg64;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = qrSize;
        canvas.height = qrSize;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          // Para JPG fondo blanco; para PNG transparencia
          if (format === "jpg") {
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          ctx.drawImage(img, 0, 0, qrSize, qrSize);
          const mime = format === "jpg" ? "image/jpeg" : "image/png";
          const dataUrl = canvas.toDataURL(mime);
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `qr-code.${format}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };
      img.src = image64;
    }
  };

  return (
    <div className="qrcode-container">
      <h2>QR Code Generator</h2>
      <input
        className="qrcode-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Url"
      />
      <div
        ref={containerRef}
        style={{ margin: "0 auto", maxWidth: qrSize, width: "100%" }}
      >
        <QRCode
          size={qrSize}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={effectiveValue}
          // Para PNG queremos fondo transparente, para SVG dejamos blanco por defecto
          bgColor={format === "png" ? "transparent" : undefined}
          viewBox={`0 0 ${qrSize} ${qrSize}`}
        />
        <div className="qrcode-controls">
          <button
            className="buttonType01"
            onClick={handleDownload}
            title={"Descargar"}
          >
            Download
          </button>

          <label className="qrcode-control">
            <select
              value={qrSize}
              onChange={(e) => setQrSize(Number(e.target.value))}
            >
              <option value={256}>256 px</option>
              <option value={512}>512 px</option>
              <option value={1024}>1024 px</option>
            </select>
          </label>

          <label className="qrcode-control">
            <select value={format} onChange={handleFormatChange}>
              <option value="svg">SVG</option>
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;

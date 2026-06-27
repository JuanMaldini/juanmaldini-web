import { ChangeEvent, useRef, useState } from "react";
import QRCode from "react-qr-code";

type QRFormat = "svg" | "png" | "jpg";

const selectClass =
  "rounded-md border border-line bg-surface px-3 py-1.5 text-ink " +
  "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function QrCodePage() {
  const [value, setValue] = useState("");
  const defaultQR = "juanmaldini.com";
  const [qrSize, setQrSize] = useState(256);
  const [format, setFormat] = useState<QRFormat>("png");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const effectiveValue = value.trim().length > 0 ? value.trim() : defaultQR;

  const handleFormatChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value;
    if (next === "svg" || next === "png" || next === "jpg") setFormat(next);
  };

  const handleDownload = () => {
    const svg = containerRef.current?.querySelector("svg") as SVGSVGElement | null;
    if (!svg || !effectiveValue) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);

    if (format === "svg") {
      const blob = new Blob([source], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qr-code.svg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return;
    }

    const img = new window.Image();
    const svg64 = btoa(unescape(encodeURIComponent(source)));
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = qrSize;
      canvas.height = qrSize;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      if (format === "jpg") {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0, qrSize, qrSize);
      const mime = format === "jpg" ? "image/jpeg" : "image/png";
      const link = document.createElement("a");
      link.href = canvas.toDataURL(mime);
      link.download = `qr-code.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = "data:image/svg+xml;base64," + svg64;
  };

  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-4 py-12 sm:px-6">
      <h2 className="text-3xl font-bold text-ink">QR Code Generator</h2>

      <input
        className="w-full max-w-80 rounded-md border border-line bg-surface px-4 py-3 text-ink
                   transition-colors placeholder:text-faint
                   focus-visible:border-accent focus-visible:outline-none"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Url"
      />

      <div ref={containerRef} className="mx-auto w-full" style={{ maxWidth: qrSize }}>
        <div className="rounded-xl border border-line bg-white p-4 shadow-md">
          <QRCode
            size={qrSize}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={effectiveValue}
            bgColor={format === "png" ? "transparent" : "#ffffff"}
            viewBox={`0 0 ${qrSize} ${qrSize}`}
          />
        </div>

        <div className="mt-4 flex flex-row items-center justify-center gap-3">
          <button
            onClick={handleDownload}
            title="Descargar"
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-on-accent
                       shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md"
          >
            Download
          </button>

          <select
            className={selectClass}
            value={qrSize}
            onChange={(e) => setQrSize(Number(e.target.value))}
          >
            <option value={256}>256 px</option>
            <option value={512}>512 px</option>
            <option value={1024}>1024 px</option>
          </select>

          <select className={selectClass} value={format} onChange={handleFormatChange}>
            <option value="svg">SVG</option>
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
          </select>
        </div>
      </div>
    </div>
  );
}

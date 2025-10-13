// Utility to export the on-screen A4 CV ('.cv-page') to a PDF with a custom filename.
// It clones the page to avoid the on-screen transform scale, ensuring crisp A4 output.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - types provided via ambient declaration
import html2pdf from "html2pdf.js";

export async function exportCvPdf(fileName: string) {
  const src = document.querySelector(".cv-page") as HTMLElement | null;
  if (!src) return;

  // Clone the element to remove transform scaling and force A4 dimensions
  const clone = src.cloneNode(true) as HTMLElement;
  // Wrapper offscreen container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-10000px";
  container.style.top = "0";
  container.style.width = "210mm";
  container.style.height = "auto";
  container.style.background = "#fff";

  // Ensure base styles for the clone
  clone.style.transform = "none";
  clone.style.left = "0";
  // Keep natural width/height as defined by CSS; only remove visual effects
  clone.style.boxShadow = "none";
  clone.style.borderRadius = "0";

  container.appendChild(clone);
  document.body.appendChild(container);

  try {
    const opt = {
      margin: 0,
      filename: fileName,
      image: { type: "jpeg", quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: {
        unit: "mm" as const,
        format: "a4" as const,
        orientation: "portrait" as const,
      },
      pagebreak: { mode: ["css", "legacy"] as const },
    };

    await html2pdf()
      .from(clone)
      .set(opt as any)
      .save();
  } finally {
    // Cleanup
    document.body.removeChild(container);
  }
}

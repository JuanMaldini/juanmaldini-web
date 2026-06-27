// Export the on-screen A4 CV ('.cv-page') to a PDF with a custom filename.
// Clones the node to drop the on-screen transform scale for crisp A4 output.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - types provided via ambient declaration
import html2pdf from "html2pdf.js";

export async function exportCvPdf(fileName: string) {
  type PdfOptions = import("html2pdf.js").Html2PdfOptions;
  const src = document.querySelector(".cv-page") as HTMLElement | null;
  if (!src) return;

  const clone = src.cloneNode(true) as HTMLElement;
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-10000px";
  container.style.top = "0";
  container.style.width = "210mm";
  container.style.height = "auto";
  container.style.background = "#fff";

  clone.style.transform = "none";
  clone.style.left = "0";
  clone.style.boxShadow = "none";
  clone.style.borderRadius = "0";

  container.appendChild(clone);
  document.body.appendChild(container);

  try {
    const opt: PdfOptions = {
      margin: 0,
      filename: fileName,
      image: { type: "jpeg", quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] },
    };
    await html2pdf().from(clone).set(opt).save();
  } finally {
    document.body.removeChild(container);
  }
}

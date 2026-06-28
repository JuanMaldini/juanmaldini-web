// Export the on-screen A4 CV ('.cv-page') to a PDF.
// We render it as ONE continuous page: A4 width (210mm) and a custom height
// that matches the content, so there are no A4-height page cuts.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - types provided via ambient declaration
import html2pdf from "html2pdf.js";

const PX_TO_MM = 25.4 / 96;

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
  container.style.background = "#ffffff";

  // Render at full A4 width, no on-screen scaling.
  clone.style.transform = "none";
  clone.style.zoom = "1";
  clone.style.margin = "0";
  clone.style.boxShadow = "none";
  clone.style.borderRadius = "0";

  container.appendChild(clone);
  document.body.appendChild(container);

  try {
    // Wait for images (profile photo) so height is measured correctly.
    const imgs = Array.from(clone.querySelectorAll("img"));
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((res) => {
              img.onload = () => res();
              img.onerror = () => res();
            })
      )
    );

    const widthPx = clone.offsetWidth || 794;
    const heightPx = clone.offsetHeight;
    const widthMm = widthPx * PX_TO_MM;
    const heightMm = heightPx * PX_TO_MM + 1; // small buffer to avoid a stray 2nd page

    const opt: PdfOptions = {
      margin: 0,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      // Single custom-size page: A4 width, content-driven height.
      jsPDF: {
        unit: "mm",
        format: [widthMm, heightMm],
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all"] },
    };
    await html2pdf().from(clone).set(opt).save();
  } finally {
    document.body.removeChild(container);
  }
}

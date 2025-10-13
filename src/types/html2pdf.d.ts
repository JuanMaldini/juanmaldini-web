declare module "html2pdf.js" {
  export interface Html2PdfOptions {
    margin?: number | [number, number] | [number, number, number, number];
    filename?: string;
    image?: { type?: "jpeg" | "png"; quality?: number };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      backgroundColor?: string;
    };
    jsPDF?: {
      unit?: "pt" | "mm" | "cm" | "in";
      format?: string | string[];
      orientation?: "portrait" | "landscape";
    };
    pagebreak?: { mode?: Array<"css" | "legacy" | "avoid-all"> };
  }
  export interface Html2PdfInstance {
    from(element: HTMLElement | string): Html2PdfInstance;
    set(options: Html2PdfOptions): Html2PdfInstance;
    save(filename?: string): Promise<void>;
    outputPdf(action?: string, options?: unknown): Promise<Blob>;
  }
  export default function html2pdf(): Html2PdfInstance;
}

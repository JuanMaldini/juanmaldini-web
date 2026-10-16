import { useEffect, useRef, useState } from "react";

/** Desktop viewport the site is rendered at, then scaled down to fit the card. */
const VIEW_W = 1280;
const VIEW_H = 720;

type Props = { label: string; url: string };

export default function WebPreview({ label, url }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadCount = useRef(0);
  const [scale, setScale] = useState(0.5);
  const [blocked, setBlocked] = useState(false);
  const external = url.startsWith("http");

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / VIEW_W),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleLoad() {
    loadCount.current += 1;
    // First onLoad is the initial about:blank; second is the actual target content.
    // Blocked iframes (X-Frame-Options) get a same-origin Chrome error page on the
    // second load → contentDocument is accessible but body is empty.
    // Successfully loaded cross-origin iframes throw SecurityError on access.
    if (loadCount.current < 2) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const doc = iframe.contentDocument;
      if (!doc || doc.body.innerHTML.trim() === "") setBlocked(true);
    } catch {
      // SecurityError → cross-origin content loaded fine
    }
  }

  return (
    <a
      href={url}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-line bg-bg2 shadow-sm
                 transition-colors hover:border-accent"
    >
      <div
        ref={frameRef}
        className="relative aspect-video w-full overflow-hidden bg-bg2"
      >
        {blocked ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-xs">Preview not available</span>
            <span className="text-xs opacity-60">Click to open site ↗</span>
          </div>
        ) : (
          /* Preview only: the iframe can't be focused or clicked, the card is the link. */
          <iframe
            ref={iframeRef}
            src={url}
            title={label}
            referrerPolicy="no-referrer"
            tabIndex={-1}
            aria-hidden="true"
            onLoad={handleLoad}
            style={{
              width: VIEW_W,
              height: VIEW_H,
              transform: `scale(${scale})`,
            }}
            className="pointer-events-none absolute left-0 top-0 origin-top-left border-0 bg-white"
          />
        )}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <h4 className="truncate text-sm font-semibold text-ink">{label}</h4>
        <span className="shrink-0 text-muted transition-colors group-hover:text-ink">
          ↗
        </span>
      </div>
    </a>
  );
}

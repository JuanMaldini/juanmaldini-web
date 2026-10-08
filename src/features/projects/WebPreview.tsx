import { useEffect, useRef, useState } from "react";

/** Desktop viewport the site is rendered at, then scaled down to fit the card. */
const VIEW_W = 1280;
const VIEW_H = 720;

type Props = { label: string; url: string };

export default function WebPreview({ label, url }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
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
        className="relative aspect-video w-full overflow-hidden bg-black"
      >
        {/* Preview only: the iframe can't be focused or clicked, the card is the link. */}
        <iframe
          src={url}
          title={label}
          loading="lazy"
          referrerPolicy="no-referrer"
          tabIndex={-1}
          aria-hidden="true"
          style={{
            width: VIEW_W,
            height: VIEW_H,
            transform: `scale(${scale})`,
          }}
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0 bg-white"
        />
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

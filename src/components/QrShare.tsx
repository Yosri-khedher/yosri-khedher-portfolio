"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Grid } from "./Icons";

export function QrShare() {
  const [open, setOpen] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (open && canvas.current) QRCode.toCanvas(canvas.current, window.location.origin, { width: 220, margin: 1, color: { dark: "#102131", light: "#ffffff" } });
  }, [open]);
  return <>
    <button className="button button-secondary" onClick={() => setOpen(true)}><Grid /> Share QR</button>
    {open && <div className="modal-backdrop" onClick={() => setOpen(false)} role="presentation"><div className="qr-modal" role="dialog" aria-modal="true" aria-label="Share profile QR code" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button><span className="eyebrow">SCAN TO CONNECT</span><h3>Yosri Khedher</h3><canvas ref={canvas} aria-label="QR code for this portfolio"/><p>Scan this code to open this portfolio.</p></div></div>}
  </>;
}

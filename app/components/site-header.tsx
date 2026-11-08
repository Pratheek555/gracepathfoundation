"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);

  return (
    <header className="site-header shared-header">
      <div className="shell nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="Gracepath Development Foundation home">
          <span className="logo-crop logo-crop--nav"><Image src="/gracepath/logo-transparent.png" alt="Gracepath Development Foundation" fill sizes="(max-width: 640px) 160px, 290px" /></span>
        </Link>
        <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation" onClick={() => setOpen(false)}>
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About us</Link>
          <Link href="/#programs">Our work</Link>
          <Link href="/#approach">Our approach</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link className="nav-cta" href="/donate" onClick={() => setOpen(false)} aria-current={pathname === "/donate" ? "page" : undefined}>Donate <span aria-hidden="true">↗</span></Link>
          <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        </div>
      </div>
    </header>
  );
}

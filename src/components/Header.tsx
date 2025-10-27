"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
<div style={{ backgroundImage: `url('${base}/img/logo-v2.png')` }} />

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center py-3">
        {/* Logo */}
        <Link href="/" className="flex justify-center" aria-label="Zur Startseite">
         <Image
  src="/img/logo-v2.png"
  alt="Mietservice Digitalsanierung"
  width={180}
  height={48}
  className="h-12 w-auto"
  priority                        // lädt sofort auf der Startseite
          />
        </Link>

        {/* Top Row: Burger on mobile */}
        <div className="w-full max-w-6xl flex items-center justify-between mt-2 px-4 md:hidden">
          <span className="text-sm text-gray-600">Mietservice Digitalsanierung</span>
          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-md border hover:bg-gray-50"
          >
            {/* simple icon */}
            <div className="w-6 h-0.5 bg-gray-800 mb-1" />
            <div className="w-6 h-0.5 bg-gray-800 mb-1" />
            <div className="w-6 h-0.5 bg-gray-800" />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`
            ${open ? "flex" : "hidden"} 
            md:flex flex-col md:flex-row items-center md:space-x-8 
            text-gray-900 font-semibold text-base md:text-lg tracking-wide
            w-full md:w-auto px-4 md:px-0 pb-3 md:pb-0
          `}
        >
          <Link href="/" className="py-2 hover:text-green-600">STARTSEITE</Link>
          <Link href="/maschinen" className="py-2 hover:text-green-600">MIETPARK</Link>
          <Link href="/kontakt" className="py-2 hover:text-green-600">KONTAKT</Link>
          <Link href="/impressum" className="py-2 hover:text-green-600">IMPRESSUM</Link>

          {/* Kundentyp ändern */}
          <button
            onClick={() => { localStorage.removeItem("kundentyp"); window.location.reload(); }}
            className="mt-2 md:mt-0 text-sm text-gray-500 hover:text-green-600 underline"
          >
            Kundentyp ändern
          </button>
        </nav>
      </div>
    </header>
  );
}

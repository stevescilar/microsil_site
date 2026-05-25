"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b z-50">
      <div className="container-width h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Microsil"
            width={50}
            height={50}
          />

          <div>
            <h1 className="font-black text-2xl">
              MICROSIL SYSTEMS  
            </h1>

            <p className="text-xs tracking-[0.2em] text-emerald-600">
              TURNING IDEAS INTO REALITY
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function PageContent({ children }) {
  const contentRef = useRef(null);
  const pathname = usePathname(); // Gibt uns die aktuelle URL

  useEffect(() => {
    // Bei jedem Seitenwechsel: Fade von 0 auf 1
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 10 }, // Start: unsichtbar, leicht nach unten versetzt
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.1, // Kleine Verzögerung, damit Vorhänge Zeit haben
      },
    );
  }, [pathname]); // Führe aus, wenn sich die URL ändert

  return <div ref={contentRef}>{children}</div>;
}

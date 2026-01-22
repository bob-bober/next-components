"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const logoSrc = "/images/logo.svg";

export default function Navbar() {
  useEffect(() => {
    let lastScroll = 0;
    const header = document.querySelector(".header");
    const scroller = document.querySelector(".scroll-container");

    if (!header) {
      return undefined;
    }

    function getScrollSource() {
      return window.innerWidth > 1100 ? window : scroller || window;
    }

    function getScrollTop() {
      return window.innerWidth > 1100
        ? window.pageYOffset
        : scroller
          ? scroller.scrollTop
          : window.pageYOffset;
    }

    function onScroll() {
      const currentScroll = getScrollTop();
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }
      lastScroll = currentScroll;
    }

    let currentSource = getScrollSource();
    currentSource.addEventListener("scroll", onScroll, { passive: true });

    function handleResize() {
      const newSource = getScrollSource();
      if (newSource !== currentSource) {
        currentSource.removeEventListener("scroll", onScroll);
        newSource.addEventListener("scroll", onScroll, { passive: true });
        lastScroll = getScrollTop();
        currentSource = newSource;
      }
    }

    window.addEventListener("resize", handleResize);

    const burger = document.querySelector(".header-burger-menu");
    const menu = document.querySelector(".header__menu");
    const menuLinks = document.querySelectorAll(".header__link");

    function closeMenu() {
      menu?.classList.remove("menu-active");
      burger?.classList.remove("burger-active");
    }

    function toggleMenu() {
      menu?.classList.toggle("menu-active");
      burger?.classList.toggle("burger-active");
    }

    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
    burger?.addEventListener("click", toggleMenu);

    return () => {
      currentSource.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      menuLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      burger?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header className="header">
      <header className="header">
        <div className="header-content">
          <div className="logo">LOGO</div>

          <nav className="header__menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#expertise" className="expertise-link">
              Expertise
            </a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <div className="scroll-container">
        <section style={{height: "100vh", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <h1>Scroll down to test header</h1>
        </section>

        <section style={{height: "100vh", background: "#e0e0e0", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <h2>Keep scrolling...</h2>
        </section>

        <section style={{height: "100vh", background: "#d0d0d0", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <h2>Scroll up to see header appear</h2>
        </section>
      </div>
    </header>
  );
}

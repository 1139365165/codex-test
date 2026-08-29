"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className={`nav${open ? " mobile-open" : ""}`} id="nav">
          <a className="brand" href="#top" aria-label="MOMO 毛球研究所首页" onClick={closeMenu}>
            <span className="brand-mark">✦</span>
            <span className="brand-copy">
              <strong>MOMO 毛球研究所</strong>
              <span>GROOMING STUDIO</span>
            </span>
          </a>
          <div className="nav-links" aria-label="主导航">
            <a href="#services" onClick={closeMenu}>服务项目</a>
            <a href="#why-us" onClick={closeMenu}>为什么选我们</a>
            <a href="#reviews" onClick={closeMenu}>客户评价</a>
            <a href="#faq" onClick={closeMenu}>常见问题</a>
          </div>
          <a className="nav-cta" href="#booking" onClick={closeMenu}>
            预约洗护 <span aria-hidden="true">↗</span>
          </a>
          <button
            className="mobile-toggle"
            type="button"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((current) => !current)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

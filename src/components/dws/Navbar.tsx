import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/dws-logo.png.asset.json";

type NavLink = { label: string; to: string; hash?: string };

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Pricing", to: "/pricing" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="dws-nav sticky-top py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-3">
          <Link to="/" aria-label="DWS Web Services home" className="flex-shrink-0">
            <img src={logo.url} alt="DWS Web Services logo" className="dws-logo" />
          </Link>

          <div className="d-none d-lg-flex justify-content-center gap-4 flex-grow-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                className="dws-nav-link"
                activeOptions={{ exact: true }}
                activeProps={{ className: "dws-nav-link is-active" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <Link to="/contact" className="dws-btn dws-btn-solid dws-btn-sm-tight">
              Contact Us
            </Link>
            <button
              type="button"
              className="dws-burger d-lg-none"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={open ? "is-open" : ""} />
              <span className={open ? "is-open" : ""} />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="dws-mobile-menu d-lg-none"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <div className="d-flex flex-column pt-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    {...(link.hash ? { hash: link.hash } : {})}
                    className="dws-mobile-link"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

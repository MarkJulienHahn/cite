"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setVisible(isScrollingUp);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`navWrapper ${visible ? "visible" : "hidden"}`}
      style={{ color: pathname !== "/info" ? "white" : "var(--grey)" }}
    >
      <Link className={pathname === "/" ? "activeLink" : ""} href="/">
        Cite
      </Link>
      {/* <Link className={pathname === "/liste" ? "activeLink" : ""} href="/liste">
        Liste
      </Link> */}
      <Link className={pathname === "/info" ? "activeLink" : ""} href="/info">
        Info
      </Link>
      {/* <Link
        className={pathname === "/kontakt" ? "activeLink" : ""}
        href="/kontakt"
      >
        Kontakt
      </Link> */}
    </div>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "./images.jpg";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    window.removeEventListener("scroll", () => null);
  }, []);
  return (
    <div className={`nav ${show && "black"}`}>
      <img src="https://image.flaticon.com/icons/svg/870/870910.svg" alt="" />
      <img src={logo} alt="Avtar" />
    </div>
  );
}

export default Nav;

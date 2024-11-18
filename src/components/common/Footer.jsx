import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, index) => (
          <i key={index} data-aos="zoom-in">
            {item.icon}
          </i>
        ))}
        <p data-aos="zoom-in">All Rights Reserved 2024-25</p>
      </footer>
    </>
  );
};

export default Footer;

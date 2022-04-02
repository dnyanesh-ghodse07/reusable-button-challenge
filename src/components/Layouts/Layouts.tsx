import React, { useState } from "react";
import { ButtonContext } from "../Context/ButtonContext";
import "./Layouts.scss";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Layouts = () => {
  const [buttonProps, setButtonProps] = useState({
    outline: false,
    text: false,
    size: "sm"|| "md" || "lg",
    color: "primary" || "secondary" || "danger"
  });

  return (
    <ButtonContext.Provider value={{buttonProps,setButtonProps}}>
      <div className="layouts">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </ButtonContext.Provider>
  );
};

export default Layouts;

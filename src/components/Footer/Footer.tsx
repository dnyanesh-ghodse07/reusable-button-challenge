import React, {useContext } from "react";
import { ButtonContext } from "../Context/ButtonContext";
import "./Footer.scss";

const Footer = () => {
  const {setButtonProps} = useContext<any>(ButtonContext);
  return (
    <div className="footer">
      <div className="varient">
        <h5>Varient</h5>
        <div>
          <label htmlFor="outline">Outline</label>
          <input type="radio" name="varient" id="outline" onChange={(e) => {
            setButtonProps({outline:e.target.checked})
            }} />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <input type="radio" name="varient" id="text" onChange={(e) => {
            setButtonProps({text:e.target.checked})
            }}/>
        </div>
      </div>
      <div className="size">
        <h5>Size</h5>
        <div>
          <label htmlFor="sm">Small</label>
          <input type="radio" name="size" id="sm" onChange={(e) => {
            setButtonProps({size: e.target.checked && "sm"})
            }}/>
        </div>
        <div>
          <label htmlFor="md">Medium</label>
          <input type="radio" name="size" id="md" onChange={(e) => {
            setButtonProps({size:e.target.checked && "md"})
            }} />
        </div>
        <div>
          <label htmlFor="lg">Large</label>
          <input type="radio" name="size" id="lg" onChange={(e) => {
            setButtonProps({size:e.target.checked && "lg"})
            }} />
        </div>
      </div>
      <div className="color">
        <h5>Color</h5>
        <div>
          <label htmlFor="default">Default</label>
          <input type="radio" name="color" id="default" onChange={(e) => {
            setButtonProps({color:e.target.checked && "default"})
            }} />
        </div>
        <div>
          <label htmlFor="primary">Primary</label>
          <input type="radio" name="color" id="primary" onChange={(e) => {
            setButtonProps({color:e.target.checked && "primary"})
            }} />
        </div>
        <div>
          <label htmlFor="secondary">Secondary</label>
          <input type="radio" name="color" id="secondary" onChange={(e) => {
            setButtonProps({color:e.target.checked && "secondary"})
            }} />
        </div>
        <div>
          <label htmlFor="danger">Danger</label>
          <input type="radio" name="color" id="danger" onChange={(e) => {
            setButtonProps({color:e.target.checked && "danger"})
            }}/>
        </div>
      </div>
      <div className="other">
        <h5>Other</h5>
        <div>
          <label htmlFor="disable">Disable</label>
          <input type="radio" name="disable" id="disable" onChange={(e) => {
            setButtonProps({text:e.target.checked})
            }} />
        </div>
        <div>
          <label htmlFor="shadow">Disable Shadow</label>
          <input type="radio" name="shadow" id="shadow" onChange={(e) => {
            setButtonProps({text:e.target.checked})
            }} />
        </div>
      </div>
      <div className="admin">
            <p>
              <span>Designed & Developed by </span><a href="https://github.com/dnyanesh-ghodse07" className="name-link">@Dnyanesh Ghodse</a>
            </p>
      </div>
    </div>
  );
};

export default Footer;

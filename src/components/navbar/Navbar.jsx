import React, { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"

// BEM --> Block Elemnt Modifier (class name style)
const Menu = () => {
  return (
    <>
      {" "}
      <p className="">
        <a href="#home" className="">
          Home
        </a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3</a>
      </p>{" "}
      <p>
        <a href="#possibility">Open AI</a>
      </p>{" "}
      <p className="case ">
        <a href="#features">Case Studies</a>
      </p>{" "}
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  )
}
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar flex justify-between items-center py-8 px-24">
      <div className="gpt3__navbar-links flex-1 flex justify-start items-center">
        <div className="gpt3__navbar-links_logo mr-8 ">
          <img src={logo} alt="logo" className="w-[62.56px] h-[16.02px]" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            sixe={27}
            onClick={() => {
              setToggleMenu(false)
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            sixe={27}
            onClick={() => {
              setToggleMenu(true)
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {<Menu />}
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

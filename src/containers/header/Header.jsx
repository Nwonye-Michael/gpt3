import React from "react"
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
function Header() {
  return (
    <div className="gpt3__header section__padding flex" id="#home">
      <div className="gpt3__header-content flex-1 flex justify-center items-start flex-col mr-20">
        <h1 className="gradient__text font-extrabold  text-[62px] leading-[75px] tracking-[-0.04em] ">
          Let's Build Something amazing with GTP-3 OpenAI
        </h1>
        <p className="">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input ">
          <input type="email" placeholder="Your email address" className=" " />
          <button className="" type="button">
            Get Started
          </button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access</p>
        </div>
      </div>{" "}
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header

import staricon from './img/icon-star.svg';
import minus from './img/icon-minus.svg';
import plus from './img/icon-plus.svg';
import { useState } from "react";
import './App.css';



function AskButtons({id, state,titles, descriptions,onButtonClick}) {
  let cssName = "askButton inactive";
  let iconIMG= plus;
  if(state ===  Number(id)){
    cssName = "askButton active";
    iconIMG = minus;
  }else{
    cssName = "askButton inactive";
    iconIMG = plus;
  }
  
  return (
    <div className={cssName}  onClick={onButtonClick} >
      <div>
        <button className="buttons">{titles}</button>
        <img src={iconIMG} alt="icon"></img>
      </div>
      <p className="description">
        {descriptions}
      </p>
    </div>
    
  );
}



export default function App() {
  const [active, setActive] = useState({
    activeState:null  
  });
  
  function handleClick(i){
    setActive({...active, activeState:i});

  }
return (

  <div>
    <div className="header"></div>
    <div className="main">
      <div className="faqPanel">

        <div className="faqHeader">
          <img src={staricon} />
          <h1 style={{ fontSize: "50px", marginLeft: "20px", fontFamily: "Work Sans SemiBold" }}>FAQs</h1>
        </div>
        <AskButtons id="0" state={active.activeState} onButtonClick={() => handleClick(0)} titles="What is Frontend Mentor, and how will help me?" descriptions="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaSCript. It's suitable for all levels and ideal for portfolio building."  />
        <AskButtons id="1" state={active.activeState} onButtonClick={() => handleClick(1)} titles="Is Frontend Mentor free?" descriptions="Frontend Mentor offers realistic"  />
        <AskButtons id="2"state={active.activeState} onButtonClick={() => handleClick(2)} titles="Can i use Frontend Mentor prohects in my portfolio?" descriptions="Frontend Mentor offers realistic" />
        <AskButtons id="3" state={active.activeState} onButtonClick={() => handleClick(3)} titles="How can i get help if i'm stuck on a challenge?" descriptions="Frontend Mentor offers realistic"  />

      </div>
    </div>
  </div>
);
}


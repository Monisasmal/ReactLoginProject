import React, { useState } from "react";
import "./style.css";
import email_Icon from "./Assets/Email.png";
import password_Icon from "./Assets/Password.png";


const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if(email && password){
      const newEntry = {id:new Date().getTime().toString(), emails: email, passwords: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);

    setEmail(""); 
    setPassword("");
    }else{
      alert("pls fill the data");
    }
    
  };
  return (
    <>
    <div className="container">
      <div className="header">
        <div className="text">Sign In</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
          <form action="" onSubmit={submitForm}>

             <div className="input">
            <img src={email_Icon}  alt="" />
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_Icon}alt="" />
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-container"> 
        <button className="submit">LogIn</button>
        </div>
      
      </form>
      </div>
      </div>
      <div className="showData">
        {
            allEntry.map((curElem)=>{
              return(
                <div className="showDataStyle" key={curElem.id}>
                    <p>{curElem.emails}</p>
                  <p>{curElem.passwords}</p>
                </div>
              )
            })
        }
      </div>
      
    </>
  );
};

export default BasicForm;

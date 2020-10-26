import React from 'react';
import { useState,useEffect } from 'react';
import data from './data.js';
import base_url from './Url.js';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav_bar(props)
{

  const [userChoice,setChoice]= useState({
   
    Genre:"Comedy",
    City:"Kolkata",
    Language:"Hindi"
  });

 function ChangeChoice (event)
 {
  let value = event.target.value;
  let name=  event.target.name;

  var obj;
   setChoice((prev)=>
   {
      obj= {
        ...prev,
        [name]: value,
           };
           props.fun(obj);
           return obj;
      });
   }

   useEffect(() => {

    props.fun(userChoice);
           
  },[]);   

    return(
        <div className="nav_bar">
        <div className="choice">
      <label for="Genre">Genre</label>
      <br/>
      <select name="Genre" id="genre" onChange={ChangeChoice}>
  <option value="Comedy">Comedy</option>
  <option value="Crime">Crime</option>
  <option value="Drama">Drama</option>
  <option value="">All</option>
      </select>
    </div>
    <div className="choice">
      <label for="City">City</label>
      <br/>
      <select name="City" id="City" onChange={ChangeChoice}>
  <option value="Kolkata">Kolkata</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
      </select>
    </div>

    <div className="choice">
      <label for="Language">Language</label>
      <br/>
      <select name="Language" id="language" onChange={ChangeChoice}>
  <option value="Hindi">Hindi</option>
  <option value="English">English</option>
  <option value="">All</option>
      </select>
</div>
 </div>
    );

}

export default Nav_bar;
import React from "react";
import pic from "./Images/about1.jpg";
import "./about.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUsers } from 'react-icons/fa';
import {FaCheckCircle } from 'react-icons/fa';

function About() {
  return (
    <div className="aboutimage">
      <img src={pic} alt="" />
      <div className="headpara">
        <h1 className="heading">About Us</h1>
        <p>
Step into a world of scent-sational allure with our online perfume 
emporium. At Scentify , we curate an exquisite collection of fragrances that captivate the 
senses and elevate every moment. Whether you seek the timeless elegance of a classic scent or the bold 
allure of a modern masterpiece, we are your ultimate destination for olfactory indulgence. With a seamless 
online shopping experience, personalized recommendations, and expert guidance, we invite you to discover the 
perfect scent that resonates with your unique style and personality. Immerse yourself in a symphony of aromas,
 and embark on a journey of self-expression and luxury. Welcome to the essence of elegance, welcome to [SCENTIFY].</p>
        <button className="btn">Learn More</button>
      </div>



    </div>
  );
}

export default About;

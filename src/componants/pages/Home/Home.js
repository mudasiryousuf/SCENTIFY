import React from "react";
import "./Home.css";
import { Fragment } from "react";
import img from "./homeimg/2.jpg";
import one from "./homeimg/call.png"
import two from "./homeimg/gift-box.png"
import three from "./homeimg/return.png"
function Home() {
  return (
    <Fragment>
      <div className="main">
        <img className="pic" src={img} alt="" />
        <div className="content">
          <p>New ARRIVALS</p>
          <h1>SCENT IFY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            natus animi ad autem, cumque explicabo, esse dolorem iste dolore
            quam, magni assumenda molestias ullam iusto veritatis ab ipsa
            sapiente culpa.
          </p>
          <button className="abc">Shop</button>
        </div>

        <div className="card">
          <div className="box">
            <img className="icon" src={one} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              distinctio impedit. Neque nemo possimus ut, accusantium voluptatem
              earum minus nesciunt deleniti consectetur. Ducimus eligendi
              aliquam id aliquid voluptatem suscipit consectetur?
            </p>
          </div>
          <div className="box">
          <img className="icon" src={two} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              optio. Eveniet quos, officia iure quas temporibus quaerat
              accusamus similique, praesentium ad vero voluptate dolorum
              cupiditate blanditiis dignissimos dolore quis suscipit.
            </p>
          </div>
          <div className="box">
          <img className="icon" src={three} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              laudantium. Maxime numquam cupiditate animi mollitia, illum
              dolorum! Exercitationem cumque nisi rem laborum laudantium ut
              aperiam odio ad magnam asperiores! Doloribus!
            </p>
          </div>
        </div>


        {/* --------------------footer------------------------- */}
        <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>We are a leading e-commerce platform providing a wide range of products.</p>
        </div>
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>Email: mudasiribnyousuf18@gmail.com</p>
          <p>Phone: +9149428793</p>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <p>Connect with us on social media for the latest updates.</p>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 E-commerce Website. All Rights Reserved.</p>
      </div>
    </footer>



      </div>
    </Fragment>
  );
}

export default Home;

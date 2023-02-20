import {TfiTwitterAlt} from "react-icons/tfi";
import {BsFacebook} from "react-icons/bs";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
// import myImg from "../../assets/imgs/me.jpg";
import tuit from "../../assets/imgs/tuit.png";
import "./hom.scss";

function Home() {
  return (
    <div className="container">
      <div className="wrapper">

        {/*<div>*/}
        {/*  <img className="wrapper__img" src={myImg} style={{width: "500px", height: "450px"}} alt=""/>*/}
        {/*</div>*/}

        <div>
          <h1 className="font-monospace text-warning">Abdulazizov Eshonqul</h1>
          <h2>I'm frontEnd programmer from <br/> Uzbekistan</h2>
          <div className="social__links">
            <a target="_blank" href={"https://www.twitter.com/eshonqul74"}>
              <TfiTwitterAlt/>
            </a>

            <a target="_blank" href={"https://www.facebook.com/Eshonqul"}>
              <BsFacebook/>
            </a>

            <a
              target="_blank"
              href={"https://www.instagram.com/maxmadalivich_"}
            >
              <FaInstagram/>
            </a>

            <a
              target="_blank"
              href={
                "https://www.linkedin.com/in/eshonqul-abdulazizov-947230244/"
              }
            >
              <FaLinkedin/>
            </a>
       
        </div>
            <div className="tuit">
              <img style={{width:"100px", height:"100px"}} src={tuit}  alt="" />
             <div className="d-flex flex-column">
             <strong className="tuit__unversity">my university</strong>
              <p>TUIT</p>
             </div>
            </div>

      </div>
    </div>

    </div> 
  );
}

export default Home;

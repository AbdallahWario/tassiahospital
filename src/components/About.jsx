import React from "react";
import "./about.css";
import CardItem from "./CardItem";
const About = () => {
  
  const values=valuesitem.map((value)=>{
   return(
    <div className="values">
    

    <div className="valuesitems">
      <ul>
        <li>{value}</li>
       
      </ul>
    </div>
  </div>
    )
  });

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columnLeft">
            <img src="images/consultation.jpg" alt="" srcset="" />
          </div>
          <div className="columnRight">
            <h1>Tassia Hospital</h1>
            <p>
              Having been established in 2015,our main drive to put up the facility
              was to provide affordable health services to low and middle income earners.
              With our premium services we aspire to be the leading healthcare providers in 
              Kenya and beyond.
             

            </p>
            <p>Our facility is built on foundations,our Mission,vision and values 
              which are highlighted
              below:
            </p>
          </div>
        </div>
        <ul className="cards__items">
          <CardItem
            src="images/tick.svg"
            text=" 
              To be the region’s best institution in the 
provision of the highest quality healthcare 
at an affordable cost
              "
            label="OUR VISION"
          />
          <CardItem
            src="images/tick.svg"
            text="
                     We shall go all out to provide the highest quality of healthcare to all
                       our patients and clients at an affordable cost. We will comply with the
                        most stringent possible quality standards to ensure that our Patients 
                        and clients undergo no risk while being served in this institution.
                         We shall achieve this by Providing an efficient, customer focused 
                         and friendly service coupled with continuous improvement in technology
                          and training.We aim to create a partnership in good health
                         of trust and respect with all our patients and clients
                       
              "
            label="OUR MISSION"
          />
          <CardItem
            src="images/tick.svg"
            text={values}
            label="OUR VALUES"
          />
        </ul>
      </div>
    </div>
  );
};

export default About;

const valuesitem=["Integrity","Hardwork","Honesty and Integrity","Compassion"," Care","Quality","Reliabilty","Accountability"]

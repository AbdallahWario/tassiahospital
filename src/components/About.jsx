import React from "react";
import "./about.css";
import CardItem from "./CardItem";
const About = () => {
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
            text=" 
              OUR VALUES
              Tassia hospital believes in a community hospital whose members:
              
             
1. Trust, fear and acknowledge God in all their transactions.
2. Are honest and have integrity.
3. Are committed to continuous quality improvement.
4. Espouse team work and create a motivating environment for all.
5. Are creative and innovate in anticipating and meeting the needs of their customer.
6. Are equipped with the latest skills necessary to provide the best customer service.
7. Turn intentions into reality within schedule.
8. Seeks consensus in making key decisions.
9. Create and maintain goodwill within the community.
10. Take care of the environment and make it secure for all.
              
              "
            label="OUR VALUES"
          />
        </ul>
      </div>
    </div>
  );
};

export default About;

// const values="  <h1>OUR VALUES</h1>
// Tassia hospital believes in a community hospital whose members:
// <ul>

// <li>1. Trust, fear and acknowledge God in all their transactions.</li>
// <li>2. Are honest and have integrity.</li>
// <li>3. Are committed to continuous quality improvement.</li>
// <li>4. Espouse team work and create a motivating environment for all.</li>
// <li>5. Are creative and innovate in anticipating and meeting the needs of their customer.</li>
// <li>6. Are equipped with the latest skills necessary to provide the best customer service.</li>
// <li>7. Turn intentions into reality within schedule.</li>
// <li>8. Seeks consensus in making key decisions.</li>
// <li>9. Create and maintain goodwill within the community</li>
// <li>10. Take care of the environment and make it secure for all.</li>
// </ul>"

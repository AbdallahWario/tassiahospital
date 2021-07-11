import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>OUR DEPARTMENTS</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ward.svg"
              text="We have enough bed capacity , the hospital is capable of 
              accommodating all types of patients.
                       
                        
              "
              label="INPATIENT"
            />
            <CardItem
              src="images/antenatal.svg"
              text="  
              Antenatal care (ANC) is one of the core interventions for improving maternal outcomes.We believe that every
              woman should be able to access Antenatal care no matter their situation.
              "
              label="ANTENATAL CLINIC"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/outpatient.svg"
              text=" Our outpatient offer a wide range services from accidents and emergency,wellnes clinic,
              family planning and physiotherapy to mention but a few"
              label="OUTPATIENT"
            />
            <CardItem
              src="images/syringe.svg"
              text="Our skilled nurses administer vaccines at the clinic to your 
              child and anyone in need of the services.
                       
              "
              label="vaccination"
            />
            <CardItem
              src="images/consult.svg"
              text="The following services are availabe at our consultation clinic;Gynaecology,
              Asthma clinic,Orthopaedic clinic,pain clinic,TB clinic to mention but a few"
              label="CONSULTATION CLINIC"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

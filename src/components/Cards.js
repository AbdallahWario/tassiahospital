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
              src="images/inpatient.jpg"
              text="
              We offer inpatient services for critically ill patients which is manned by a group of 
              specialised doctors.
                        
              "
              label="INPATIENT"
            />
            <CardItem
              src="images/antenatal.jpg"
              text="  
              Antenatal care -(ANC) is one of the core interventions for improving maternal outcomes.We believe that every
              woman should be able to access Antenatal care no matter their situation. 
              Fertility Clinic- We have a group of fertility experts who attend to our patients.
              "
              label="Department of Reproductive Health"
            />
            <CardItem
              src="images/dental.jpg"
              text="
              we offer a wide range of dental
              services to adults and children:Aesthetic dentistry, Veneers,
              Tooth coloured white fillings, Teeth whitening,
              Endodontics, Root canal treatment, Implantology,
              Dental implants, Oral Surgery, Maxillofacial
              surgeon, Orthodontics, Braces, Pediatric Dentistry,
              Periodontics, Gum Diseases, Prosthetics, Crown,
              Bridge, Restorative Dentistry, Cavities and Filling
              "
              label="DENTAL CENTRE"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/tassiaoutpatient.jpeg"
              text=" Our outpatient offer a wide range services from accidents and emergency,wellnes clinic,
              family planning and physiotherapy to mention but a few"
              label="OUTPATIENT"
            />
            <CardItem
              src="images/child.jpg"
              text="
              Vaccination - We offer both child baby friendly and KEPI  vaccines by our
               qualified nurses. 
               Routine child health assesment and  nutritional counselling and support for under five years.

                       
              "
              label="Department of Paediatric and Child Health"
            />
            <CardItem
              src="images/doc.jpeg"
              text="The following services are availabe at our consultation clinic;Gynaecology,
              paediatric clinic,Orthopaedic clinic,pain management clinic for terminal illnesses,TB clinic to mention but a few"
              label="CONSULTATION CLINIC"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

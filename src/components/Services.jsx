import React from 'react';
import './services.css';
import CardItem from './CardItem';


function Services() {
  
  return (
    <div className='cards'>
      <h1>Check out Our Services!</h1>
         
         
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem

              label='ACCIDENTS AND EMERGENCY'
              src='images/amb.svg'
              text='
              With our highly skilled personnel,all emergency cases that get to us,the
              patients will be given the necessary first aid before being admitted for absolute care.
                
                    '
          />
            <CardItem
              src='images/labb.svg'
              text=' At Tassia Hospital we boast of an ultra modern laboratory faciliy that
              provide confirmatory diagnosis.We believe that right diagnosis is vital for
              the wellbeing of our patients and their peace of mind'
              label='LABORATORY'
              
            />
             <CardItem
              src='images/nurse.svg'
              text=' At Tassia Hospital,we recognize the sacredness of life from conception  to death.
              We will support you to have a safe birth and give you prenatal and postnatal care.
            
             .'
              label='MATERNITY'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pharmacy.svg'
              text='Our pharmaceutical services are second to none.OPerating 24hrs a day,our is pharmacy stocked with drugs of all
              kinds to handle the needs of both our inpatients and outpatients'
              label='PHARMACY'
              path='/services'
            />
            <CardItem
              src='images/vaccine.svg'
              text='Make an appointment with us for vaccination services for you and your loved ones. 
                       
                      
              '
              label='VACCINATION'

             
            />
            <CardItem
              src='images/man.svg'
              text='
                Book an appointment with us and a multidisciplinary team  of dedicated staff will
                attend to you for general body checkup and detection of chronic illness.
              '
              label='WELL PERSON CLINIC'
             
            />
            

          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/family.svg'
              text='
              We believe everyone should make informed choices about their sexual and reproductive health.
              Everyone is welcomed to our facility for an appointment with our doctors on matters of 
              fetility awareness.

              '
              label='FAMILY PLANNING'
             
            />
             <CardItem
              src='images/dental.svg'
              text='
              we offer a wide range of dental
              services to adults and children:Aesthetic dentistry, Veneers,
              Tooth coloured white fillings, Teeth whitening,
              Endodontics, Root canal treatment, Implantology,
              Dental implants, Oral Surgery, Maxillofacial
              surgeon, Orthodontics, Braces, Pediatric Dentistry,
              Periodontics, Gum Diseases, Prosthetics, Crown,
              Bridge, Restorative Dentistry, Cavities and Filling
              '
              label='DENTAL CENTRE'
            
            />
             <CardItem
              src='images/physiotherapy.svg'
              text='
              Our skilled physiotherapists will will assess and diagnose your injuries,aches and pain.
              From that personalized treatment will be given to you.Our aim is to restore your normal body movement 
              and function after injury.
              '
              label='PHYSIOTHERAPY'
            
            />
          </ul>
          <ul  className='cards__items'>
          <CardItem
              src='images/ultra.svg'
              text=' Our radiology department  offer high quality 3D ultra sound services
              at a reasonable fee.Ultra sounds help in monitoring foetal development'
              label='ULTRA SOUND'
             
            />
             <CardItem
              src='images/phone.svg'
              text=' 
              Consultations have never been this easier.With our new service,one will be able to
              consult with our team of doctors any time of the day through  phonecalls and text messages.
              '
              label='REMOTE DOCTOR CONSULTATIONS'
            
            />
             <CardItem
              src='images/counselling.svg'
              text=' Our proffesional therapists are available round the clock 
              to address any issues.We offer individual ,group counselling, couple counselling and drug counselling among others'
              label='COUNSELLING'
             
            />
          </ul>
        </div>
      </div>
      <h1>YOU ARE WELCOMED TO OUR FACILITY,WE CARE ABOUT YOU!</h1>
    </div>
  );
}

export default Services;

import React from 'react'
import {useState} from 'react'
import './faq.css'

export const Faq = () => {
  const [selected,setSelected]=useState(null)

  const toggle=(i)=>{
      if(selected===i){
          return setSelected(null);
      }
      setSelected(i)
  }

    return (
        <div className="wrapper">
            <div className="faqheader">
            <h1>Frequently asked Questions</h1>
             
        
            </div>
           
              <div className="accordion">
                {data.map((item,i)=>(
                    <div className="item">
                        <div className="title" onClick={()=>toggle(i)}>
                    <h1>{item.question}</h1>
                    <span>{selected===i?'-':'+'}</span>
                    </div>
                  <div className={
                      selected ===i ?`content show`:`content`
                  }>
                      <p>{item.content}   </p> 
                     </div>


                    </div>
                    
                ))

                }
            </div>
            
        </div>
    )
}
const data=[

    {
        question:"Where is the Main Hospital located?",
        content:"Our Main Branch is located at Tassia Kwa Ndege Stage in Embakasi,Nairobi."
    },
    {
        question:"How do I become part of your workforce",
        content:"We will post job openings on our site,social medial handles and local job sites."
    },
    {
        question:"Can I get a prescription from your Pharmacy?",
        content:"With a valid prescription,our pharmacists will be able to dispense the drugs to you."
    },
    {
        question:"How can we reach you in cases of emergency?",
        content:"In case of an emergency, reach us through +254721203185"
    },
   
]
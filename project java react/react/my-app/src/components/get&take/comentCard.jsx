import React  from "react";
import ComentCardSingle from './comentCardSingle.jsx'


export default function ComentCard(props){
  const person = props.pro;

  
return(
  

        person?.map((item, index) => (
          <div key={index} style={{
           
          }}>
            
            <ComentCardSingle  pro={item} id={props.id} req={props.req}/>
          </div>
        ))
)
}
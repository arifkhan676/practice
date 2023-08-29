
import React, { useEffect, useState } from 'react'
import contactsPro from './contacts';

const Newcomp = (props) => {
      
  const sty= {
    color:"red",
    fontSize:"1rem"
    
  };

  const [user,setUser] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
     .then(res => res.json())
     .then(data => setUser(data))

  }, [] );

      {
        const x = user.slice(0,10);
        console.log(x);
      }

  return (
    <div>
       <div className='habi'>
           <p>{props.title} </p> 
           <p>{props.writeSomething}</p>
       </div>
     
         {user.map(elements => 
          <div className='habijabi' >{elements.title.slice(0,10)}</div>
          )}

       { contactsPro.map(cont => 
           <div style={sty} >
               <h1> {cont.id} </h1> 
              {cont.name}
              {cont.meaning}
            </div>

      ) } 
    </div>
  )
}

export default Newcomp

import React, { useEffect, useState } from 'react'


function Time() {
  
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      
    };
    const optionTime={
        hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      
    }
  
    const formattedDateTime = dateTime.toLocaleDateString(undefined, options);
    const timeTime= dateTime.toLocaleTimeString(undefined, optionTime)

    return(
        
        
      
        <div className='date'>
           <h2>Hi Its {timeTime} </h2>
            <h3>{formattedDateTime}</h3>
            
        </div>
    )
}

export default Time
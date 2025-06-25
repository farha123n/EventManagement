import React, { useState } from 'react';

const ToolTip = ({text,children}) => {
    const [isVisible,setIsVisible]=useState(false)
    return (
       
         <div onMouseEnter={()=>{setIsVisible(true)}} onMouseLeave={()=>{setIsVisible(false)}} className='tool-tip-container'>
            {children}
                 {isVisible && <div  className="tool-tip text-white">{text}</div>}   

        </div>
       
    );
};

export default ToolTip;
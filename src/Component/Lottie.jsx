import React from 'react';
import { useLottie,useLottieInteractivity } from 'lottie-react';
import money from '../assets/lottie/Animation - 1747817720657.json'

const Style={

    height:400,
    width:300
 

}

const option={
    animationData:money,
    autoPlay:false
}
const Lottie = () => {
        const lottieObj=useLottie(option,Style)
        const Animation=useLottieInteractivity({
            lottieObj,
            mode:'scroll',
            actions:[{
               visibility:[0.2,0.9],
               type:'seek',
               frames:[0,120]
            }
                
            ]

        })
         return Animation
   
};

export default Lottie;

import { stringify } from '@firebase/util';
import React from 'react';
import Slider from "react-slick";


export default function Carrousel({ imagen }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight:false
    };


    return (
        <>
        <div style={{height:'500px', width:'500px'}}>
            <Slider {...settings}>
                {imagen.map((foto)=>{
                    return(
                    <>
                    <div>
                    <img style={{maxWidth:'500px', maxHeight:'450px', margin:'auto'}} src={foto} />
                    </div>
                    </>
                    
                    )
                        
                    
                })}
            </Slider>

        </div>


        </>
    )
}


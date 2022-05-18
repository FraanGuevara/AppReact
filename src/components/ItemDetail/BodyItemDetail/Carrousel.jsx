import React from 'react';
import Slider from "react-slick";
import styles from '../ItemDetail.module.css'


export default function Carrousel({ imagen }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: false
    };


    return (
        <>
            <div id={styles.carrousel}>
                <Slider {...settings}>
                    {imagen.map((foto) => {
                        return (
                            <>
                                <div>
                                    <img id={styles.imagenCarrousel} src={foto} />
                                </div>
                            </>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}


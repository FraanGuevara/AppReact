import React, { useEffect } from "react";



export default function promise() {
    return (
        useEffect(() => {

            const pago = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('50')
    
                }, 3000)
                //reject(null)
            })
    
            console.log(pago);
    
            pago
            .then((res) => {
                console.log('gracias por pagar ' + res)
            })
            .catch((res) => {
                console.log('gracias por pagar ' + res)
            })
            
            console.log(pago)
    
            //sigue....
    
        }, [])
    
    );
  }
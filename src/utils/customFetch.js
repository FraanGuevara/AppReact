import {productos} from '../utils/productos'
let isOk = true;

export const customFetch = (time, data, categoryId) => {
    return new Promise((resolve, reject) => {

        const productosFiltrados = data.filter((data)=> data.category ===  categoryId)

        setTimeout(() =>{
            if(categoryId) {
                resolve(productosFiltrados);
            }else{
                resolve(data);
            }
        }, time)
    })
}

export const traerProducto = (time, id) => {
    return new Promise((resolve, reject) => {
        const productoSeleccionado = productos.find((producto)=> producto.id === Number(id))
        setTimeout(() =>{
            if(id){
                resolve(productoSeleccionado);
            } else{
                reject('Error');
            }
        }, time)
    })
}
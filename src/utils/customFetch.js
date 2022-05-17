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


const fs = require("fs");
const colors = require('colors');

    const crearArchivo = async(num,l,h = 10) => {
        try {
            let  salida, consola = "";

            for (let i = 1; i <= h; i++) {
                salida +=(`${num} X ${i} = ${num * (i)}\n`);
                consola +=(`${num} ${'X'.red} ${i} ${'='.green}  ${num * (i)}\n`);
            }

            if (l) {
                console.log('==========================='.green);
                console.log('     Tabla del:  '.green,colors.red(num));
                console.log('==========================='.green);
                console.log(consola)
            }

            fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);

        return ( `tabla-${num}.txt` );
        } catch (err) {
            throw err;
        }
        
    }


module.exports = {
    crearArchivo
}

// const crearArchivo = (num = 5) => {

//     return new Promise((resolve,reject) => {

//         console.log('===========================');
//         console.log(`     Tabla del: ${num}        `);
//         console.log('===========================');
    
//         let  salida = "";
//         for (let i = 1; i <= 10; i++) {
//             salida +=(`${num} X ${i} =  ${num * (i)}\n`);
//         }
//         console.log(salida);

//         fs.writeFileSync(`tabla-${num}.txt`, salida);

//         resolve( `tabla-${num}.txt` )

//     });

    // const getcrearArchivo = async(num) => {   //esto es una prueba fuera del curso
    //     try {  
    //         const archivo = await crearArchivo(num);
    
    //         return archivo;
    //     } catch (error) {
    //         //return error;
    //         throw error; // throw llama al reject de la funcion 
    //     }
    
    // }

// fs.writeFile(`tabla-${num}.txt`, salida, (err) =>{
//     if (err) throw err;
    
//     console.log(`tabla-${num}.txt creado`);
// })
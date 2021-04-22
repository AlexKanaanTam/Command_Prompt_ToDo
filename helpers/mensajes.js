const { resolve } = require("path");

require("colors");

const mostrarMenu=()=>{

    return new Promise((resolve)=>{

        console.clear();
        console.log("=========================".green);
        console.log("Seleccione una opción".green);
        console.log("=========================\n".green);
    
    
        console.log(`${"1".green}. Crear tarea`);
        console.log(`${"2".green}. Listar tareas`);
        console.log(`${"3".green}. Listas tareas completadas`);
        console.log(`${"4".green}. Listar tareas pendientes`);
        console.log(`${"5".green}. Completar tarea(s)`);
        console.log(`${"6".green}. Borrar tareas`);
        console.log(`${"0".green}. Salir\n`);
    
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        })
    
        readline.question("Seleccione una opción: ", (opt)=>{
            readline.close();
            resolve(opt);
        })
    })
}

const pausa=()=>{

    return new Promise((resolve)=>{
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        })
    
        readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt)=>{
            readline.close();
            resolve();
        })
    })

}

module.exports={
    mostrarMenu,
    pausa
}


//Exportamos como un objeto porque es posible que tengamos varias funciones dentro de una misma función 

// el "\n" nos produce un salto de línea

//Si queremos añadir colores dentro de un template string deberemos crear un "${}" donde los núemros sean strings

//El argumento del callback de question será la respuesta

const fs = require("fs");

//todas las interacciones para grabar y leer los archivos

const archivo= "./db/data.json";

const guardarDB=(data)=>{

    fs.writeFileSync(archivo, JSON.stringify(data))

}

const leerDB =()=>{

    if(!fs.existsSync(archivo)){
        return null;
    }

    const info= fs.readFileSync(archivo, {encoded: "utf-8"});
    const data= JSON.parse(info);

    console.log(data);

    return null; 
}

module.exports={
    guardarDB,
    leerDB
}
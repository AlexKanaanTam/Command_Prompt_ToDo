const {v4:uuidv4}= require("uuid")

class Tarea{

    id="";
    desc="";
    completadoEn= null;

    constructor(desc){
        this.id = uuidv4();
        this.desc=desc;
        this.completadoEn=null;

    }             


}

module.exports= Tarea;


//el constructor es lo que se crea cuando creamos una nueva instancia de nuestra tarea.

//Para el ID usaremos el paquete llamado uuid, de esta forma lo pasaremos al constructor.

//Haremos tareas._listado[tarea.id]=tarea donde obtendremos Tareas{ _listado{ id{ tarea{id,desc, completadoEn}}}}
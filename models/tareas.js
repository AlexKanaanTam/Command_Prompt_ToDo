const {v4:uuidv4}= require("uuid");
const Tarea = require("./tarea");



class Tareas{

    _listado={};

    get listadoArr(){

        const listado=[]

        Object.keys(this._listado).forEach((key)=>{      //el object.keys regresa un arreglo de todas las llaves
            const tarea= this._listado[key];
            listado.push(tarea)
        })

        return listado;


    }

    constructor(){

        this._listado= {};
    }

    borrarTarea(id=""){

        if(this._listado[id]){
            delete this._listado[id];

        }
    }

    crearTarea(desc=""){
        const tarea= new Tarea(desc);

        this._listado[tarea.id]=tarea;

    }

    cargarTareasFromArray(tareas=[]){

        tareas.forEach((tarea)=>{
            this._listado[tarea.id]=tarea;
        })
    }

    listadoCompleto(){
        
        console.log();
        this.listadoArr.forEach((tarea, i)=>{

            const idx= `${i+1}`.green; //el color va a fuera del template string;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)? "Completado".green : "Pendiente".red;

            console.log(`${idx} ${desc} :: ${estado}`)
        })

    }

    listarPendientesCompletadas(completada=true){
        
        console.log();
        let contador= 0;

        this.listadoArr.forEach((tarea)=>{
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)? "Completado".green : "Pendiente".red;

            if(completada){

                if (completadoEn){
                    contador += 1;
                    console.log(`${(contador + ".").green} ${desc} :: ${completadoEn}`);
                }
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
                }
            }

        })

    }

    toggleCompletadas=async(ids=[])=>{

        ids.forEach((id)=>{
            tarea= this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn= new Date().toISOString()
            }

            //va,os a marcar como no completadas todas las tareas que no vengan del array ids
        })

        this.listadoArr.forEach((tarea)=>{
            if( !ids.includes(tarea.id)){
                //si no existe en el array de ids tengo que limpairlo
                const tarea= this._listado[tarea.id];
                tarea.completadoEn=null;
            }
        })

    }

}

module.exports= Tareas;


//"this" se utiliza para llamar a la instancia creada fuera del constructor.
// El "get" crea una propiedad en nuestras clases de objetos
// Los métodos de una clase no van precedidas de "const"
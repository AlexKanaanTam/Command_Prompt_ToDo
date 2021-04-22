const colors= require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


const main = async()=>{

    let opt= "";
    const tareas= new Tareas(); //llamamos a tareas porque necesitaremos llamar a sus funciones 

    const tareasDB= leerDB();

    if (tareasDB){//establecer tareas
        tareas.cargarTareasFromArray(tareasDB)
    }

    await pausa()

    do{
        opt= await inquirerMenu(); //la mayor parte del tiempo dbeeremos igualar los await de inquirer a una const

        switch (opt) {
            case "1":
                //crear opción, tendremos que usar en inquirer para obtener un input del usuario
                const desc= await leerInput("Descripción: ")
                tareas.crearTarea(desc)
            break;
                
            case "2":
                //lista opciones
                // console.log(tareas.listadoArr)
                tareas.listadoCompleto()
            break;

            case "3":
                tareas.listarPendientesCompletadas(true);
            break;

            case "4":
                tareas.listarPendientesCompletadas(false);
            break;

            case "5":
                const ids= await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids)

            break;

            case "6":
                const id= await listadoTareasBorrar(tareas.listadoArr);
                if (id !== "0"){
                    const ok= await confirmar("¿Estas seguro?")
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log("tarea borrada")
                    }
                }


            break;
        }

        guardarDB(tareas.listadoArr);
    


        await pausa();

    }while(opt !== "0") //si lo ponemos sin el await generaria un bucle 

    
}

main()


//Las clases que se llaman en el app siempre van en "new Tarea()"----> Nótese el parentesis
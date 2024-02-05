import {useState} from 'react';

const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");
const tareaGuardada = (event)=> {
    
        setNuevaTarea(event.target.value);
    }
      function añadirTarea() {
        const tareaNueva = {
          text: nuevaTarea,
          completed: false,
        };
    
        setTareas([...tareas, tareaNueva]);
        setNuevaTarea("")
      }
      function eliminarTarea(index) {
        const tareasNuevas = tareas.slice();
        tareasNuevas.splice(index, 1);
    
        setTareas(tareasNuevas);

      }
      function completarTarea(index) {
        const tareasNuevas = tareas.slice();
        tareasNuevas[index].completed = true;
    
        setTareas(tareasNuevas);
      }
    return (
      
        <div className="container-fluid align-center text-center ">
            <h1>Bienvenido</h1>
            <h4>Ingresa tus tareas</h4>
            <input type="text" value={nuevaTarea} onChange={tareaGuardada} />  
            <button onClick={añadirTarea} className="btn btn-primary">Agregar tarea</button>
            <ul className="list-group"></ul>
      </div>
    );
};

export default ListaTareas;
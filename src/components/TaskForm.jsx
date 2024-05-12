import { useState, useContext } from "react";
import { TaskContext } from "../contex/TaskContext";

function TaskForm({showForm}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") return alert('Te falta un titulo')
    if (description === "") return alert('Te faltta tu tarea')
    
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className={`div-form ${showForm? 'show': 'show-form'}`}>
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Titulo de tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className='button-form'>
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

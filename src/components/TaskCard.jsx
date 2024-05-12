import { useContext } from "react";
import { TaskContext } from "../contex/TaskContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";


function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="card">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <div className="buttons">
      <button className="button-card" onClick={()=> 
        console.log(task.description)}>
        <MdEdit/>
      </button>
      <button className="button-card" onClick={() => deleteTask(task.id)}>
        <RiDeleteBin6Line/>
      </button>
      </div>
    </div>
  );
}

export default TaskCard;

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { IoMdAddCircle } from "react-icons/io";
// const [isEditing, setIsEditing] = useState(false);
import { useState } from "react";


function App() {
  const [showForm, setShowForm] = useState(false);
  
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main>
      <TaskForm showForm={showForm}/>
      <TaskList />
      <button className="main-buton" onClick={toggleForm}>
        <IoMdAddCircle />
      </button>
    </main>
  );
}

export default App;

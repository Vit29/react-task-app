import TaskCard from './TaskCard'
import { useContext } from 'react';
import { TaskContext } from '../contex/TaskContext'

function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

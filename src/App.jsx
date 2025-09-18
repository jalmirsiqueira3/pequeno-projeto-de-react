import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Titulo from "./components/Titulo";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        method: "GET"
      });

      const data = await response.json();

      const formatted = data.map(item => ({
        id: item.id,
        titulo: item.title,
        descricao: "",
        foiCompletada: item.completed
      }));

      setTasks(formatted);
    }
    // fetchTasks();
  }, []);

  function onTaskClick(taskID) {
    const newTasks = tasks.map(task => {
      if (task.id === taskID) {
        return { ...task, foiCompletada: !task.foiCompletada }
      }

      return task;
    })
    setTasks(newTasks);
  }

  function deleteTask(taskID) {
    const newTasks = tasks.filter(task => task.id !== taskID);
    setTasks(newTasks);
  }

  function addTask(titulo, descricao) {
    const newTask = {
      id: v4(),
      titulo,
      descricao,
      foiCompletada: false
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Titulo>Gerenciador de Tarefas</Titulo>

        <AddTask addTask={addTask} />
        
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App
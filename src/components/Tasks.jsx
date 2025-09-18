import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
    const navigate = useNavigate();

    function verDetalhes(task) {
        const query = new URLSearchParams()
        query.set("titulo", task.titulo)
        query.set("descricao", task.descricao)
        // navigate(`/task?titulo=${task.titulo}&descricao=${task.descricao}`);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => props.onTaskClick(task.id)} 
                        className={`bg-slate-400 w-full flex items-center gap-2 text-left text-white p-2 rounded-md ${
                            task.foiCompletada && "line-through"
                        }`}
                    >
                        {task.foiCompletada ? <CheckIcon /> : ""}
                        {task.titulo}
                    </button>
                    <Button 
                        onClick={() => verDetalhes(task)}
                    >
                        <ChevronRightIcon />
                    </Button>
                    <Button 
                        onClick={() => props.deleteTask(task.id)}
                    >
                        <TrashIcon  />
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks
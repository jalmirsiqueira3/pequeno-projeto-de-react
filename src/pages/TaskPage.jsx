import { useSearchParams } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Titulo from "../components/Titulo";

function TaskPage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams()
    const titulo = searchParams.get("titulo")
    const descricao = searchParams.get("descricao")

    return (
        <div className="w-screen h-screen bg-gray-500 p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute left-0 top-0 bottom-0 text-slate-100"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <Titulo>Detalhes da Tarefa</Titulo>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-600">
                        {titulo}
                    </h2>
                    <p className="text-slate-600">
                        {descricao}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage
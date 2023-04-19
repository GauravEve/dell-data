export default function TaskList({
    tasks,
    completeTaskHandler,
    deletTaskHandler
}){
    tasks.sort((a,b)=>a.completed-b.completed);
    return (
        <div>
            {tasks.map(({label,completed,id})=>(
                <div key={id} className={`task ${completed && 'task--completed'}`}>
                    <button className="task__completed-button" onClick={()=>completeTaskHandler(id)}></button>
                    <p className="task__label">{label}</p>
                    <button className="task__delete-button" onClick={()=>deletTaskHandler(id)}></button>
                    
                </div>
            ))}
        </div>
    )
}
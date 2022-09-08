import { useState } from 'react';
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from './interfaces';

import './styles/styles.css'





function App() {

	const [task, setTask] = useState<string>('')
	const [todoList, setTodoList] = useState<ITask[]>([])

function addTask(){
	const idRandom = (num:number)=> Math.floor(Math.random() * num)

	console.log(idRandom(11))

	const newTask = {id: idRandom(10000), nameTask: task}

	setTodoList([...todoList, newTask])


}


function deleteTask(deleteTaskById:number):void {
		setTodoList(todoList.filter(taskName => taskName.id !== deleteTaskById ))
	
}


	return (
		<div className="App">

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
					value={task}
					onChange={event=> setTask(event.target.value)}
				/>

				<button type="submit" onClick={addTask} className="btn-header">Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			{todoList.map(task=>(
				<TodoTask key={task.id} task={task} deleteTask={deleteTask}/>


			))}


			
		</div>
	);
}

export default App;

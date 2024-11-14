import React, { ChangeEvent, FormEvent } from 'react'
import { CreatedTasks } from './CreatedTasks'
import styles from './Task.module.css'
import {PlusCircle} from 'phosphor-react'
import { Circle, Trash } from 'phosphor-react'
import checkCircle from '../assets/Layer 1.svg'

interface taskDone {
    name: string,
    isDone: boolean,
}

export function Task() {
    const [Tasks, setTasks] = React.useState<taskDone[]>([])
    const [newTask, setNewTask] = React.useState('')

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()

        const newTaskObj = {
            name: newTask,
            isDone: false
        }

            setTasks([...Tasks, newTaskObj])
            setNewTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")
        setNewTask(event.target.value)
    }

    function handleDeleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = Tasks.filter(task => {
            return task.name != taskToDelete            
        })
        setTasks(taskWithoutDeletedOne)
    }

    function handleChangeCircle(taskToUpdate: string) {
        const updatedTasks = Tasks.map(task => 
            task.name === taskToUpdate ? { ...task, isDone: !task.isDone } : task     
        );
        setTasks(updatedTasks);
    }

    return (
        <div className={styles.mainTasksContainer}>
            <form onSubmit={handleCreateNewTask}  className={styles.taskForm}>
                <input
                 required 
                 value={newTask} 
                 onChange={handleNewTaskChange} 
                 name="newTask" 
                 placeholder='Adicione uma nova tarefa' 
                />

                <button type='submit' >Criar <PlusCircle size={18} /></button>
            </form>
            <div className={styles.divSeparacao}>
                <div className={styles.tasksMain}>
                    <div className={styles.tasksContainer}>
                        <p className={styles.createdTasks}>Tarefas criadas<span>{Tasks.length}</span></p>
                        <p className={styles.doneTasks}>Concluidas<span>{Tasks.filter(task => task.isDone).length}</span></p>
                    </div>
                </div>
            {Tasks.length > 0 ? 
                <div className={styles.tasksContentMain}>
                    {Tasks.map((task) => (
                        <div key={task.name} className={styles.tasksContent}>
                            {task.isDone ? <img src={checkCircle} onClick={() => handleChangeCircle(task.name)}/> : <Circle className={styles.circle} size={30} onClick={() => handleChangeCircle(task.name)}/> }
                        
                           {task.isDone ? <p className={styles.paragraphTaskNotDone}>{task.name}</p> : <p className={styles.paragraphTaskDone}>{task.name}</p>}
                            <button className={styles.trashButton} onClick={() => handleDeleteTask(task.name)}>
                                <Trash className={styles.trash} size={24}/>
                            </button>
                    </div>
                    ))}
                </div>

    : <CreatedTasks />}
            </div>
        </div>
    )
}
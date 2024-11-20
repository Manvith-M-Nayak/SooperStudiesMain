import { useState } from 'react';
import React from 'react';
import HeaderWithSidebar from '../Sidebar';
import './Tasks.css';

class TaskStatus extends React.Component {
  render() {
    const completed = this.props.completed;
    if (completed) {
      return <span className="task-status">Completed</span>;
    }
      return <span className="task-status">Scheduled</span>;
  }
}

function Tasks() {
  let [tasks, setTasks] = useState([]);
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [schedule, setSchedule] = useState('');
  let [editingId, setEditingId] = useState(null);

  const addOrUpdateTask = (e) => {
    e.preventDefault();
    
    if (editingId) {
      let updatedTasks = [];
      for (let task of tasks) {
        if (task.id === editingId) {
          task.name = name;
          task.description = description;
          task.schedule = schedule;
        }
        updatedTasks.push(task);
      }
      setTasks(updatedTasks);
      setEditingId(null);
    } 
    else 
    {
      const newTask = {
        id: Date.now(),
        name: name,
        description: description,
        schedule: schedule,
        completed: false,
      };
      const newTasksArray = tasks.slice();
      newTasksArray.push(newTask);
      setTasks(newTasksArray);
    }
    setName('');
    setDescription('');
    setSchedule('');
  };

  const deleteTask = (id) => {
    let remainingTasks = [];
    for (let task of tasks) {
      if (task.id !== id) 
        remainingTasks.push(task);
    }
    setTasks(remainingTasks);
  };

  const toggleComplete = (id) => {
    let toggledTasks = [];
    for (let task of tasks) {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      toggledTasks.push(task);
    }
    setTasks(toggledTasks);
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setName(task.name);
    setDescription(task.description);
    setSchedule(task.schedule);
  };

  return (
    <div className="container">
      <HeaderWithSidebar />
      <h1>Tasks</h1>
      <form onSubmit={addOrUpdateTask}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          required
        />
        <button type="submit">{editingId ? 'Update Task' : 'Add Task'}</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <div className="task-details">
              <span className={task.completed ? "task1" :"task2"}>Task :{task.name}</span>
              <span className={task.completed ? "task1" :"task2"}> Description :{task.description}</span>
              <span className={task.completed ? "task1" :"task2"}> {task.schedule} </span>
              <TaskStatus completed={task.completed}/>
            </div>
            <button onClick={() => startEditing(task)} className="edit-button">Edit</button>
            <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
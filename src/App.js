import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);
  const [isChecked, setIsChecked] = useState(false)

  const add = () => {
    setListTask([
      ...listTask,
      {
        task: task,
        id: Date.now(),
      },
    ]);
    setTask("")
  };
  const deletar = (id) => {
    setListTask(
      listTask.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="content">
        
        <div className="wrapTodo">
          <nav className="menu">
            <ul className="menu-list">
              <li className="list-item">All</li>
              <li className="list-item">Doing</li>
              <li className="list-item">Done</li>
            </ul>
          </nav>
          <form onSubmit={(ev) => add(ev.preventDefault())}>
            <input
              onChange={(event) => setTask(event.target.value)}
              value={task}
              type="text"
              placeholder="WHAT NEEDS TO BE DONE?"
              className="input"
            />
            {listTask.map((item, index) => (
              <div className="tasklist">
                <input 
                  onClick={()=> setIsChecked(true)}
                  type="checkbox" 
                  name="done" 
                  value="done"
                  className="check"
                />
                <p>{item.task}</p>
                <span onClick={() => deletar(item.id)} key={index}>
                  X
                </span>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

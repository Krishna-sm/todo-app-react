import React, { useEffect, useState } from "react";

const Task = ({ title, desc, dlt, id }) => {
  return (
    <>
      <div className="task">
        <h3>{title}</h3>
        <div className="task1">
          <p>{desc}</p>
          <button className="btn" onClick={() => dlt(id)}>-</button>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const inializeData = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
  console.log(inializeData)
  const [task, setTask] = useState(inializeData);
  const [title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  useEffect(()=>{

    localStorage.setItem("task", JSON.stringify(task))
  },[task])
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (title !== "" && Desc !== "") {

      setTitle("");
      setDesc("");
      setTask([...task,{title,Desc}])
    }
  };
  const DeleteHandler = (id) => {
    const NewData = task.filter((item, index) => {
      return index !== id;
    });
    setTask(NewData);

  };

  return (
    <>
      <div className="container">
        <h1 className="heading">Todo App</h1>
        <form onSubmit={SubmitHandler}>
          <h1>Daily Goals</h1>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={Desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className="sub">Add</button>
        </form>
        {/* <Task  title={task.title} desc={} /> */}
        {task.map((item, index) => (
          <Task
            key={index}
            id={index}
            title={item.title}
            desc={item.Desc}
            dlt={DeleteHandler}
          />
        ))}
      </div>
    </>
  );
};

export default App;

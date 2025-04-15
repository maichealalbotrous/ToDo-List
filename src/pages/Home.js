import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
const Home = () => {
  const [task, settask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const inputref = useRef(null);

  const AdAddTask = () => {
    settask([
      ...task,
      { num: count, Title: inputref.current.value, diplay: "" },
    ]);
    setCount(count + 1);
    inputref.current.value = "";
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
    localStorage.setItem("count", JSON.stringify(count));
  }, [task, count]);

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    const tasks = localStorage.getItem("tasks");

    if (storedCount) {
      setCount(JSON.parse(storedCount));
    }

    if (tasks) {
      settask(JSON.parse(tasks));
    }
  }, []);

  const SetIcon = (num) => {
    let data = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].num === num) {
        if (data[i].diplay === "") {
          data[i].diplay = "Line";
        } else {
          data[i].diplay = "";
        }
        break;
      }
    }
    settask(data);
  };

  const Delet = (num) => {
    let Data = JSON.parse(localStorage.getItem("tasks"));
    const filterdata = Data.filter((d) => d.num !== num);
    settask(filterdata);
  };

  return (
    <div>
      <div className="ToDoList container">
        <h1>To-Do List</h1>
        <div className="InputDiv ">
          <input ref={inputref} className="input" placeholder="Add Your Task" />
          <button
            onClick={() => {
              AdAddTask();
            }}
          >
            Add
          </button>
        </div>

        <div className="TasksDiv">
          {task.map((prev, index) => (
            <div className="The_Task" key={prev.num}>
              <span className="Cheak">
                <p
                  onClick={() => {
                    SetIcon(prev.num);
                  }}
                >
                  {prev.diplay === "" ? (
                    <img src="/Assets/not_tick.png" />
                  ) : (
                    <img src="/Assets/tick.png" />
                  )}
                </p>

                <p
                  className={` ${prev.diplay === "Line" ? "Line" : "Task_txt"}`}
                >
                  {prev.Title}
                </p>
                <p className="Exite" onClick={() => Delet(prev.num)}>
                  <img src="/Assets/cross.png" />
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

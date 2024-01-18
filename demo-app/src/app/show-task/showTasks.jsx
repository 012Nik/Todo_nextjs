"use client";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";


const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);


  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log("task array"+tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  /*
Dependency Array [context.user]:
The dependency array [context.user] specifies that the effect should 
re-run whenever context.user changes. If context.user is null or changes 
to a different user object, the effect will be triggered again. */.0

  async function deleteTaskParent(tasksId) {
    try {
       // 1. Attempt to delete the task using the deleteTask function
      const result = await deleteTask(tasksId);
    
      // 2. If the deletion is successful:
      // a. Update the local state (tasks) by removing the deleted task
      const newTasks = tasks.filter((item) => item._id != tasksId);
      setTasks(newTasks);
     alert("Your task is deleted ")
    } catch (error) {
      console.log(error);
      alert("Error in deleting task..!!!")
    }
  }

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your tasks ( {tasks.length} )</h1>

        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
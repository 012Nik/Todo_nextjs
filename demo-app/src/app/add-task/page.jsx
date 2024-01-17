"use client";
import React, { useState } from 'react';
//import taskimage from '../../assets/task.svg';
import addTask from '@/services/taskService';

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "65a0edd793828099abb06116"
  });

  const handleAddTask = async (event) => {
    console.log("hello1")
    event.preventDefault(); 
    console.log("hello")
    console.log("Task before submission:", task);
    try {
      console.log("Task before submission:", task);
    const result = await addTask(task);
    console.log("Task creation result:", result);
      setTask({
        title: "",
    content: "",
    status: "",
      }) 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grid grid-cols-12 justify-center m-10'>
      <div className='border col-span-6 col-start-4 p-5 shadow-gray-700 shadow-lg'>
        
        <h1 className='text-5xl text-black-600 text-center font-bold'>Add your task here</h1>
        <form className='bg-black text-white justify-center px-5 py-5 m-5' 
        action="#!" 
        onSubmit={handleAddTask}>
          <div>
            <label htmlFor="task_title" className='block font-medium text-base'>Title</label>
            <input
              id="task_title"
              className='text-black p-3 w-full rounded-full focus:ring-red-600'
              name='task_title'
              onChange={(event) => {
                console.log("called")
                setTask({
                  ...task,
                  title: event.target.value
                });
              }}
              value={task.title}
            />
            <br />

            <label htmlFor="task_content" className='block font-medium text-base'>Content</label> {/* Fix typo here */}
            <textarea
              id="task_content"
              className='text-black p-5 w-full rounded-full focus:ring-red-600'
              name='task_content' 
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value
                });
              }}
              value={task.content}
            ></textarea>

            {/* Task status */}
          </div>
          <div>
            <label className='block font-medium text-base'>Status</label>
            <select
              className='text-black'
              
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value
                });
              }}
              value={task.status}
            >
              <option value="none">select option</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className='mt-4 flex'>
            <button type="submit" className='bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-950'>Add todo</button>
            <button  className='bg-red-500 ms-3 py-2 px-3 rounded-lg hover:bg-red-950'>Clear</button>
          </div>
          {JSON.stringify(task)}
        </form>
      </div>
    </div>
  );
}
export default AddTask;

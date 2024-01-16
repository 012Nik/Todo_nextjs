import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  try {
    console.log("in function addTask intaskservices")
    const response = await httpAxios.post("/api/tasks", task);
    return response.data; // Add the missing return statement here
  } catch (error) {
    console.error("Error adding task:", error);
    throw error; // Rethrow the error to propagate it up the call stack
  }
}

export default addTask;

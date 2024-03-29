import { httpAxios } from "@/helper/httpHelper";
import User from "@/models/users";
import { data } from "autoprefixer";

export async function signUp(user)
{
    const result = await httpAxios.post("/api/users",user)
                                  .then((response)=>response.data);

                                  return result;s
}


export async function login(loginData) {
    const result = await httpAxios
      .post("/api/login", loginData)
      .then((response) => response.data);
    return result;
  }
  
  export async function currentUser() {
    //it call the current api
    const result = await httpAxios
      .get("/api/current")
      .then((response) => response.data);
    return result;
  }
  
  export async function logout() {
    const result = await httpAxios
      .post("/api/logout")
      .then((response) => response.data);
    return result;
  }
import { httpAxios } from "@/helper/httpHelper";

export async function login(data)
{
 
     const result = await httpAxios.post("/api/login",data)
                                  .then((response)=>response.data);

          return result;
}


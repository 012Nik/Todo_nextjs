"use client"
const { currentUser } = require("@/services/userService");
const { useEffect, useState } = require("react");
const { default: UserContext } = require("./userContext");


const UserProvider =({children}) =>{
    const [user,setUser] = useState(undefined);

    useEffect(()=>
    {
        async function load(){
            try {
                const tempUser = await currentUser();
                console.log("tempUsser: "+tempUser)
                setUser({...tempUser})
            } catch (error) {
                console.log("from user provider"+error);
                setUser(undefined)
            }
        }
        load();
    },[])

    return (
        <UserContext.Provider value={{user,setUser}}>
          {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
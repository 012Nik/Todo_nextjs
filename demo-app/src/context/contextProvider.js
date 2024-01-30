"use client"

//UserProvider component using React that utilizes the useEffect hook to fetch the current user 
//& provides a context (UserContext) with the user information to its children. 
// This is a common pattern in React applications for managing global state.

const { currentUser } = require("@/services/userService");
const { useEffect, useState } = require("react");
const { default: UserContext } = require("./userContext");


const UserProvider =({children}) =>{
    const [user,setUser] = useState(undefined);

    useEffect(()=>
    {
        async function load(){
            try {
                const tempUser = await currentUser();  //
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
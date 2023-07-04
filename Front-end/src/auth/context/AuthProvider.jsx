import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { types } from "../types/types"


const init = () =>{

    const token = JSON.parse(  localStorage.getItem('token'));

    return{

        logged:!!token,
        token: token

    }

}


export const AuthProvider =({children})=>{
    
    const [state, dispatch] = useReducer(authReducer, {}, init)
    
    const login = (token = '',id ='') =>{
        const action = {
            type: types.login,
            payload: {
                id: id,
                token: token
            }

        }
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(action);
    
    }

    const logout = () =>{

          localStorage.removeItem('token');
          const action = {type: types.logout};
          dispatch(action);  

    }




    return (

    <AuthContext.Provider value={{
        ...state, 
        login: login, 
        logout: logout
    }}>

    {children}

    </AuthContext.Provider>

    )


}
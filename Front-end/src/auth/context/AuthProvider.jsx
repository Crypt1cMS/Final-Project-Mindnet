import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { types } from "../types/types"


const init = () =>{

    const token = JSON.parse(  localStorage.getItem('token'));
    const name = JSON.parse(  localStorage.getItem('name'));
    const lastname = JSON.parse(  localStorage.getItem('lastname'));
    const id = JSON.parse(  localStorage.getItem('id'))

    return{

        logged:!![token,name,lastname,id],
        token: token, 
        name: name, 
        lastname: lastname, 
        id: id


    }

}


export const AuthProvider =({children})=>{
    
    const [state, dispatch] = useReducer(authReducer, {}, init)
    
    const login = (token = '',id ='', name ='', lastname='') =>{
        const action = {
            type: types.login,
            payload: {
                id: id,
                token: token,
                name: name,
                lastname: lastname
            }

        }
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('name', JSON.stringify(name));
        localStorage.setItem('lastname', JSON.stringify(lastname));
        localStorage.setItem('id', JSON.stringify(id));

        dispatch(action);
    
    }

    const logout = () =>{

          localStorage.removeItem('token');
          localStorage.removeItem('name');
          localStorage.removeItem('lastname');
          localStorage.removeItem('id');
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
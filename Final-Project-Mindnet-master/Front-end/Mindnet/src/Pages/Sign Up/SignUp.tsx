import "./SignUp.css"
import "../../global.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function SignUp() {
  
  
  
  const navigate = useNavigate();

  const [form, setFrom] = useState({
      
      name:"", 
      lastname:"",
      email:"",
      password:"",
      birthday:""

  });

  const formChange=(event: any) =>{

    const{name, value} = event.target;


       setFrom({
        ...form,
        [name]:value

       })

  }

  const guardarUsuario = async ()=>{
    try {
        const url ="http://localhost:9000/api/users";
        const body ={
            name: form.name,
            lastname: form.lastname,
            email:form.email,
            password:form.password,
            birthday: form.birthday

        }
        const response = await axios.post(url,body);
        console.log(response);
        swal("EN HORA BUENA!","Usuario registrado correctamente","success");
        navigate("/login");

    } catch(error)
    {
      let respuesta = JSON.parse(error.request.response).mensaje;  
      swal("Ups a ocurrido un error",`revise los datos ingresados ${respuesta}`,"warning")
      console.error(error);
        navigate("/signup");

    }


  }

//http://localhost:9000/api/users
  const formPre = (event:any) =>{
    event.preventDefault(),
    guardarUsuario(),
    console.log();
  }
  
  
  
  
  
  return (
    <main>
      <div className="img1">
        <img src="../public/signup1.jpg" alt="People talking" id="signup-image"/>
      </div>

      <div className="container">
        <h1 id="logo">Mind<span id="logo-highlight">Net</span></h1>
            <form id="signup" onSubmit={formPre}>
                <div className="form-group">
                    <input type="text" placeholder="Nombre" name="name" value={form.name} onChange={formChange} required />
                    <input type="text" placeholder="Apellido" name="lastname" value={form.lastname} onChange={formChange} required />
                </div>

                <div className="email-group">
                    <input
                        type="text"
                        placeholder="Correo electronico"
                        name="email"
                        value={form.email}
                        onChange={formChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={form.password}
                        onChange={formChange}
                        required
                    />
                </div>

                <div className="date-group">
                    <label className="form-date__label">Fecha de nacimiento
                    <input type="date"  
                    placeholder="birthday" 
                    name="birthday" 
                    value={form.birthday}  
                    onChange={formChange} required />
                    </label>
                    {/* <input type="number" placeholder="Mes" name="Mes" required />
                    <input type="number" placeholder="Año" name="Año" required /> */}
                </div>
                <div className="button-group">
                    <button type="submit" className="primary-button">Registrate Ahora</button>
                    <p>O</p>
                    <Link to={`/`}><button type="submit" className="secondary-button">Iniciar Sesión</button></Link>
                </div>
            </form>
      </div>

      <div></div>
    </main>
  );
}

export default SignUp
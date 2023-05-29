import "./RegisterPage.css"

function App() {
  return (

    <main>
        <div className='img1'>
            <img src="" alt="People talking" />
        </div>

        <div className="container">
            <form>
                <h1>MindNet</h1>
                    <div className="content">

                        <div className="input-box1">
                            <input type="text" placeholder="Nombre" name="nombre" required></input>
                            <input type="text" placeholder="Apellido" name="apellido" required></input>
                        </div>

                        <div className="input-box2">
                            <input type="text" placeholder="Correo electronico" name="email" required></input>
                        </div>

                        <div className="input-box3">
                            <input type="password" placeholder="Contraseña" name="contraseña" required/>
                        </div>

                        <div className="input-box4">
                            <input type="text" placeholder="Dia" name="Dia" required></input>
                            <input type="text" placeholder="Mes" name="Mes" required></input>
                            <input type="text" placeholder="Año" name="Año" required></input>
                        </div>

                        <div className="btn1">
                            <button type="submit">Registrate Ahora</button>
                        </div>

                        <p>o</p>

                        <div className="btn2">
                            <button type="submit">Iniciar Sesión</button>
                        </div>

                    </div>
            </form>
        </div>

        <div></div>
    </main>

  );
}

export default App

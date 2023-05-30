import "./SignUp.css"
import "./global.css"

function SignUp() {
  return (
    <main>
      <div className="img1">
        <img src="../public/signup1.jpg" alt="People talking" id="signup-image"/>
      </div>

      <div className="container">
        <h1 id="logo">Mind<span id="logo-highlight">Net</span></h1>
            <form id="signup">
                <div className="form-group">
                    <input type="text" placeholder="Nombre" name="nombre" required />
                    <input type="text" placeholder="Apellido" name="apellido" required />
                </div>

                <div className="email-group">
                    <input
                        type="text"
                        placeholder="Correo electronico"
                        name="email"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="contraseña"
                        required
                    />
                </div>

                <div className="date-group">
                    <input type="number" placeholder="Dia" name="Dia" required />
                    <input type="number" placeholder="Mes" name="Mes" required />
                    <input type="number" placeholder="Año" name="Año" required />
                </div>
                <div className="button-group">
                    <button type="submit" className="primary-button">Registrate Ahora</button>
                    <p>O</p>
                    <button type="submit" className="secondary-button">Iniciar Sesión</button>
                </div>
            </form>
      </div>

      <div></div>
    </main>
  );
}

export default SignUp

import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../../global.css';
import './LogIn.css';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
    
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className="img1">
        <img src="../public/login.jpg" alt="People talking" id="signup-image" />
      </div>

      <div className="container">
        <h1 id="logo">
          Mind<span id="logo-highlight">Net</span>
        </h1>
        <form id="login" onSubmit={handleSubmit}>
          <div className="email-group">
            <input
              type="text"
              placeholder="Correo electronico"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              name="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="primary-button">
              Iniciar Sesión
            </button>
            <a href="#" className="secondary-link">
              ¿Olvidaste tu contraseña?
            </a>
            <hr className="form-divider" />
          </div>
        </form>
        <Link to={`/signup`}>
          <button type="submit" className="secondary-button">
            Registrate Ahora
          </button>
        </Link>
      </div>

      <div></div>
    </main>
  );
}

export default LogIn;

import './App.css'
import '../public/laptop1.png'

function App() {
  return (

  <main>
      <div className="img1">
        <img src="laptop1.png" alt="Laptop on a desk" id="confirmation-page"/>
      </div>

        <div className='container'>
          <h1 id="logo">Mind<span id="logo-highlight">Net</span></h1>
            <div className='hero-content'>
              <h2 id='hero-title'>Bienvenido a Mindnet!</h2>
              <p id='hero-text'>Verifica tu dirreción de correo electrónico para acceder a tu cuenta y comenzar a usar MindNet</p>
            </div>
              <div className='btn-main'>
                <button type='submit'>Confirma tu correo electrónico</button>
              </div>
        </div>
  </main>
  );
}

export default App

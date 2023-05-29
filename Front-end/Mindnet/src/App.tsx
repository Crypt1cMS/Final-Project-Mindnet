import './App.css'
import img1 from './assets/mindnet-laptopdesk.jpeg'

function App() {
  return (

  <main>
      <div className='img1'>
        <img src={img1} alt="Computer on a desk" />
      </div>

      <div className='hero-text'>
        <h1>MindNet</h1>
        <h2>Bienvenido a Mindnet!</h2>
        <p>Verifica tu dirreción de correo electrónico para acceder a tu cuenta y comenzar a usar MindNet</p>
        <button id='btn-arrow-main' type='submit'>Confirma tu correo electrónico</button>
      </div>
  </main>
  );
}

export default App

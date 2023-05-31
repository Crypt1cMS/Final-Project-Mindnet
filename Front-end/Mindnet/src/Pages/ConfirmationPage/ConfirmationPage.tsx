import './ConfirmationStyle.css'
import '../../../public/laptop1.png'
import '../../global.css'

function ConfirmationPage() {
  return (

  <main>
      <div className="img1">
        <img src="laptop1.png" alt="Laptop on a desk" id="confirmation-page"/>
      </div>

        <div className='container'>
          <h1 id="logo">Mind<span id="logo-highlight">Net</span></h1>
            <div className='hero-content'>
              <h2 id='subtitle'>¡Bienvenido a Mindnet!</h2>
              <p id='subtext'>Verifica tu dirreción de correo electrónico para acceder a tu cuenta y comenzar a usar MindNet</p>
            </div>
                <button className="btn-main" type='submit'>Confirma tu correo electrónico</button>
        </div>
  </main>
  );
}

export default ConfirmationPage

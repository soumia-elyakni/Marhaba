import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import {'marhabaLogo.png'} from '../../../public/'

const Header = ()=>{
    return (
    <>
      {/* <img src={"/${marhaba-logo}.png"} alt="image"></img> */}
      <div className='header-container d-flex flex-row bg-info w-100 justify-content-evenly p-3'>
        <button className='w-25'>
            Login
        </button>
        <button className='w-25'>
            Signin
        </button>
      </div>
    </>
    )
}

export default Header 
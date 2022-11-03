import './Header.css';
import marhabaLogo from '../../assets/marhabaLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import {'marhabaLogo.png'} from '../../../public/'

const Header = (props) => {
  return (
    <>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className='w-25' src={marhabaLogo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Menu</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Livraison
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Panier</a></li>
                    <li><a className="dropdown-item" href="#">Paiment</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Tracking</a></li>
                  </ul>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search In Menu" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <div className="d-flex md-flex-row sm-flex-column justify-content-evenly w-25">
              <button className="btn btn-outline-success" type="submit">LogIn</button>
              <button className="btn btn-outline-success" type="submit">SignIn</button>
              </div>
            </div>
          </div>
        </nav></div>

    </>
  )
}

export default Header 
import './Container.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Container = ()=>{
    return (
    <>
    <div id="ok" className='d-flex flex-row justify-content-evenly pt-3'>
      <Login/>
      <Signup/>
    </div>  
    </>
    )
}

export default Container;
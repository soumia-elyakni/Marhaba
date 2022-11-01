import './Container.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
const Container = ()=>{
    return (
    <>
    <div className='d-flex flex-row justify-content-between'>
      <Login/>
      <Signup/>
    </div>  
    </>
    )
}

export default Container;
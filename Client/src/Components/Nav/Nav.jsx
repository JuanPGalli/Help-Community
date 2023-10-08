import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Login from '../Login/Login';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';


export const Nav = () => {
    const auth = useAuth();
    const { email } = auth.user;
    const [loginOpen, setLoginOpen] = useState(false);
    
    const openLogin = () => {
      setLoginOpen(true);
      document.body.style.overflow = 'hidden';
    };
  
    const closeLogin = () => {
      setLoginOpen(false);
      document.body.style.overflow = 'unset';
    };

    const handleLogout = () => {
        auth.logout();
    }

    return (
        <nav className='Nav'>
            
            <div className='nav-container'>

                <div className='nav-button-container'>
                    <Link to={'/'}>
                        <button className='nav-button'>Landing</button>
                    </Link>
                    <Link to={'/about'}>
                        <button className='nav-button'>Acerca de</button>
                    </Link>
                    {/* <Link to='/createcampaign'> */}
                        <Link to={"/create/campaign"}>
                            <button className='nav-button' > Crea una campaña! </button>
                        </Link>
                        <Link to={"/products"}>
                            <button className='nav-button' >Productos</button>
                        </Link>
                        <Link to={"/shoppingCart"}>
                        <button className='nav-button' > <FontAwesomeIcon icon={faCartShopping}/></button>
                      
                        </Link>
                    {/* </Link> */}
                    {/* <UploadWidget/> */}
                </div>


                <div className='sb-and-login'>
                    {/* <div className='sb'>
                        <SearchBar/>

                    </div> */}
                    {
                        email 
                        ? <button className='nav-button' onClick={handleLogout}>Cerrar Sesion</button>
                        : <button className='nav-button' onClick={openLogin}>Iniciar Sesion</button>
                    }
                    {loginOpen && <Login closeLogin={closeLogin} />}

                    {
                        email ? <button className='nav-button'>{email}</button> : null
                    }

                </div>


            </div>

        </nav>
    )
}

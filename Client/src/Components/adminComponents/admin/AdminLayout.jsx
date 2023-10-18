
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useAuth } from '../../../context/AuthContext.jsx'; // Importa tu contexto de autenticación
import { getUsers } from '../../../redux/actions/action.js'; // Importa la acción getUsers
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

import "./adminLayout.css"

import SideBarAdmin from '../SideBarAdmin/SideBarAdmin.jsx'
import Dashboard from '../dashboard/Dashboard.jsx';
import CreateCampaign from '../../createCampaign/CreateCampaign.jsx'
import CreateProduct from '../../createProduct/CreateProduct.jsx'
import { AllBuys }  from '../../buys/allBuysAdmin.jsx'
import { Products } from '../../Products/Products.jsx'
import { AdminUsers } from '../adminUsers/AdminUsers.jsx';
import MailingForm from '../mailing/mailingForm.jsx';




function AdminLayout() {
  const auth = useAuth();
  const { email } = auth.user; // Obtenemos el correo electrónico del usuario actual

  const [hasAdminPermissions, setHasAdminPermissions] = useState(false);

  // Utilizamos useEffect para verificar los permisos de administrador al cargar el componente
  useEffect(() => {
    // Realizamos una solicitud al servidor para verificar los permisos de administrador
    axios.get(`/user/email?email=${email}`) // Reemplaza con la URL de tu endpoint para verificar permisos
    .then((response) => {
      const data = response.data;

      console.log(data);
      let hasPermissions = false;

      if (data && (data[0].userAdmin || data[0].userSuperadmin)) {
        hasPermissions = true;
      }
      setHasAdminPermissions(hasPermissions); // Actualiza el estado después de verificar los permisos
      console.log(hasPermissions); // Imprime el valor actualizado
    })
      .catch((error) => {
        console.error('Error al verificar permisos de administrador', error);
      });
  }, [email]);

  // Si el usuario no tiene permisos de administrador, redirigirlo a la página /home
  // if (!hasAdminPermissions) {
  //   return <Navigate to="/home" replace />;
  // }

  return (
    <>
      <div className="coco">
        <SideBarAdmin />
        <div className="content">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path='/create/campaign' element={<CreateCampaign />} />
            <Route path='/allbuys' element={<AllBuys />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<AdminUsers />}  />
            <Route path="/mailing" element={<MailingForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;














// function Admin() {
//   const navigate = useNavigate();

//   return (
//     <div>
//     <Dashboard/> 
//       <Outlet />
//     </div>
//   );
// }

// export default Admin;




  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user1 = useSelector((state) => state.users);

//   const [habilitado, setHabilitado] = useState(true);
  
//   let userEnStorage = JSON.parse(localStorage.getItem("user"));

//   console.log("ESTO ES USER EN STORAGE LUEGO DE CERRAR SESION:", userEnStorage);
//   useEffect(() => {
//     dispatch(getUsers());
//     if (user1) {
//       if (!userEnStorage) {
//         console.log("que onda");

//         navigate("/home");
//         setTimeout(function () {
//           window.alert("Acceso bloqueado :)");
//         }, 1000);
//       } else if (userEnStorage.userAdmin === false) {
//         console.log("entra en el segundod e admin");
//         navigate("/home");
//         setTimeout(function () {
//           window.alert("Acceso bloqueado :)");
//         }, 1000);
//       }
//     } else console.log("BIENVENIDO");
//   }, []);

//   return (
//     <>
//       {userEnStorage && userEnStorage.userAdmin === true ? (
//         <>
//           <div>
//             <SideBarAdmin />
//           </div>
//         </>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }
// export default Admin;



// Llama a dispatch(getUsers()) para obtener una lista de usuarios a través de Redux.
// Comprueba si existe un usuario almacenado en el localStorage del navegador.
// Si no hay un usuario en el almacenamiento local (userEnStorage es null o undefined), redirige al usuario a la página de inicio /home y muestra una alerta.
// Si hay un usuario en el almacenamiento local, comprueba si el usuario tiene un perfil con el valor 1. Si es así, nuevamente redirige al usuario a la página de inicio y muestra una alerta.
// Si no se cumple ninguna de las condiciones anteriores, muestra "BIENVENIDO" en la consola.
// Renderizado condicional:

// En la parte de retorno (return), el componente se renderiza condicionalmente.
// Si existe un usuario en el almacenamiento local y ese usuario tiene un perfil con el valor 2, se renderiza el componente NavBar y SideBarAdmin. Esto sugiere que esta parte del código es específica para los usuarios con perfil de administrador.
// En resumen, el componente Admin parece estar diseñado para proporcionar una interfaz y lógica de control para usuarios con perfiles de administrador. Realiza comprobaciones de autenticación y perfil de usuario antes de permitir el acceso a la interfaz de administrador. Si el usuario no cumple con ciertas condiciones, se le redirige a la página de inicio y se muestra una alerta. Este código se integra con otras partes de tu aplicación, como Redux y el enrutamiento, para lograr este comportamiento.



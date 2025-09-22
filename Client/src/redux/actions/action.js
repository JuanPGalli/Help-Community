import axios from 'axios';
import {
  HANDLE_USER_LOGOUT,
  GET_USER_DATA,
  ADD_ONE_TO_CART,
  ADD_TO_CART,
  GET_DETAIL_CAMPAIGN,
  GET_STATE,
  REMOVE_ONE_TO_CART,
  REMOVE_TO_CART,
  GET_PRODUCT_BY_NAME,
  GET_ALL_BUYS,
  CLEAR_CART,
  SET_LOADING,
  CLEAR_LOADING,
  GET_CAMPAIGN,
  FILTER_BY_STATE,
  GET_STATES,
  GET_CATEGORY,
  FILTER_BY_CATEGORY,
  GET_PRODUCT,
  ORDEN_PRECIO,
  GET_CATEG,
  FILTER_BY_CATEG,
  FILTROS_PRECIO,
  RESET,
  CREATE_REVIEW,
  GET_REVIEWS,
  GET_USERS,
} from './action_type';

// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "development") {
//   // En entorno de desarrollo
//   axios.defaults.baseURL = "http://localhost:3001";
// } else {
//   // En otros entornos (por ejemplo, producción)
//   axios.defaults.baseURL =
//     "https://help-community-production-ad63.up.railway.app";
// }

axios.defaults.baseURL = 'https://help-community-production.up.railway.app/';
export const getCampaign = () => {
  return async function (dispatch) {
    try {
      const campaignData = await axios('/campaign');
      const campaign = campaignData.data;
      dispatch({ type: GET_CAMPAIGN, payload: campaign });
    } catch (error) {
      console.log('error en devolver la action', error.message);
    }
  };
};

export const getStates = () => {
  return async function (dispatch) {
    try {
      const statesData = await axios('/state');
      const states = statesData.data;
      dispatch({ type: GET_STATES, payload: states });
    } catch (error) {
      console.log('error en devolver la action', error.message);
    }
  };
};

export const getReviews = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const reviewsData = await axios('/review');
      const review = reviewsData.data;
      dispatch({ type: GET_REVIEWS, payload: review });
    } catch (error) {
      console.log('error en devolver la action', error.message);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const getCategory = () => {
  return async function (dispatch) {
    try {
      const categoryData = await axios('/category');
      const category = categoryData.data;
      dispatch({ type: GET_CATEGORY, payload: category });
    } catch (error) {
      console.log('error en devolver la action', error.message);
    }
  };
};

export const getCateg = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const categData = await axios('/categoryProduct');
      const categ = categData.data;
      dispatch({ type: GET_CATEG, payload: categ });
    } catch (error) {
      console.log('error en devolver la action', error.message);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const getDetailCampaign = (name) => {
  return async function (dispatch) {
    try {
      const dataDetail = await axios(`/campaign?name=${name}`);
      const dataCampaign = dataDetail.data;
      dispatch({
        type: GET_DETAIL_CAMPAIGN,
        payload: dataCampaign,
      });
    } catch (error) {
      console.log('error en la action de detail');
    }
  };
};

export function filterByState(payload) {
  return {
    type: 'FILTER_BY_STATE',
    payload,
  };
}

export function filterByCategory(payload) {
  return {
    type: 'FILTER_BY_CATEGORY',
    payload,
  };
}

export function filterByCateg(payload) {
  return {
    type: FILTER_BY_CATEG,
    payload,
  };
}

export const productOrdenPrecio = (order) => {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      dispatch({ type: ORDEN_PRECIO, payload: order });
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const productsFiltrosPrecio = (order) => {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      dispatch({ type: FILTROS_PRECIO, payload: order });
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const resetProducts = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      dispatch({ type: RESET });
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const getProduct = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const productData = await axios('/product');
      const products = productData.data;
      dispatch({ type: GET_PRODUCT, payload: products });
    } catch (error) {
      console.log('error en devolver los productos', error.message);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};
export const getState = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios('/state');
      dispatch({
        type: GET_STATE,
        payload: data,
      });
    } catch (error) {
      console.log(error.mesage);
    }
  };
};

export function postCampaign(payload) {
  return async function () {
    try {
      const response = await axios.post('/campaign/create', payload);
      return response;
    } catch (error) {
      return error.message;
    }
  };
}

export function postProduct(payload) {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios.post('/product', payload);
      return response;
    } catch (error) {
      return error.message;
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
}

export function putProduct(payload) {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios.put(`/product/edit/${payload.id}`, payload);
      return response;
    } catch (error) {
      console.error(error);
      return { error: true, message: 'Error al editar el producto' }; // 🔹 opcional
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
}
export function postUser(payload) {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const { data } = await axios.post('/user/create', payload);

      if (!data.length) throw Error('No se ha podido crear el usuario');
      if (data.length) console.log('Usuario creado correctamente');
    } catch (error) {
      return error.message;
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
}

export function postMailing(payload) {
  return async function (dispatch) {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios.post('/admin/mailing', payload);
      return response;
    } catch (error) {
      return error.message;
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
}

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
};

export const removeTocart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id,
  };
};
export const addOneToCart = (id) => {
  return {
    type: ADD_ONE_TO_CART,
    payload: id,
  };
};

export const removeOneToCart = (id) => {
  return {
    type: REMOVE_ONE_TO_CART,
    payload: id,
  };
};

export const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios(`/product?name=${name}`);
      dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const createOrder = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const { data } = await axios.post('/payment/create_order', payload);
      console.log(data);
      window.location.href = data.init_point;
      return data;
    } catch (error) {
      console.error(error);
      return { error: true, message: 'No se pudo crear la orden' }; //Tratamiento de mensaje de error personalizado.
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios.get('/user');
      const data = response.data;
      //   console.log("Response user", response.data);
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const getAllBuys = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios('/buys');
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const getAllBuysForUser = (email) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios(`/buys/user/${email}`);
      return response.data; // devolvemos los buys para usar en setBuys
    } catch (error) {
      console.error('Error obteniendo compras del usuario', error);
      throw error; // para que caiga en el catch del componente
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const getUserByEmail = (email) => {
  return async (dispatch) => {
    try {
      if (email === 'logout') {
        dispatch(setLoading()); // 🔹 inicia loader
        const setUserTo = {
          name: '',
          email: '',
          id: '',
          image: '',
          userAdmin: false,
          userSuperadmin: false,
          userState: true,
        };

        dispatch({ type: HANDLE_USER_LOGOUT, payload: setUserTo });

        return setUserTo;
      } else {
        const response = await axios(`/user/email/?email=${email}`);
        const userData = response.data[0];
        // console.log(userData);
        // Despacha una acción para actualizar el estado con los datos del usuario
        dispatch({ type: GET_USER_DATA, payload: userData });

        return userData;
      }
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

export const createReview = (review) => {
  return { type: CREATE_REVIEW, payload: review };
};

// Acción para banear o eliminar un usuario
export const banOrDeleteUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading()); // 🔹 inicia loader
      const response = await axios.put(`/user/update/${userId}`, {
        userState: false,
        userAdmin: false,
        userSuperadmin: false,
      });
      if (response.status === 200) {
        // Aquí puedes despachar una acción de éxito si lo deseas
        dispatch({ type: 'BAN_OR_DELETE_USER_SUCCESS', payload: response.data });
      } else {
        // Aquí puedes despachar una acción de error si lo deseas
        dispatch({
          type: 'BAN_OR_DELETE_USER_ERROR',
          payload: 'Error al banear o eliminar al usuario',
        });
      }
    } catch (error) {
      // Manejo de errores
      console.error(error);
      dispatch({
        type: 'BAN_OR_DELETE_USER_ERROR',
        payload: 'Error al banear o eliminar al usuario',
      });
    } finally {
      dispatch(clearLoading()); // 🔹 corta loader
    }
  };
};

// Acción para otorgar acceso de administrador a un usuario
export const grantAdminAccess = (userId) => async (dispatch) => {
  try {
    dispatch(setLoading()); // 🔹 inicia loader
    const response = await axios.put(`/user/update/${userId}`, {
      userState: true,
      userAdmin: true,
      userSuperadmin: false,
    });
    if (response.status === 200) {
      // Aquí puedes despachar una acción de éxito si lo deseas
      dispatch({ type: 'GRANT_ADMIN_ACCESS_SUCCESS', payload: response.data });
    } else {
      // Aquí puedes despachar una acción de error si lo deseas
      dispatch({
        type: 'GRANT_ADMIN_ACCESS_ERROR',
        payload: 'Error al otorgar acceso de administrador',
      });
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
    dispatch({
      type: 'GRANT_ADMIN_ACCESS_ERROR',
      payload: 'Error al otorgar acceso de administrador',
    });
  } finally {
    dispatch(clearLoading()); // 🔹 corta loader
  }
};

// Acción para habilitar un usuario
export const unbanUser = (userId) => async (dispatch) => {
  try {
    dispatch(setLoading()); // 🔹 inicia loader
    const response = await axios.put(`/user/update/${userId}`, {
      userState: true,
      userAdmin: false,
      userSuperadmin: false,
    });
    if (response.status === 200) {
      // Aquí puedes despachar una acción de éxito si lo deseas
      dispatch({ type: 'BAN_OR_DELETE_USER_SUCCESS', payload: response.data });
    } else {
      // Aquí puedes despachar una acción de error si lo deseas
      dispatch({
        type: 'BAN_OR_DELETE_USER_ERROR',
        payload: 'Error al banear o eliminar al usuario',
      });
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
    dispatch({
      type: 'BAN_OR_DELETE_USER_ERROR',
      payload: 'Error al banear o eliminar al usuario',
    });
  } finally {
    dispatch(clearLoading()); // 🔹 corta loader
  }
};

// Acción para quitar acceso de administrador a un usuario
export const removeAdminAccess = (userId) => async (dispatch) => {
  try {
    dispatch(setLoading()); // 🔹 inicia loader
    const response = await axios.put(`/user/update/${userId}`, {
      userState: true,
      userAdmin: false,
      userSuperadmin: false,
    });
    if (response.status === 200) {
      // Aquí puedes despachar una acción de éxito si lo deseas
      dispatch({ type: 'GRANT_ADMIN_ACCESS_SUCCESS', payload: response.data });
    } else {
      // Aquí puedes despachar una acción de error si lo deseas
      dispatch({
        type: 'GRANT_ADMIN_ACCESS_ERROR',
        payload: 'Error al otorgar acceso de administrador',
      });
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
    dispatch({
      type: 'GRANT_ADMIN_ACCESS_ERROR',
      payload: 'Error al otorgar acceso de administrador',
    });
  } finally {
    dispatch(clearLoading()); // 🔹 corta loader
  }
};

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const clearLoading = () => ({
  type: CLEAR_LOADING,
});

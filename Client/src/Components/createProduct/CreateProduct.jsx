import style from "./CreateProduct.module.css"
import UploadWidget from "../UploadWidget/UploadWidget";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { getCateg, postProduct } from "../../redux/actions/action";
import { disableFunction, handleChange, handleSubmit } from "../CreateProduct/productCreateOrEdit";

//Notificaciones
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateProduct(){

    const dispatch = useDispatch();

    const notify = (type) => {
        if (type === 'error') {
            toast.error('Ocurrio un error al crear el producto', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'success') {
            toast.success('Producto creado correctamente', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(()=>{
        dispatch(getCateg())
    },[dispatch])
    
    const categ = useSelector(state => state.categ);
  
    const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL

    const [product, setProduct] = useState({
        name: "",
        description: "",
        image: "",
        price:"",
        category:"",
        stock: ""
    })
   
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        image: "",
        price:"",
        category:"",
        stock: "",
        other:""
    })

    const handleImageUpload = (url) => {
        setImageUrl(url);
        setProduct({
            ...product,
            image: url
        })
    }

    const handleFormSubmit = async (e) => {
        try {

            e.preventDefault();
            await handleSubmit(product, imageUrl, dispatch, postProduct);
            notify('success');
            
        } catch (error) {
            notify('error');
            console.log(error.message);
        }
    };

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    
        handleChange(product, setErrors); // Pasar updatedInfo en lugar de info
    };

    const capitalizeFirstLetter = (str) => {
        
        if (str.length === 0) {
            return str; 
        }

        const firstLetter = str.charAt(0).toUpperCase();
        const restOfString = str.slice(1).toLowerCase();
        return firstLetter + restOfString;
    };

    const isDisabled = disableFunction(errors);
 
    return (
        <div className={style.conteiner}>
            <div className={style.productCont}>
                <div className={style.imgCont}>
                    {
                        imageUrl !== ""
                        ? <img className={style.productImg} src={imageUrl} alt="productImg" /> 
                        : <div className={style.txtAndImgCont}>
                            <h2 className={style.imgTxt}>Subir Imagen</h2>
                            <UploadWidget className={style.uploadButton} onImageUpload={handleImageUpload}/>
                          </div>
                    }
                </div>
                <div className={style.infoProduct}>
                    <input name="name" onChange={handleInputChange} className={style.productName} placeholder="Nombre del Producto"></input>
                    <textarea onChange={handleInputChange} name="description" className={style.productDescription} placeholder="Descripción del producto"></textarea>
                    <div className={style.priceAndCatContainer}>
                        <div className={style.priceAndDollarContainer}>
                            <p className={style.dollarSign}>$</p> <input name="price" onChange={handleInputChange} className={style.productPrice} placeholder="100.99" type="number"></input>
                        </div>
                        <select name="category" onChange={handleInputChange} className={style.productCategories}>
                            <option className={style.casillero} value="Todos">Categoría del producto</option>
                            {categ.map((category) => (
                                <option className={style.catOpciones} key={category.id} value={category.id}>
                                    {capitalizeFirstLetter(category.name)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={style.stockContainer}>
                        <p className={style.dollarSign}>Stock:</p><input name="stock" onChange={handleInputChange} className={style.productStock} type="number" placeholder="1000"></input>
                    </div>
                    <div className={style.buyCont}>
                        <button className={style.btnBuy} onClick={handleFormSubmit} disabled={isDisabled} type="submit">Crear Producto</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
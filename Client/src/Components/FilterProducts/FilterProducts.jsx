import {
  filterByCateg,
  productOrdenPrecio,
  productsFiltrosPrecio,
  resetProducts,
} from '../../redux/actions/action';
import { useEffect, useState } from 'react';
import styles from './FilterProducts.module.css';
import { useDispatch } from 'react-redux';
import Loader from '../loader/loader';

const FilterProducts = ({ categ, products, applyFilters }) => {
  // Asegúrate de pasar "products" como prop.
  const dispatch = useDispatch();

  // Estados para opciones seleccionadas y mensaje de no coincidencias
  const [selectedCateg, setSelectedCateg] = useState('');
  const [selectedPrecio, setSelectedPrecio] = useState('');
  const [selectedOrden, setSelectedOrden] = useState('');
  const [noCoincidencias, setNoCoincidencias] = useState(false);

  //Agregué de linea 16 a 26
  const [filtersApplied, setFiltersApplied] = useState(false);

  //Estado apra el loader y mejorar la UX/UI
  const [loading, setLoading] = useState(true);

  // Aplicar filtros al cargar la página
  useEffect(() => {
    applyFilters({ selectedCateg, selectedPrecio, selectedOrden }); // Aplicar filtros al cargar la página
  }, []);

  // Verifica si no hay coincidencias y establece el estado noCoincidencias en true
  useEffect(() => {
    const noMatch = checkForNoMatch(products, selectedCateg, selectedPrecio, selectedOrden);
    setNoCoincidencias(noMatch && filtersApplied); // Verifica si no hay coincidencias y si se han aplicado filtros
  }, [selectedCateg, selectedPrecio, selectedOrden, filtersApplied]);

  // al cambiar products apagamos loader si ya cargó
  useEffect(() => {
    if (products && products.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [products]);

  // Nuevo efecto useEffect para configurar correctamente filtersApplied al cargar la página

  function applyFilters(filters) {
    const anyFilterApplied = Object.values(filters).some((value) => value !== '');
    setFiltersApplied(anyFilterApplied);
  }

  function handleFilterCateg(e) {
    const selectedValue = e.target.value;
    setSelectedCateg(selectedValue);
    dispatch(filterByCateg(selectedValue));
    setNoCoincidencias(false);
    applyFilters({ selectedCateg, selectedPrecio, selectedOrden });
  }

  const ordenPrecio = (event) => {
    const selectedValue = event.target.value;
    setSelectedOrden(selectedValue);
    dispatch(productOrdenPrecio(selectedValue));
    setNoCoincidencias(false);
    applyFilters({ selectedCateg, selectedPrecio, selectedOrden });
  };

  const filtrosPrecio = (event) => {
    const selectedValue = event.target.value;
    setSelectedPrecio(selectedValue);
    dispatch(productsFiltrosPrecio(selectedValue));
    setNoCoincidencias(false);
    applyFilters({ selectedCateg, selectedPrecio, selectedOrden });
  };

  const reset = () => {
    setSelectedCateg('');
    setSelectedPrecio('');
    setSelectedOrden('');
    dispatch(resetProducts());
    setNoCoincidencias(false);
    applyFilters({ selectedCateg: '', selectedPrecio: '', selectedOrden: '' });
  };

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string') {
      return str;
    }
    if (str.length === 0) {
      return str;
    }
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1).toLowerCase();
    return firstLetter + restOfString;
  };

  // Función para verificar si no hay coincidencias
  const checkForNoMatch = (filteredProducts, selectedCateg, selectedPrecio, selectedOrden) => {
    // Verifica si no hay productos filtrados.
    if (filteredProducts.length === 0) {
      // Aquí usamos "filteredProducts".
      return true;
    }

    // Realiza las comprobaciones según los filtros seleccionados.
    if (selectedCateg) {
      const productsByCategory = filteredProducts.filter(
        (product) => product.category === selectedCateg,
      );
      if (productsByCategory.length === 0) {
        return true;
      }
    }

    if (selectedPrecio) {
      let minPrice = 0;
      let maxPrice = Number.MAX_VALUE;

      switch (selectedPrecio) {
        case 'menor100':
          maxPrice = 100;
          break;
        case 'menor500':
          maxPrice = 500;
          break;
        case 'menor1000':
          maxPrice = 1000;
          break;
        case 'mayor1000':
          minPrice = 1000;
          break;
        default:
          break;
      }

      const productsByPrice = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice,
      );
      if (productsByPrice.length === 0) {
        return true;
      }
    }

    // No es necesario verificar el filtro de orden, ya que no afecta si hay coincidencias.

    return false;
  };

  // Verifica si no hay coincidencias y establece el estado noCoincidencias en true
  useEffect(() => {
    const noMatch = checkForNoMatch(products, selectedCateg, selectedPrecio, selectedOrden);
    if (noMatch) {
      setNoCoincidencias(true);
    } else {
      setNoCoincidencias(false);
    }
  }, [products, selectedCateg, selectedPrecio, selectedOrden]);

  if (loading) {
    return <Loader />; // <== aquí se muestra loader
  }

  return (
    <div>
      <div className={styles.filterBarContainer}>
        <select className={styles.filters} value={selectedCateg} onChange={handleFilterCateg}>
          <option className={styles.italic} value=''>
            Filtrar por categoría
          </option>
          <option className={styles.casillero} value='Todos'>
            Todas las categorías
          </option>
          {categ.map((category) => (
            <option className={styles.opciones} key={category.id} value={category.name}>
              {capitalizeFirstLetter(category.name)}
            </option>
          ))}
        </select>

        <select className={styles.filters} value={selectedPrecio} onChange={filtrosPrecio}>
          <option className={styles.italic} value=''>
            Filtrar por precio
          </option>
          <option value='menor100'>Menor a $100</option>
          <option value='menor500'>Menor a $500</option>
          <option value='menor1000'>Menor a $1000</option>
          <option value='mayor1000'>Mayor a $1000</option>
        </select>

        <select className={styles.filters} value={selectedOrden} onChange={ordenPrecio}>
          <option className={styles.italic} value=''>
            Ordenar
          </option>
          <option value='precioMenor'>Menor precio</option>
          <option value='precioMayor'>Mayor precio</option>
        </select>

        <button className={styles.reset} onClick={reset}>
          RESET FILTERS
        </button>

        {/* Mostrar el mensaje si no hay coincidencias */}
      </div>
      <div className={styles.conteinerError}>
        {noCoincidencias && (
          <p className={styles.noCoincidenciasMsg}>
            Lo sentimos. No se encontraron productos con esas características.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterProducts;

// FilterProducts.jsx (versión refactorizada)
import {
  filterByCateg,
  productOrdenPrecio,
  productsFiltrosPrecio,
  resetProducts,
} from '../../redux/actions/action';
import React, { useEffect, useState } from 'react';
import styles from './FilterProducts.module.css';
import { useDispatch, useSelector } from 'react-redux';

const FilterProducts = ({ categ = [], products = [] }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  // Estados de filtros
  const [selectedCateg, setSelectedCateg] = useState('');
  const [selectedPrecio, setSelectedPrecio] = useState('');
  const [selectedOrden, setSelectedOrden] = useState('');

  // Estado UX
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [noCoincidencias, setNoCoincidencias] = useState(false);

  // Cuando cambian los productos (desde Redux) o los filtros, calculamos si hay "no coincidencias"
  useEffect(() => {
    // Si no hay filtros aplicados, no mostramos mensaje de "no coincidencias"
    if (!filtersApplied) {
      setNoCoincidencias(false);
      return;
    }
    // Si hay filtros aplicados y el array de productos resultante está vacío -> no coincidencias
    setNoCoincidencias(Array.isArray(products) && products.length === 0);
  }, [products, filtersApplied]);

  // Aplicar filtros: siempre que cambie cualquiera de los selects ejecutamos esta lógica.
  useEffect(() => {
    // Determinar si hay algún filtro activo (categ diferente de '' y diferente de 'Todos', o precio u orden)
    const anyFilter =
      (selectedCateg && selectedCateg !== 'Todos') ||
      (selectedPrecio && selectedPrecio !== '') ||
      (selectedOrden && selectedOrden !== '');

    setFiltersApplied(Boolean(anyFilter));

    // Si no hay filtros, restauramos todo y salimos
    if (!anyFilter) {
      dispatch(resetProducts());
      return;
    }

    // Si hay filtros: reiniciamos la lista y aplicamos en orden categoría -> precio -> orden
    // Esto asume que tus actions trabajan sobre `state.products` (resetProducts deja la lista base)
    dispatch(resetProducts());

    if (selectedCateg && selectedCateg !== 'Todos') {
      dispatch(filterByCateg(selectedCateg));
    }

    if (selectedPrecio) {
      dispatch(productsFiltrosPrecio(selectedPrecio));
    }

    if (selectedOrden) {
      dispatch(productOrdenPrecio(selectedOrden));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCateg, selectedPrecio, selectedOrden, dispatch]);

  // Handlers
  function handleFilterCateg(e) {
    const value = e.target.value;
    // Tratamos 'Todos' como equivalente a vaciar el filtro
    setSelectedCateg(value === 'Todos' ? '' : value);
  }

  function ordenPrecio(e) {
    setSelectedOrden(e.target.value);
  }

  function filtrosPrecio(e) {
    setSelectedPrecio(e.target.value);
  }

  function reset() {
    setSelectedCateg('');
    setSelectedPrecio('');
    setSelectedOrden('');
    setNoCoincidencias(false);
    setFiltersApplied(false);
    dispatch(resetProducts());
  }

  if (loading) return <Loader />; // 🔹 muestra loader global

  return (
    <div>
      <div className={styles.filterBarContainer}>
        <select className={styles.filters} value={selectedCateg || ''} onChange={handleFilterCateg}>
          <option className={styles.italic} value=''>
            Filtrar por categoría
          </option>
          {/* Si querés una opción "Todas" explícita, la dejamos pero la tratamos como '' */}
          <option className={styles.casillero} value='Todos'>
            Todas las categorías
          </option>
          {categ.map((category) => (
            <option className={styles.opciones} key={category.id} value={category.name}>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
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

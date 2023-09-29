import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { Nav } from "../Nav/Nav";
import { Cards } from "../Cards/Cards";
import datosONG from "../../../../Api/ong/ong";

export const Home = () => {

 // -------PAGINADO

 const [page, setPage] = useState(1);

 // Número de tarjetas por página
 const cardsPerPage = 8;
 const totalItems = datosONG.length; 

 // Función para obtener las tarjetas en la página actual

 const getCurrentPageCampaigns = () => {
   const startIndex = (page - 1) * cardsPerPage;
   const endIndex = startIndex + cardsPerPage;
   const displayedData = datosONG.slice(startIndex, endIndex);

   return displayedData;

 };
 
 //-----





 return (
   <div>
       <Nav/>

       <Cards data={getCurrentPageCampaigns()}/>
       
       <Pagination
           page={page}
           setPage={setPage}
           itemsPerPage={cardsPerPage}
           totalItems={totalItems}
        /> 

   </div>
 )
}

// {/* <Cards campaigns={getCurrentPageCampaigns()} /> */}


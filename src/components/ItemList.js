import React from "react";
import Producto from "./Item.js";

const productsData = [
    {id: "1", nombre:"Amarila", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/amarilla.jpeg", stock :20},
    {id: "2", nombre:"Colores", tipo:"producto", categoria:"unicos", precio: 650, img:"./media/portavelaColores.jpeg", stock :20},
    {id: "3", nombre:"Olla de Barro Lisa", tipo:"producto", categoria:"vajillas", precio: 2500, img:"./media/olla de barro lisa.jpg", stock :20},
    {id: "4", nombre:"Bella", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/bella.jpeg", stock :20},
    {id: "5", nombre:"Cuadrado", tipo:"producto", categoria:"unicos", precio: 650, img:"./media/portavelaCuadrado.jpeg", stock :20},
    {id: "6", nombre:"Bandejas Floreadas", tipo:"producto", categoria:"vajillas", precio: 2300, img:"./media/bandejas floreadas.jpg", stock :20},
    {id: "7", nombre:"Celeste", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/Celeste.jpeg", stock :20},
    {id: "8", nombre:"Coral Chico", tipo:"producto", categoria:"unicos", precio: 600, img:"./media/portavelasCoralChico.jpeg", stock :20},
    {id: "9", nombre:"Platos Floreados", tipo:"producto", categoria:"vajillas", precio: 700, img:"./media/platos.jpg", stock :20},
    {id: "10", nombre:"Lila", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/lila.jpeg", stock :20},
    {id: "11", nombre:"Caramelera Amarilla", tipo:"producto", categoria:"unicos", precio: 900, img:"./media/calamereraAmarilla.jpeg", stock :20},
    {id: "12", nombre:"Bandejas Hojas ", tipo:"producto", categoria:"vajillas", precio: 500, img:"./media/bandejahojas.jpg", stock :20},
    {id: "13", nombre:"Verde Manzana", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/verdeManzana.jpeg", stock :20},
    {id: "14", nombre:"Caramelera Colores", tipo:"producto", categoria:"unicos", precio: 900, img:"./media/calamereraColores.jpeg", stock :20},
    {id: "15", nombre:"El Pajarito", tipo:"producto", categoria:"vajillas", precio: 500, img:"./media/bandejapajarito.jpg", stock :20},
    {id: "16", nombre:"Turquesa", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/turquesa.jpeg", stock :20},
    {id: "17", nombre:"Triangulos", tipo:"producto", categoria:"unicos", precio: 1000, img:"./media/tarroTriangulos.jpeg", stock :20},
    {id: "18", nombre:"Juego Amarillo", tipo:"producto", categoria:"vajillas", precio: 2900, img:"./media/juegoteamarillo.jpg", stock :20},
    {id: "19", nombre:"Orange", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/orange.jpeg", stock :20},
    {id: "20", nombre:"Cuadrado", tipo:"producto", categoria:"unicos", precio: 650, img:"./media/portavelaCuadrado.jpeg", stock :20},
    {id: "21", nombre:"Set Rustico de Salsera y Quesera", tipo:"producto", categoria:"vajillas", precio: 2500, img:"./media/set rustico qys.jpg", stock :20},
    {id: "22", nombre:"Liz", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/liz.jpeg", stock :20},
    {id: "23", nombre:"Flores", tipo:"producto", categoria:"unicos", precio: 1000, img:"./media/tarroFlores.jpeg", stock :20},
    {id: "24", nombre:"Los Seis", tipo:"producto", categoria:"vajillas", precio: 2550, img:"./media/juegoseisamararillo.jpg", stock :20},
    {id: "25", nombre:"Corazón", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/corazon.jpeg", stock :20},
    {id: "26", nombre:"Medianos", tipo:"producto", categoria:"unicos", precio: 900, img:"./media/tarrosMedianos.jpeg", stock :20},
    {id: "27", nombre:"Los Cuatro", tipo:"producto", categoria:"vajillas", precio: 1500, img:"./media/losCuatro.jpg", stock :20},
    {id: "28", nombre:"Pastel", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/pastel.jpeg", stock :20},
    {id: "29", nombre:"Set Tazas y Lechera", tipo:"producto", categoria:"vajillas", precio: 1700, img:"./media/juegotazasylechera.jpeg", stock :20},
    {id: "30", nombre:"Limón", tipo:"producto", categoria:"mandalas", precio: 600, img:"./media/limon.jpeg", stock :20},
    {id: "31", nombre:"Olla Esmaltada", tipo:"producto", categoria:"ofertas", precio: 1780, img:"./media/ollaEsmaltada.jpg", stock :20},
    {id: "32", nombre:"Portavelas Verde Chico", tipo:"producto", categoria:"ofertas", precio: 450, img:"./media/portavelasVerdeChico.jpeg", stock :20},
    {id: "33", nombre:"Porta-Sahumerio", tipo:"producto", categoria:"ofertas", precio: 300, img:"./media/portasaumerios.jpeg", stock :20},
    {id: "34", nombre:"Juego Azul", tipo:"producto", categoria:"ofertas", precio: 2210, img:"./media/juegoAzul.jpg", stock :20},
    {id: "35", nombre:"Bucles", tipo:"producto", categoria:"ofertas", precio: 510, img:"./media/bucle.jpeg", stock :20},
    {id: "36", nombre:"Azucarera con Cuchara", tipo:"producto", categoria:"ofertas", precio: 850, img:"./media/azucareraconcuchara.jpeg", stock :20},
    {id: "37", nombre:"Juego Arena", tipo:"producto", categoria:"ofertas", precio: 1205, img:"./media/juegoArena.jpg", stock :20},
    {id: "38", nombre:"Flor", tipo:"producto", categoria:"ofertas", precio: 510, img:"./media/flor.jpeg", stock :20}
];

export const ItemList = () => {

    return (

        
        productsData.map((item) => (

            <Producto 
            
                img={item.img}

                nombre={item.nombre}

                precio={item.precio}

                stock={item.stock}

                id={item.id}

            />
        ))

    );

};
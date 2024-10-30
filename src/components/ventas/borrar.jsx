'use client'
import Link from "next/link";
import axios from "axios";
export default function BorrarVentas({id}){
    async function borrar() {
        const url="http://localhost:3000/ventas/cambiarEstatus/"+id;
        const respuesta=await axios.put(url);
        window.location.replace("/ventas/mostrar");
    }    
    return(
        <Link href="" onClick={borrar}>Cancelar venta</Link>
    );
}
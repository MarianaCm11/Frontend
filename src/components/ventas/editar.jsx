'use client'
import Link from "next/link";
import axios from "axios";
export default function EditarProductos({id}){    
    return(
        <Link href={`/ventas/editar/${id}`}>editar</Link>
    );
}
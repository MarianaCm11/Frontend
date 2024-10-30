'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
export default function EditarProducto({id}){
     return(
        <Link href={`/productos/editar/${id}`}>editar</Link>
    );
}
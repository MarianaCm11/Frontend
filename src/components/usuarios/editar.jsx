'use client'
import Link from "next/link";
import axios from "axios";
export default function EditarUsuario({id}){
    return(
        <Link href={`/usuarios/editar/${id}`}>editar</Link>
    );
}
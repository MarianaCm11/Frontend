'use client'
import Link from "next/link";

export default function EditarVenta({ idVenta, idProd }) {
    return (
        <Link href={`/ventas/editar/${idVenta}?idprod=${idProd}`}>Editar</Link>
    );
}

//import Boton from "@/components/menu";
import BorrarProducto from "@/components/productos/borrar";
import EditarProducto from "@/components/productos/editar";
import axios from "axios";
import "@/components/boton.css";
import Link from 'next/link';


async function getProductos() {
    const url = "http://localhost:3000/productos";
    const productos = await axios.get(url);
    // console.log(usuarios.data);
    return productos.data;
}
//noticas();

export default async function Prods() {
    const productos = await getProductos();
    //console.log(universidades);

    return (
        <>
            <h1>Producto</h1>
            <p>Estas en productos</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Borrar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <BorrarProducto id={producto.id} />
                                </td>
                                <td>
                                    <EditarProducto id={producto.id} />
                                </td>
                                <td>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="boton-centro">
                <Link href="/usuarios/nuevo" legacyBehavior>
                    <a className="btn btn-primary">Nuevo Producto</a>
                </Link>
            </div>
        </>
    );
}

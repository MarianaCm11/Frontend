import Link from 'next/link';
import axios from "axios";
import "@/components/boton.css";
import BorrarVenta from "@/components/ventas/borrar";
import EditarVenta from "@/components/ventas/editar";

async function obtenerVentas() {
    const url = "http://localhost:3000/ventas";
    const response = await axios.get(url);
    return response.data;
};

// Función para obtener producto por ID desde el backend
async function obtenerProductoPorId(id) {
    const url = `http://localhost:3000/productos/buscarPorIdP/${id}`;
    const response = await axios.get(url);
    return response.data.nombre; // Suponiendo que el nombre está en response.data.nombre
};

// Función para obtener usuario por ID desde el backend
async function obtenerUsuarioPorId(id) {
    const url = `http://localhost:3000/usus/buscarPorId/${id}`;
    const response = await axios.get(url);
    return response.data.nombre; // Suponiendo que el nombre está en response.data.nombre
};

export default async function Ventas() {
    const ventas = await obtenerVentas();
    console.log(ventas);
    
    // Mapea cada venta para incluir nombre del usuario y producto
    const ventasConNombres = await Promise.all(
        ventas.map(async (venta) => ({
            ...venta,
            nombreUsuario: await obtenerUsuarioPorId(venta.idusu),
            nombreProducto: await obtenerProductoPorId(venta.idprod),
        }))
    );

    return (
        <div>
            <h1>Ventas</h1>
            <p>Estas en ventas</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Editar</th>
                        <th>Cancelar</th>
                    </tr>
                </thead>
                <tbody>
                    {ventasConNombres.map((venta, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{venta.nombreUsuario}</td>
                            <td>{venta.nombreProducto}</td>
                            <td>{venta.cantidad}</td>
                            <td>{venta.estado}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.hora}</td>
                            <td>
                                <EditarVenta idVenta={venta.id} idProd={venta.idprod} />
                            </td>
                            <td>
                                <BorrarVenta id={venta.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="boton-centro">
                <Link href="/ventas/nuevo" legacyBehavior>
                    <a className="btn btn-primary">Nueva Venta</a>
                </Link>
            </div>
        </div>
    );
}
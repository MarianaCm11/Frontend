import BorrarUsuario from "@/components/usuarios/borrar";
import EditarUsuario from "@/components/usuarios/editar";
import Link from 'next/link';
import axios from "axios";
import "@/components/boton.css";


async function getUsuarios() {
    const url = "http://localhost:3000/usus";
    const usuarios = await axios.get(url);
    // console.log(usuarios.data);
    return usuarios.data;
}
//noticas();

export default async function Usus() {
    const usuarios = await getUsuarios();
    //console.log(universidades);

    return (
        <>
            <h1>Usuario</h1>
            <p>Estas en usuario</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Borrar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.usuario}</td>
                                <td>
                                    <BorrarUsuario id={usuario.id} />
                                </td>
                                <td>
                                    <EditarUsuario id={usuario.id} />
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
                    <a className="btn btn-primary">Nuevo usuario</a>
                </Link>
            </div>
        </>
    );
}

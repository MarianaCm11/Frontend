import axios from "axios";

async function getUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    //console.log(usuarios.data);
    return usuarios.data;
}
getUsuarios();

export default async function Usuarios() {
    const usuarios = await getUsuarios();
    //console.log(universidades);

    return (
        <>
            <h1>Usuarios</h1>
            <p>Estas en Usuarios</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => (
                            <tr key="{i}">
                                <td>{usuario.id}</td>
                                <td><a href={`/usuarios/${usuario.id}`}>{usuario.name}</a></td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

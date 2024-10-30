'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

async function editarVentas(e, { params, cantidad, nombre, idprod }) {
    e.preventDefault();
    const url = `http://localhost:3000/ventas/editarVenta/${params.id}`;
    const datos = { cantidad, nombre, idprod }; // Envía idprod junto con otros datos
    const respuesta = await axios.put(url, datos);
    window.location.replace("/ventas/mostrar");
}

export default function Nuevo({ params }) {
    const searchParams = useSearchParams();
    const idprod = searchParams.get('idprod'); // Obtén idprod desde los parámetros de búsqueda

    const [ventas, setVentas] = useState({
        cantidad: '',
        nombre: ''
    });

    useEffect(() => {
        async function fetchVentData() {
            if (idprod) {
                const source = await fetch(`http://localhost:3000/productos/buscarPorIdP/${idprod}`);
                if (source.ok) {
                    const data = await source.json();
                    setVentas(data);
                }
            }
        }
        fetchVentData();
    }, [idprod]);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setVentas((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={(e) => editarVentas(e, { params, ...ventas, idprod })}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar la venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="cantidad" placeholder="Cantidad" autoFocus className="form-control mb-3" type="text" value={ventas.cantidad} onChange={handleChange} />
                        <input id="nombre" placeholder="Nombre" className="form-control mb-3" type="text" value={ventas.nombre} onChange={handleChange} />
                        <input id="idprod" placeholder="Id del producto" className="form-control mb-3" type="hidden" value={idprod} readOnly /> {/* Campo de solo lectura */}
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger col-12 mt-3 mb-3" type="submit">Guardar cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

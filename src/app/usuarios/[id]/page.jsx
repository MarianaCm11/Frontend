"use client";

import axios from 'axios';
import { useState, useEffect } from 'react';

// Función para obtener el usuario específico por su ID
async function getUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

export default function Usuario({ params }) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getUsuario(params.id);
            setUsuario(data);
        }

        fetchData();
    }, [params.id]);

    if (!usuario) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-container">
                    <div className="modal-header">
                        <h1 className="modal-title">Información del Usuario</h1>
                        <a href="/usuarios" className="close-button">&times;</a>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-section-title">Detalles</h5>
                        <p>
                            <strong>ID:</strong> {usuario.id}<br />
                            <strong>Nombre:</strong> {usuario.name}<br />
                            <strong>Username:</strong> {usuario.username}<br />
                            <strong>Email:</strong> {usuario.email}<br />
                            <strong>Teléfono:</strong> {usuario.phone}<br />
                            <strong>Sitio web:</strong> {usuario.website}
                        </p>
                        <hr />
                        <h5 className="modal-section-title">Dirección</h5>
                        <p>
                            {usuario.address.street}, {usuario.address.suite}, {usuario.address.city}, {usuario.address.zipcode}
                        </p>
                        <hr />
                        <h5 className="modal-section-title">Compañía</h5>
                        <p>
                            <strong>Nombre:</strong> {usuario.company.name}<br />
                            <strong>Frase:</strong> {usuario.company.catchPhrase}<br />
                            <strong>BS:</strong> {usuario.company.bs}
                        </p>
                    </div>
                    <div className="modal-footer">
                        <a href="/usuarios" className="close-modal-button">Cerrar</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 999;
                }

                .modal-container {
                    background: #fff;
                    border-radius: 10px;
                    padding: 20px;
                    width: 80%;
                    max-width: 600px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    border: 5px solid transparent;
                    background-clip: padding-box;
                    position: relative;
                }

                .modal-container::before {
                    content: '';
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    background: linear-gradient(45deg, #15558a, #31158a);
                    z-index: -1;
                    border-radius: 10px;
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                }

                .modal-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin: 0;
                }

                .close-button {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    text-decoration: none;
                    color: #333;
                }

                .modal-body {
                    margin-top: 20px;
                }

                .modal-section-title {
                    font-size: 18px;
                    font-weight: bold;
                    color: #007bff;
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 20px;
                    border-top: 1px solid #ddd;
                    padding-top: 10px;
                }

                .close-modal-button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .close-modal-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </>
    );
}

import { types } from "../types/types";
import axios from 'axios';
import Swal from "sweetalert2";

const servidor = process.env.REACT_APP_RUTA_API;

export const cargarClientes = () => {

    return async (dispatch) => {

        const { data, status } = await axios.get(`${servidor}/obtener_clientes.php`);

        if (status === 200) {
            dispatch({
                type: types.cargarClientes,
                payload: data
            });
        };
    };
};

export const actualizarCliente = (id, clienteActualizado) => {

    return async (dispatch) => {

        const { status } = await axios.put(`${servidor}/actualizar_cliente.php?id=${id}`, clienteActualizado);

        if (status === 200) {
            dispatch({
                type: types.editarCliente,
                payload: {
                    id,
                    cliente: clienteActualizado,
                }
            });
        };
    };
};

export const borrarCliente = (id) => {

    return async (dispatch) => {

        const resultado = await Swal.fire({
            titleText: 'Confirmar eliminacion',
            text: `¿Quieres eliminar el cliente?`,
            icon: 'warning',
            iconColor: "#dc3545",
            showCancelButton: true,
            confirmButtonColor: '#007bff',
            cancelButtonColor: '#dc3545',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí, eliminar'
        });

        if (!resultado.value) {
            return;
        };

        const { status } = await axios.delete(`${servidor}/eliminar_cliente.php?id=${id}`);

        if (status === 200) {
            dispatch({
                type: types.borrarCliente,
                payload: id,
            });
        };
    };
};
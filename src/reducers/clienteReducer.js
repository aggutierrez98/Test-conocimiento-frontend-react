import { types } from "../types/types";

const initialState = {
    clientes: [],
};

export const clienteReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.cargarClientes:
            return {
                ...state,
                clientes: action.payload
            };

        case types.editarCliente:
            return {
                ...state,
                clientes: state.clientes.map(
                    cliente => cliente.id === action.payload.id
                        ? action.payload.cliente
                        : cliente
                )
            };

        case types.borrarCliente:
            return {
                ...state,
                clientes: state.clientes.filter(cliente => cliente.id !== action.payload)
            };

        default:
            return state;
    };
};
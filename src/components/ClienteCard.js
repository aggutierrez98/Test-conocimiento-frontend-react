import { useDispatch } from 'react-redux';
import { borrarCliente } from '../actions/clientes';

export const ClienteCard = ({ id, dni, nombre, apellido, sexo, telefono, history }) => {

    const dispatch = useDispatch();

    const eliminarCliente = async () => {
        dispatch(borrarCliente(id));
    };

    const editarCliente = async () => {
        history.push({ pathname: `/editar/${id}` }, { id, dni, nombre, apellido, sexo, telefono });
    };

    return (
        <tr>
            <td
                style={{
                    borderTop: '0'
                }}>
                {dni}
            </td>
            <td
                style={{
                    borderTop: '0'
                }}>
                {nombre}
            </td>
            <td
                style={{
                    borderTop: '0'
                }}>
                {apellido}
            </td>
            <td
                style={{
                    borderTop: '0'
                }}>
                {sexo}
            </td>
            <td
                style={{
                    borderTop: '0'
                }}>
                {telefono}
            </td>
            <td
                style={{
                    width: '13rem',
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: '0'
                }}>
                <button onClick={editarCliente} className="btn btn-primary">Editar</button>
                <button onClick={eliminarCliente} className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    );
};

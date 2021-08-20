import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cargarClientes } from '../actions/clientes';
import { FiltrarClientes } from './FiltrarClientes';
import { ListadoClientes } from './ListadoClientes';

export const ClientesPage = ({ history }) => {

    const { clientes } = useSelector(state => state.cliente);
    const dispatch = useDispatch();

    const [buscarPor, setBuscarPor] = useState("");
    const [filtrados, setFiltrados] = useState(clientes);

    useEffect(() => {
        const primeramenteFiltrados = clientes.filter((cliente) =>
            cliente.dni.includes(buscarPor)
        );
        setFiltrados(primeramenteFiltrados)
    }, [clientes, buscarPor]);

    const buscadorChange = ({ target }) => {
        setBuscarPor(target.value);
    };

    useEffect(() => {
        dispatch(cargarClientes());
    }, [dispatch]);

    return (
        <>
            <h1 className="title">Listado de clientes</h1>

            <FiltrarClientes buscarPor={buscarPor} busquedaChange={buscadorChange} de={"numero de DNI"} />

            {(filtrados.length > 0)
                ? <ListadoClientes clientes={filtrados} history={history} />
                : <div className="alert alert-danger">No se encuentra cliente en la base de datos</div>
            }
        </>
    );
};

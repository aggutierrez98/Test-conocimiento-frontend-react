import { ClienteCard } from './ClienteCard';

export const ListadoClientes = ({ clientes, history }) => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Sexo</th>
                        <th>Nº Telefono</th>
                        <th style={{
                            width: '0',
                        }}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(cliente => {
                            return <ClienteCard key={cliente.id} {...cliente} history={history} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};


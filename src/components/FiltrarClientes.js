export const FiltrarClientes = ({ buscarPor, busquedaChange, de }) => {
    return (
        <input
            type="search"
            className="form-control mt-4 mb-4"
            placeholder={`Escriba el ${de} que desea buscar...`}
            value={buscarPor}
            onChange={busquedaChange}
        />
    );
};

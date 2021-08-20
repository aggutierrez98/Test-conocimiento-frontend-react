import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actualizarCliente } from '../actions/clientes';
import { useForm } from '../hooks/useForm';

export const EditarCliente = ({ history, location }) => {

    const cliente = location.state;

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(cliente);

    const activeId = useRef(cliente.id);

    useEffect(() => {
        if (cliente.id !== activeId.current) {
            reset(cliente);
            activeId.current = cliente.id;
        }
    }, [cliente, reset]);

    const manejarEnvioDeFormulario = async (e) => {
        e.preventDefault();
        dispatch(actualizarCliente(cliente.id, formValues));
        history.push({ pathname: "/" });
    };

    return (
        <div className="form-group">
            <h1>Editar cliente</h1>
            <form className="" onSubmit={manejarEnvioDeFormulario}>
                <div className="mt-4 form-group row formulario">
                    <label className="col-sm-2 col-form-label" htmlFor="dni">DNI:</label>
                    <div className="col-sm-10">
                        <input className="form-control" autoFocus required placeholder="DNI" type="text" id="dni" onChange={handleInputChange} value={formValues.dni} name="dni" />
                    </div>
                </div>
                <div className="mt-4 form-group row formulario">
                    <label className="col-sm-2 col-form-label" htmlFor="nombre">Nombre:</label>
                    <div className="col-sm-10">
                        <input className="form-control" autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={handleInputChange} value={formValues.nombre} name="nombre" />
                    </div>
                </div>
                <div className="mt-4 form-group row formulario">
                    <label className="col-sm-2 col-form-label" htmlFor="apellido">Apellido:</label>
                    <div className="col-sm-10">
                        <input className="form-control" autoFocus required placeholder="Apellido" type="text" id="apellido" onChange={handleInputChange} value={formValues.apellido} name="apellido" />
                    </div>
                </div>
                <div className="mt-4 form-group row" onChange={handleInputChange}>
                    <label className="col-sm-2 col-form-label formulario" htmlFor="sexo">Sexo:</label>
                    <div className="col-sm-10">
                        {cliente.sexo === "M"
                            ? <input type="radio" id="html" name="sexo" value="M" defaultChecked />
                            : <input type="radio" id="html" name="sexo" value="M" />
                        }
                        <label className="form-check-label mt-2" htmlFor="m">Masculino</label>
                    </div>
                    <label className="col-sm-2 col-form-label" htmlFor="sexo"></label>
                    <div className="col-sm-10">
                        {cliente.sexo === "F"
                            ? <input type="radio" id="css" name="sexo" value="F" defaultChecked />
                            : <input type="radio" id="css" name="sexo" value="F" />
                        }
                        <label className="form-check-label mt-2" htmlFor="f">Femenino</label>
                    </div>
                </div>
                <div className="mt-4 form-group row formulario">
                    <label className="col-sm-2 col-form-label" htmlFor="telefono">Telefono:</label>
                    <div className="col-sm-10">
                        <input className="form-control" required placeholder="Telefono" type="tel" id="telefono" onChange={handleInputChange} value={formValues.telefono} name="telefono" />
                    </div>
                </div>
                <div className="mt-5">
                    <button className="btn btn-primary">Guardar</button>
                    <Link to="/" className="btn btn-secondary ml-3">Volver</Link>
                </div>
            </form>
        </div>
    );
};

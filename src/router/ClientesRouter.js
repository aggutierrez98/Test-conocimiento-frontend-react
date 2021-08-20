import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";
import { EditarCliente } from '../components/EditarCliente';
import { ClientesPage } from '../components/ClientesPage';
import { Navbar } from "../components/Navbar";

export const ClientesRouter = () => {

    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/" component={ClientesPage} exact />
                    <Route path="/editar/:id" component={EditarCliente} exact />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
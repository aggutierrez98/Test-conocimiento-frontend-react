import { store } from './store/store';
import { Provider } from 'react-redux';
import { ClientesRouter } from './router/ClientesRouter';

export const ClientesApp = () => {
    return (
        <Provider store={store}>
            <ClientesRouter />
        </Provider>
    )
};


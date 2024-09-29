import MainPage from './MainPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './auth/Login'
import { Provider } from 'react-redux';
import appStore from '../store/store';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <MainPage />
    }
]);

const Body = () => {
    return (
        <Provider store={appStore}>
            <RouterProvider router={appRouter} />
        </Provider>
    )
}

export default Body
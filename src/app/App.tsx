import { FC } from 'react'
import { Provider } from 'react-redux';
import { StyledEngineProvider, ThemeProvider, styled } from '@mui/material/styles';
// import { routes } from "./navigations"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Login from 'views/pages/Login/Login';



import store from './store';
import GlobalCss from 'views/includes/GlobalCss';
import MainLayout from './layoutApp/MainLayout';
import { routes } from './routes';
import authRoutes from './routes/authRoutes';
import AuthContext from 'views/includes/AuthContext';
import Register from 'views/pages/Register/Register';
// import MainLayout from './layout/mainLayout';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <GlobalCss />
        </StyledEngineProvider>

        <BrowserRouter basename='/'>

          <AuthContext>
            <Routes>
              <Route path='/register' element={<Register />}>
              </Route>

              <Route path="/" element={<MainLayout />}>
                {routes}
              </Route>

              {
              authRoutes.map((route, i) => {
                const { element: AuthComponent, path = '/' } = route;
                return <Route key={i} path={path} element={AuthComponent ? <Login /> : null} />
              })
              }

            </Routes>
          </AuthContext>

        </BrowserRouter>
      </ThemeProvider>
    </Provider>


  )
}

export default App;
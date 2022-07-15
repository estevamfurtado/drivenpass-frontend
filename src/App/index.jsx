import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DataProvider } from './../hooks/DataContext';
import { MouseProvider } from '../hooks/MouseContext';
import { theme } from './../styles/';

import SitePage from '../components/Pages/SitePage';
import EnterPage from '../components/Pages/EnterPage';
import SignInPage from '../components/Pages/SignInPage';
import SignUpPage from '../components/Pages/SignUpPage';
import MainPage from '../components/Pages/MainPage';
import HomePage from '../components/Pages/HomePage';
import TypePage from '../components/Pages/TypePage';
import PassPage from '../components/Pages/PassPage';
import EditPassPage from '../components/Pages/EditPassPage';
import { APIProvider } from '../hooks/APIContext';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <MouseProvider>
                <DataProvider>
                    <APIProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route element={<SitePage />}>
                                    <Route path='/' element={<EnterPage />}>
                                        <Route index element={<SignInPage />} />
                                        <Route path='/sign-up' element={<SignUpPage />} />
                                    </Route>
                                    <Route element={<MainPage />}>
                                        <Route path='/home' element={<HomePage />} />
                                        <Route path='/:type'>
                                            <Route index element={<TypePage />} />
                                            <Route path='/:type/pass/:passId' element={<PassPage />} />
                                            <Route path='/:type/new' element={<EditPassPage />} />
                                        </Route>
                                    </Route>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </APIProvider>
                </DataProvider>
            </MouseProvider>
        </ThemeProvider>
    );
}

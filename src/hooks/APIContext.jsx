import axios from 'axios';
import { useState, useEffect, createContext, useContext } from 'react';
import DataContext from './DataContext';
import { useLocalStorage } from './useLocalStorage';

const Axios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000',
});

export const APIContext = createContext();

export function APIProvider({ children }) {
    const { token, setToken } = useContext(DataContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token || ''}`,
        },
    };

    const auth = {
        signIn: async (data) => await postRequest('/sign-in', data),
        signUp: async (data) => await postRequest('/sign-up', data),
    };
    const passes = {
        getAll: async () => await getRequest('/passes'),
        getByType: async (type) => await getRequest(`/passes/types/${type}`),
        create: async (data) => await postRequest('/passes', data),
        getById: async (id) => await getRequest(`/passes/${id}`),
        updateById: async (data) => await putRequest(`/passes/${data.id}`, data),
        deleteById: async (id) => await deleteRequest(`/passes/${id}`),
    };

    return <APIContext.Provider value={{ API: { auth, passes } }}>{children}</APIContext.Provider>;

    function checkToken(error) {
        console.log('aqui!');
        if (error.response.status === 401) {
            setToken(null);
        }
    }

    async function getRequest(route) {
        try {
            const result = await Axios.get(route, config);
            return result.data;
        } catch (error) {
            checkToken(error);
            return null;
        }
    }
    async function deleteRequest(route) {
        try {
            const result = await Axios.delete(route, config);
            return result.data;
        } catch (error) {
            checkToken(error);
            return null;
        }
    }
    async function putRequest(route, data) {
        try {
            const result = await Axios.delete(route, data, config);
            return result.data;
        } catch (error) {
            checkToken(error);
            return null;
        }
    }
    async function postRequest(route, data) {
        try {
            const result = await Axios.post(route, data, config);
            return result.data;
        } catch (error) {
            checkToken(error);
            return null;
        }
    }
}

export default APIContext;

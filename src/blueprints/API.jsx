import axios from 'axios';
import { useContext, useState } from 'react';
import DataContext from '../hooks/DataContext';

const Axios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000',
});

export function API(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const auth = {
        signIn: async (email, password) => Axios.post('/sign-in', { email, password }),
        signUp: async (name, email, password) => Axios.post('/sign-up', { name, email, password }),
    };
    const passes = {
        getAll: async () => await Axios.get('/passes', config),
        getByType: async (type) => await Axios.get(`/passes/types/${type}`, config),
        create: async (data) => await Axios.post('/passes', data, config),
        getById: async (id) => await Axios.get(`/passes/${id}`, config),
        updateById: async (data) => await Axios.put(`/passes/${data.id}`, data, config),
        deleteById: async (id) => await Axios.delete(`/passes/${id}`, config),
    };

    return {
        auth,
        passes,
    };
}

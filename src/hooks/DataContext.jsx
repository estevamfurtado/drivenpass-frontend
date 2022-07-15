import { useState, useEffect, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [token, setToken] = useLocalStorage('drivenpass-token', null);
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return (
        <DataContext.Provider
            value={{
                token,
                setToken,
                width,
                setWidth,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;

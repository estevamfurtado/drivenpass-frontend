export function getTypeColumns(type) {
    switch (type) {
        case 'card':
            return [
                { key: 'number', label: 'Número' },
                { key: 'cvv', label: 'CVV' },
                { key: 'password', label: 'Senha' },
                { key: 'name', label: 'Nome' },
                { key: 'expiry', label: 'Data' },
            ];
        case 'note':
            return [{ key: 'content', label: 'Nota' }];
        case 'credential':
            return [
                { key: 'url', label: 'Url' },
                { key: 'login', label: 'Log In' },
                { key: 'password', label: 'Senha' },
            ];
        case 'wifi':
            return [
                { key: 'network', label: 'Rede' },
                { key: 'password', label: 'Senha' },
            ];
        default:
            return [];
    }
}

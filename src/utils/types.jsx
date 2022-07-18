import joi from 'joi';

import { columnsJoi } from './joi/passes.joi';

function column(key, label, show, type, placeholder, regex, joiSchema, config) {
    return { key, label, show, type, placeholder, regex, joiSchema, config };
}

const columns = {
    id: column('id', false, false, 'text', '', '', joi.string()),
    createdAt: column('createdAi', false, false, 'date', '', '', joi.date()),
    userId: column('userId', false, false, 'text', '', '', joi.string()),
    type: column('type', false, false, 'text', '', '', joi.string()),
    title: column('title', 'Título', true, 'text', 'Título', '', columnsJoi.title),
    password: column('password', 'Senha', true, 'text', 'Senha', '', columnsJoi.password),
    number: column('number', 'Número', true, 'text', 'Número do cartão', '', columnsJoi.number),
    expiry: column('expiry', 'Expira em', true, 'text', 'Data de expiração', '', columnsJoi.expiry),
    cvv: column('cvv', 'CVV', true, 'text', 'CVV', '', columnsJoi.cvv),
    name: column('name', 'Nome', true, 'text', 'Nome', '', columnsJoi.name),
    cardType: column('cardType', 'Tipo', true, 'select', 'Tipo do cartão', '', columnsJoi.cardType, {
        options: [
            { label: 'Ambos', value: 'both' },
            { label: 'Crédito', value: 'credit' },
            { label: 'Débito', value: 'debit' },
        ],
    }),
    isVirtual: column('isVirtual', 'Virtual?', true, 'checkbox', 'É virtual?', '', columnsJoi.isVirtual),
    url: column('url', 'Url', true, 'text', 'Url', '', columnsJoi.url),
    login: column('login', 'Login', true, 'text', 'Login', '', columnsJoi.login),
    network: column('network', 'Rede', true, 'text', 'Rede', '', columnsJoi.network),
    content: column('content', 'Nota', true, 'text', 'Conteúdo', '', columnsJoi.content),
};

const types = {
    card: [
        columns.type,
        columns.title,
        columns.password,
        columns.number,
        columns.cvv,
        columns.name,
        columns.expiry,
        columns.cardType,
        columns.isVirtual,
    ],
    note: [columns.type, columns.title, columns.content],
    credential: [columns.type, columns.title, columns.url, columns.login, columns.password],
    wifi: [columns.type, columns.title, columns.network, columns.password],
};

export function getTypeColumns(type) {
    return types[type] || [];
}

import joi from 'joi';

import { columnsJoi } from './joi/passes.joi';

function column(key, label, show, type, defaultValue, placeholder, regex, joiSchema, config) {
    return { key, label, show, type, defaultValue, placeholder, regex, joiSchema, config };
}

const columns = {
    id: column('id', false, false, 'text', null, '', '', joi.string()),
    createdAt: column('createdAi', false, false, 'date', null, '', '', joi.date()),
    userId: column('userId', false, false, 'text', null, '', '', joi.string()),
    type: column('type', false, false, 'text', '', '', '', joi.string()),
    title: column('title', 'Título', true, 'text', '', 'Título', '', columnsJoi.title),
    password: column('password', 'Senha', true, 'text', '', 'Senha', '', columnsJoi.password),
    number: column('number', 'Número', true, 'text', '', 'Número do cartão', '', columnsJoi.number),
    expiry: column('expiry', 'Expira em', true, 'text', '', 'Data de expiração', '', columnsJoi.expiry),
    cvv: column('cvv', 'CVV', true, 'text', '', 'CVV', '', columnsJoi.cvv),
    name: column('name', 'Nome', true, 'text', '', 'Nome', '', columnsJoi.name),
    cardType: column('cardType', 'Tipo', true, 'select', 'both', 'Tipo do cartão', '', columnsJoi.cardType, {
        options: [
            { label: 'Ambos', value: 'both' },
            { label: 'Crédito', value: 'credit' },
            { label: 'Débito', value: 'debit' },
        ],
    }),
    isVirtual: column('isVirtual', 'Virtual?', true, 'checkbox', true, 'É virtual?', '', columnsJoi.isVirtual),
    url: column('url', 'Url', true, 'text', '', 'Url', '', columnsJoi.url),
    login: column('login', 'Login', true, 'text', '', 'Login', '', columnsJoi.login),
    network: column('network', 'Rede', true, 'text', '', 'Rede', '', columnsJoi.network),
    content: column('content', 'Nota', true, 'text', '', 'Conteúdo', '', columnsJoi.content),

    documentType: column('documentType', 'Tipo de documento', true, 'select', 'CPF', 'Tipo de documento', '', columnsJoi.documentType, {
        options: [
            { label: 'CPF', value: 'CPF' },
            { label: 'RG', value: 'RG' },
        ],
    }),
    fullName: column('fullName', 'Nome completo', true, 'text', '', 'Nome completo', '', columnsJoi.fullName),
    emissionDate: column('emissionDate', 'Data de emissão', true, 'text', '', 'Data de emissão', '', columnsJoi.emissionDate),
    expirationDate: column('expirationDate', 'Data de expiração', true, 'text', '', 'Data de expiração', '', columnsJoi.expirationDate),
    registrationNumber: column(
        'registrationNumber',
        'Número do documento',
        true,
        'text',
        '',
        'Número do documento',
        '',
        columnsJoi.registrationNumber,
    ),
    issuer: column('issuer', 'Orgão emissor', true, 'text', '', 'Orgão emissor', '', columnsJoi.issuer),
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
    document: [
        columns.type,
        columns.title,
        columns.fullName,
        columns.emissionDate,
        columns.expirationDate,
        columns.documentType,
        columns.registrationNumber,
        columns.issuer,
    ],
};

export function getTypeColumns(type) {
    return types[type] || [];
}

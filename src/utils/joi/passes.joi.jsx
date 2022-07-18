import Joi from 'joi';

export const columnsJoi = {
    title: Joi.string().min(3).max(30).required(),
    name: Joi.string().min(3).max(30).required(),
    number: Joi.string().min(3).max(30).required(),
    cvv: Joi.string().min(3).max(30).required(),
    expiry: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
    cardType: Joi.string().valid('both', 'debit', 'credit').required(),
    isVirtual: Joi.boolean().required(),
    url: Joi.string().min(3).max(30).required(),
    login: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
    content: Joi.string().min(3).max(30).required(),
    network: Joi.string().min(3).max(30).required(),
};

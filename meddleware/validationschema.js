const {body} = require('express-validator');
const Validationschema = ()=> {
    return[ 
        body('name')
            .notEmpty()
            .withMessage('Name is required')
            .isLength({min: 3})
            .withMessage('Name must be at least 3 characters'),
        body('price')
            .notEmpty()
            .withMessage('Price is required')
    ]
}

module.exports = {Validationschema}
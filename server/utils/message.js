
module.exports = {
    ERROR_MESSAGE: {
        USER: {
            USER_ERROR: 'USER_ERROR',
            USER_NOT_FOUND: 'USER_NOT_FOUND',
            USER_EXIST: 'USER_EXIST',
            EMAIL_EXIST: 'EMAIL_EXIST',
            EMAIL_NOT_FOUND: 'EMAIL_NOT_FOUND',
            PASS_WRONG: 'PASS_WRONG',
        },
        RESTAURANT: {
            EXIT: 'RESTAURANT_EXIST',
            NOT_FOND: 'RESTAURANT_NOT_FOUND'
        },
        AUTH: {
            INVALID_TOKEN: 'INVALID_TOKEN',
            PERMISSION: 'PERMISSION',
            NOT_AUTHORIZED: 'NOT_AUTHORIZED',
            INVALID_LOGIN_CREDENTIALS: 'INVALID_LOGIN_CREDENTIALS',
            NOT_SEND_SMS: 'NOT_SEND_SMS'
        },

    },
    GENERIC: {
        CREATED: 'CRATED',
        UPDATED: 'UPDATED',
        NOTFOUND: 'NOTFOUND',
        DELETED: 'DELETED'
    },
    GENERICSTATUS: {
        CREATED: 200,
        UPDATED: 200,
        NOTFOUND: 404,
        DELETED: 200,
        ACCEPTED: 202,
        ERROR: 400
    },
    SUCCESS_MESSAGE: {
        USER: {
            CREATED: 'USER_CREATE',
            DELETED: 'USER_DELETE',
            SUCCES: 'SUCCES'
        }
    },
    STATUS_CODE: {
        SUCCES: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NOT_FOUND: 404,
        ERROR: 400,
        ERROR_SERVER: 500
    }
}
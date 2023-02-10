//servirá para todos los controladores
function buildParams(validParams, body) {
    let params = {};

    validParams.forEach(attr => {
        if (Object.prototype.hasOwnProperty.call(body, attr))
            params[attr] = body[attr];
    });
    return params;
}

export { buildParams };
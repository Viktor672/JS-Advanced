function requestValidator(object) {
    let uriPattern = /^([A-Za-z0-9.]+|\*)$/gm;
    let messagePatern = /^[^<>\\&'"]*$/gm;

    if (!object.hasOwnProperty('method') || object.method != 'GET' && object.method != 'POST' && object.method != 'DELETE' && object.method != 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }
    else if (!object.hasOwnProperty('uri') || !uriPattern.test(object.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    else if (!object.hasOwnProperty('version') || object.version != 'HTTP/0.9' && object.version != 'HTTP/1.0' && object.version != 'HTTP/1.1' && object.version != 'HTTP/2.0') {
        throw new Error('Invalid request header: Invalid Version');
    }
    else if ((!object.hasOwnProperty('message') || !messagePatern.test(object.message) && object.message.length > 0)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}
let obj = {
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
};
requestValidator(obj);
function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (const key in template) {
                if (typeof template[key] == 'function') {
                    Object.getPrototypeOf(obj)[key] = template[key];
                }
                else {
                    obj[key] = template[key];
                }
            }
        }
    }
    return obj;
}
var makeTypedError = function (name, Supertype) {

    Supertype = Supertype || Error;

    var TypedError = function (message) {
        this.name = name;
        this.message = message;
        var tempStack = (new Supertype()).stack;
        // replace 'Error' with actual name in stack trace
        this.stack = tempStack.replace(/^[^:]+:/, name + ':');
    };

    TypedError.prototype = Object.create(Supertype.prototype);
    TypedError.prototype.constructor = TypedError;

    return TypedError;
};

module.exports = makeTypedError;

var makeTypedError = function (name) {

    var TypedError = function (message) {
        this.name = name;
        this.message = message;
        var tempStack = (new Error()).stack;
        // replace 'Error' with actual name in stack trace
        this.stack = this.name + tempStack.slice(5);
    };

    TypedError.prototype = Object.create(Error.prototype);
    TypedError.prototype.constructor = TypedError;

    return TypedError;
};

module.exports = makeTypedError;

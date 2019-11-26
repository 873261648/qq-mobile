const Message = (options = {}) => {
    if (typeof options === "string") {
        options = {message: options};
        console.log(options)
    }
};
['info', 'error', 'loading', 'warning', 'success'].map(type => {
    Message[type] = (options) => {
        options.type = type;
        return Message(options)
    }
});


export default Message
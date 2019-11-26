import Vue from 'vue';
import BaseMessage from "./message/Main";

let instance;
let instances = [];
let seed = 1;


let MessageConstructor = Vue.extend(BaseMessage);

const Msg = (options = {}) => {
    if (typeof options === "string") {
        options = {
            message: options
        }
    }
    let userOnClose = options.onClose;
    let id = 'message_' + seed++;

    options.onClose = function () {
        Msg.close(id, userOnClose);
    };
    instance = new MessageConstructor({
        data: options
    });
    instance.id = id;
    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = options.offset || 20;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });

    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    // instance.$el.style.zIndex = '99';
    instances.push(instance);
    return instance;
};

['success', 'warning', 'info', 'error'].forEach(type => {
    Msg[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return Msg(options);
    };
});

Msg.close = function (id, userOnClose) {
    instance.visible = false;
};

export default Msg;
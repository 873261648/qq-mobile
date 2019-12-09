import Vue from 'vue';
import Main from './Main';

const MessageConstructor = Vue.extend(Main);

let instance;
let seed = 0;


// type:info 类型
// duration:3000 显示时间, 毫秒。设为 0 则不会自动关闭

const Message = (options = {}) => {
    if (typeof options === "string") {
        options = {message: options};
    }
    options.cover = false;
    instance = new MessageConstructor({
        data: options
    });

    instance.id = 'message_' + seed++;
    instance.$mount();
    instance.visible = true;
    instance.cover = Boolean(options.cover);
    document.body.append(instance.$el);
    return instance
};
['info', 'error', 'loading', 'warning', 'success'].map(type => {
    Message[type] = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options,
            }
        }
        options.type = type;
        return Message(options)
    }
});


export default Message
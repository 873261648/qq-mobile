import Vue from 'vue';
import Main from './Main';

const DialogConstructor = Vue.extend(Main);

const Dialog = (options) => {
    if (typeof options === "string") {
        options = {
            message: options,
        }
    }

    return new Promise((resolve, reject) => {
        let close = () => {
            instance.show = false;
            resolve();
        };
        let instance = new DialogConstructor({
            data: options,
            methods: {close}
        });

        instance.$mount();

        instance.show = true;
        document.body.appendChild(instance.$el);
    })
};
export default Dialog
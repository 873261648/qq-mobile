// 全局引入基础组件
import Vue from 'vue';
import BaseCall from '../components/base/baseCall';
import BaseCallGroup from '../components/base/baseCallGroup';
import BasePicker from '../components/base/basePicker';

import AppHeader from '../components/AppHeader';
import Message from "../components/base/message/";


Vue.component('app-header', AppHeader);
Vue.component('base-call', BaseCall);
Vue.component('base-call-group', BaseCallGroup);
Vue.component('base-picker', BasePicker);

Vue.prototype.$message = Message;


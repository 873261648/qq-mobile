// 全局引入基础组件
import Vue from 'vue';
import BaseCall from '../components/base/baseCall';
import BaseCallGroup from '../components/base/baseCallGroup';
import BasePicker from '../components/base/basePicker';
import BaseDatePicker from '../components/base/baseDatePicker';
import BaseCityPicker from '../components/base/baseCityPicker'
import baseOverlay from '../components/base/baseOverlay'

import AppHeader from '../components/AppHeader';
import Message from "../components/base/message/";
import Dialog from '../components/base/dialog';


Vue.component('app-header', AppHeader);
Vue.component('base-call', BaseCall);
Vue.component('base-call-group', BaseCallGroup);
Vue.component('base-picker', BasePicker);
Vue.component('base-date-picker', BaseDatePicker);
Vue.component('base-city-picker', BaseCityPicker);
Vue.component('base-overlay', baseOverlay);

Vue.prototype.$message = Message;
Vue.prototype.$dialog = Dialog;
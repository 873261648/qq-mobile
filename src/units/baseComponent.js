// 全局引入基础组件
import Vue from 'vue';
import BasePicker from '../components/base/basePicker';
import Message from "../components/base/message/";


Vue.component('base-picker', BasePicker);

Vue.prototype.$message = Message;


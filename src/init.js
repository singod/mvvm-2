import compile from './compile';
import {Observe} from './observe';

var MVVM = function(params) {
	this.el = document.querySelector(params.el);
	this.model = params.data || {};
	this.cache = [];
	this.direct_array=[];
	new Observe(this.model);
	compile(this);
	console.log(1222);
};

window.MVVM = MVVM;
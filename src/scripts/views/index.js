var indexTpl=require('../tpl/index.string');
var IScroll=require('../lib/iscroll-probe.js');
console.log(IScroll);
document.body.innerHTML+=indexTpl;
window.onload=function(){
	var iscroll=new IScroll('#index-scroll');
}

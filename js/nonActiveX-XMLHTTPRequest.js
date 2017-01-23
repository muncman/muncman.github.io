/*
coded by Kae - http://verens.com/
use this code as you wish, but retain this notice
*/

function XMLHttpRequest() {
	var i=0;
	var url='';
	var responseText='';
	this.onreadystatechange=function(){
		return false;
	}
	this.open=function(method,url){
		//TODO: POST methods
		this.i=++kXHR_instances; // id number of this request
		this.url=url;
		var iframe=document.createElement('<iframe id="kXHR_iframe_'+this.i+'" type="text/plain" style="display:none"></iframe>');
		document.body.appendChild(iframe);
	}
	this.send=function(postdata){
		//TODO: use the postdata
		var el=document.getElementById('kXHR_iframe_'+this.i);
		el.src=this.url;
		kXHR_objs[this.i]=this;
		setTimeout('XMLHttpRequest_checkState('+this.i+')',500);
	}
	return true;
}
function XMLHttpRequest_checkState(inst){
	var el=document.getElementById('kXHR_iframe_'+inst);
	if(el.readyState=='complete'){
		var responseText=window.frames['kXHR_iframe_'+inst].document.body.childNodes[0].data;
		kXHR_objs[inst].responseText=responseText;
		kXHR_objs[inst].readyState=4;
		kXHR_objs[inst].status=200;
		kXHR_objs[inst].onreadystatechange();
		el.parentNode.removeChild(el);
	}else{
		setTimeout('XMLHttpRequest_checkState('+inst+')',500);
	}
}
var kXHR_instances=0;
var kXHR_objs=[];

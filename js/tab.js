var tabBox = document.getElementById('tabBox'),
	oList = tabBox.getElementsByTagName('li'),
	oDivList = tabBox.getElementsByTagName('div');
function change(index){
	//移除之前的select
	for(var i=0; i<oList.length; i++){
		oList[i].className = '';
		oDivList[i].className = '';
	}
	//设置当前点击的select
	oList[index].className = 'select';
	oDivList[index].className = 'select';
}
//自定义属性
/*
for(var i=0; i<oList.length; i++){
	oList[i].myIndex = i;
	oList[i].onclick = function(){
		change(this.myIndex);
	}
}
*/
//闭包实现
/*
for(var i=0; i<oList.length; i++){
	~function(i){
		oList[i].onclick = function(){
			change(i);
		}
	}(i);	
}
*/
//ES6
for(let i=0; i<oList.length; i++){
	oList[i].onclick = function(){
		change(i);
	}
}
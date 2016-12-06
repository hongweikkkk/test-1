var kk = document.getElementById('kk');
var inputs = document.getElementsByClassName("inputs");
var minus = document.getElementsByClassName("minus");

var plus = document.getElementsByClassName("plus");

var count_num = document.getElementsByClassName("count_num");
var prices = document.getElementsByClassName("number");
var totel_money = document.getElementById("money");
var totel_num = document.getElementById("total_num");

function $(id){
	return document.getElementById(id);
}
// 全选 调用总价函数
kk.onclick = function(){
	for(var i = 0;i<inputs.length;i++){
		var input = inputs[i];
		input.checked = this.checked;
}
		
	getTotal();
	
}
// 反选调用 总价函数
for(var i = 0;i<inputs.length;i++){
	// console.log(inputs[i]);
	inputs[i].onclick = function(){
		for(var i = 0 ;i<inputs.length;i++){
			input = inputs[i];
			// 只要有一个input没有被选中，全选框就不会被选中，
			if(input.checked==false){
				kk.checked = false;
				break;
				// 用break是只要一个input没有被选中，全选框就不会被选中，
				// 剩下的循环不需要再执行，所以用break结束整个循环
			}
			else{
				 kk.checked = true;
			}
		}
		getTotal();
	}
}
// 算总价的函数
function getTotal(){
	              var selected = 0;
	              var subTotal =0;
	              var price = 0;
	              var count = 0;
	              for(var i =0;i<inputs.length;i++){
	              	if(inputs[i].checked){
	              		// 累加所有的数量
	              		selected += parseInt(count_num[i].innerHTML);
	              		// console.log(selected);
	              		//遍历商品的每一个单价
	              		price = parseFloat(prices[i].innerHTML);
	              		// 遍历商品的每一个数量
	              		count = parseInt(count_num[i].innerHTML);
	              		// 每一件商品价钱的累加
	              		subTotal += parseFloat(price*count);

	              	}
	              	// 总价栏总件数的赋值
	              	totel_num.innerHTML= selected;
	              	// 总价栏所有商品总价的赋值
	              	totel_money.innerHTML =subTotal.toFixed(2);
	              	totel_money.className=totel_num.className="current";
	              }
}
// 加减每件商品数量的联动

for(var i=0;i<minus.length;i++){
    minus[i].index = i;
    minus[i].onclick = function(){
    	if(count_num[this.index].innerHTML>0){
    		count_num[this.index].innerHTML--;
    	}
    	
    	getTotal();
    }
    plus[i].index = i;
    plus[i].onclick=function(){
    	 if(count_num[this.index].innerHTML<100){
    	 	count_num[this.index].innerHTML++;
    	 }
    	getTotal();
    }
}


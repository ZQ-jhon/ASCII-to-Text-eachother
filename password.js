window.onload = function(){
	
	//加密
		function toPassword(str){
			var arr=[];
			for(var i=0;i<str.length;i++){
				
			    arr.push(str.charCodeAt(i));
			}
			
	
			return arr;
		}
	//解密	
		function toText(code){
			
			//判断输入的是不是数字
			if(parseInt(code)-0!==parseInt(code)){
				
				alert('请输入数字哦')
			}
			//检测输入的参数个数,找不到逗号，就默认为1个参数
			if(code.lastIndexOf(',')<=0){
				if(code-0<33){
					//35以下ASCII无法解析
					alert('请确保每一项数值都大于33，否则无法解析ASCII码');
				}
				else{
					
					
					return String.fromCharCode(code);
				
				}
			}
			var arr = code.split(',');
			
			var result = '';
			for(var i=0;i<arr.length;i++){
			    result += String.fromCharCode(arr[i]);
			}
			
			return result;
			
		}
		var ipt1 = document.getElementById('ipt1');
		var ipt2 = document.getElementById('ipt2');
		
		var opt1 = document.getElementById('opt1');
		var opt2 = document.getElementById('opt2');

		document.getElementById('btn1').onclick=()=>{
			
			opt1.value = toPassword(ipt1.value);
		}

		document.getElementById('btn2').onclick=()=>{
			opt2.value = toText(ipt2.value);
		}
		
	
	
	
	
}
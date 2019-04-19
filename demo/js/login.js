class login{
	constructor(btn){
		this.btn = document.querySelector("button");
		this.container = document.querySelector("#container");
		this.box = document.querySelector("#box")
		this.bindEvents();		
	}	
	bindEvents(){
		this.btn.onclick = ()=>{
			this.container.innerHTML = 
			'<h4>用户发布</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p><label>内容：<input id="usercont" type="text"></label></p>'+
			'<p><button id="sendBtn" class="logonBtn" type="button">发布</button></p>';
			
			tools.showCenter(this.container);
			this.modal = document.createElement("div")
			this.modal.className = "modal";
			document.body. appendChild(this.modal);	
						
		}
       		
		this.container.onclick = e =>{
			this.sendBtn = document.querySelector("#sendBtn");
			
			this.sendBtn.onclick= () =>{
				this.box = document.createElement("div")
				this.box.className = "modal1";
				document.body. appendChild(this.box);
				this.box.innerHTML = usercont.value;
				

				this.box.oncontextmenu = function(e){
				e = e || event;
				// 阻止右键默认菜单
				var ul = document.createElement("ul");
				e.preventDefault ?
					e.preventDefault() : 
					window.returnValue = false;
					ul.innerHTML = '<span id="a" class="a">删除</span>';
					document.body.appendChild(ul)
		
				
				}
			}			
		
			
			
			let date=new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let nowDate = date.getDate();
				let timebox = year+"年"+month+"月"+nowDate+"日";
				this.boxtime = document.createElement("span");
				this.boxtime.className = "boxtime";
				this.boxtime.innerHTML = timebox;
				this.box.appendChild(this.boxtime);
				
				
			e = e ||event;
			var target = e.target ||e.srcElements;
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let password = document.querySelector("#password").value;

					console.log(username, password);
				case "closeBtn" :
					this.container.style.display = "none";
					document.body.removeChild(this.modal);
				case "sendBtn":
					this.container.style.display = "none";
					document.body.removeChild(this.modal);
			}	

		}
		
		
	}	
}

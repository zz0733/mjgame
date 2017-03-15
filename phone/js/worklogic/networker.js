//模拟的网络处理，相当于一个控制器
game.networker = new function() {
	var self = this;
	self.msg = {
		BETHROW: 'bethrow_mj_msg_100',
		BESELECT: 'beselect_mj_msg_101',
		NEXTUSER_HANDLE: 'nextuser_mjhandle_102',
		NEXTUSER_BUHUA:'nextuser_buhua',
		THROWMJ: 'throw_mj_mjid_103',
		CREATEROOM: 'create_mj_room_104',
		JOINROOM: 'join_mj_room_105',
		SHOWTALK: 'show_talk_panel',
		
		DISBANDROOM:'disband_mj_room_106', //解散房间
	};
	this.executeMsg = function(sendobj, msgtype, msgdata) {
		var self = this;
		switch(msgtype) {
			case this.msg.JOINROOM:   //加入房间
				self.delayHandle(1000,sendobj, msgdata, self.joinRoom);
				break;
			case this.msg.THROWMJ:    //某玩家扔掉手牌
				self.delayHandle(1000,sendobj, msgdata, self.nextuserHandle);
				break;
			case this.msg.CREATEROOM: //创建房间
				self.delayHandle(1000,sendobj, msgdata, self.canCreateRoom, self);
				break;
			case this.msg.NEXTUSER_BUHUA://补花
				self.delayHandle(500,sendobj, msgdata, self.buhua, self);
				break;
			case this.msg.SHOWTALK://显示聊天
				self.delayHandle(50,sendobj,msgdata,self.showtalk,self);
				break;
		}
	};
	this.delayHandle = function(delaytime,sendobj, msgdata, func, self) {
		var self = this;
		new Hilo.Tween.to(this, {
			alpha: 1
		}, {
			duration: 10,
			delay: delaytime,
			onComplete: function() {
				func(sendobj, msgdata, self);
			}
		});
	};
	this.joinRoom  = function(sendobj, msgdata, self) {
		var isright = false;
		if(msgdata == '112233') {
			game.roominfo.id = '112233';
			isright = true;
		}
		game.sendMsg(self, sendobj, self.msg.JOINROOM, isright);
	};
	this.canCreateRoom = function(sendobj, msgdata, self) {
		var isEnoughcards = true;
		if(msgdata[0] > game.userdata.oneself.cardnums) {
			isEnoughcards = false;
			console.log('房卡不够');
		}else{
			var id = self._createRoomId();
			var man = msgdata[1][2];
			var paytype = msgdata[1][3];
			game.roominfo.setData(id,paytype,man);
			game.roominfo.isCreate = true;
		}
		game.sendMsg(self, sendobj, self.msg.CREATEROOM, isEnoughcards);
	};
	this.nextuserHandle = function(playscene, msgdata, self) {
		var tmp1 = ['up', 'left', 'down'];
		var index = Math.floor(Math.random() * 3);
		//debugger;
		game.sendMsg(this, playscene, self.msg.NEXTUSER_HANDLE, [msgdata[0],msgdata[2]]);
	};
	this._createRoomId = function(){
		var roomid  = (Math.floor(Math.random()*9)+1).toString();
		for(var i=0;i<5;i++){
			var n = Math.floor(Math.random() * 10);
			roomid += n.toString();
		}
		return roomid;
	};
	this.buhua = function(playscene, msgdata, self) {
		game.sendMsg(this, playscene, self.msg.NEXTUSER_BUHUA, 999);
	};
	this.showtalk = function(playscene, msgdata, self){
		console.log(msgdata);
		var dirs = ['down','up','right','left'];
		var dir = dirs[Math.floor(Math.random()*4)];
		game.sendMsg(this, playscene, self.msg.SHOWTALK, [dir,msgdata[0],msgdata[1]]);
	};
};
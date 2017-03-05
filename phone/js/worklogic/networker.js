//模拟的网络处理，相当于一个控制器
game.networker = new function() {
	var self = this;
	self.msg = {
		BETHROW: 'bethrow_mj_msg_100',
		BESELECT: 'beselect_mj_msg_101',
		NEXTUSER_HANDLE: 'nextuser_mjhandle_102',
		THROWMJ: 'throw_mj_mjid_103',
		CREATEROOM: 'create_mj_room_104',
		JOINROOM: 'join_mj_room_105',
	};
	this.executeMsg = function(sendobj, msgtype, msgdata) {
		var self = this;
		switch(msgtype) {
			case this.msg.JOINROOM:
				self.delayHandle(sendobj, msgdata, self.joinRoom);
				break;
			case this.msg.THROWMJ: //某玩家扔掉手牌
				self.delayHandle(sendobj, msgdata, self.nextuserHandle);
				break;
			case this.msg.CREATEROOM:
				self.delayHandle(sendobj, msgdata, self.canCreateRoom, self);
				break;
		}
	};
	this.delayHandle = function(sendobj, msgdata, func, self) {
		var self = this;
		new Hilo.Tween.to(this, {
			alpha: 1
		}, {
			duration: 10,
			delay: 1000,
			onComplete: function() {
				func(sendobj, msgdata, self);
			}
		});
	};
	this.joinRoom  = function(sendobj, msgdata, self) {
		var isright = false;
		if(msgdata == '112233') {
			isright = true;
		}
		game.sendMsg(self, sendobj, self.msg.JOINROOM, isright);
	};
	this.canCreateRoom = function(sendobj, msgdata, self) {
		var isEnoughcards = true;
		if(msgdata[0] > game.userdata.roomcards) {
			isEnoughcards = false;
		}
		var tmp = ['放胡单赔', '放胡双倍单赔', '放胡全赔'];
		game.sendMsg(self, sendobj, self.msg.CREATEROOM, [isEnoughcards, msgdata[1][2], tmp[msgdata[1][3]]]);
	};
	this.nextuserHandle = function(playscene, msgdata, self) {
		var tmp1 = ['up', 'left', 'down'];
		var index = Math.floor(Math.random() * 3);
		game.sendMsg(this, playscene, self.msg.NEXTUSER_HANDLE, tmp1[index]);
	};

};
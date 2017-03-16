(function(ns) {
	//数字键盘面板  3×4 布局
	var NumbersKeyPanel = ns.NumbersKeyPanel = Hilo.Class.create({
		Extends: Hilo.Container,
		name: 'NumbersKeyPanel',
		imgsource: null,
		btnupimg: null,
		btndownimg: null,
		btns: null,
		hspace: 5,
		vspace: 2,
		btnhandle: null,
		

		constructor: function(properties) {
			NumbersKeyPanel.superclass.constructor.call(this, properties);
			this.init(properties);
		},
		init: function(properties) {
			var rect = game.configdata.getPngRect(this.btnupimg, this.imgsource);
			this.width = rect[2] * 3 + this.hspace * 2;
			this.height = rect[3] * 4 + this.vspace * 3;
			game.drawdata.drawItemRect(1, 'black', 'red', 0, 0, this.width, this.height, this);

			for(var i = 0; i < this.btns.length; i++) {
				var item = this.btns[i];
				var btn = new game.IconButton({
					imgsource: this.imgsource,
					btnupimg: this.btnupimg,
					btndownimg: this.btndownimg,
					iconimg: item[0],
					buttondata: item[1],
					x: (i % 3) * (rect[2] + this.hspace),
					y: Math.floor(i / 3) * (rect[3] + this.vspace),
					handler: this.btnhandle,
				}).addTo(this);
			}
		},

		onUpdate: function() {

		},
	});

	//数字面板  1×6 布局
	var NumbersPanel = ns.NumbersPanel = Hilo.Class.create({
		Extends: Hilo.Container,
		name: 'NumbersPanel',
		numcount: 6,
		currentindex: -1,
		nums: null,
		hspace: 30,
		imgsource: null,
		bgimg: null,
		numsimglist: null,

		constructor: function(properties) {
			NumbersPanel.superclass.constructor.call(this, properties);
			this.init(properties);
		},
		init: function(properties) {
			var rect = game.configdata.getPngRect(this.bgimg, this.imgsource);
			this.width = rect[2] * this.numcount + this.hspace * (this.numcount - 1);
			this.height = rect[3];
			this.nums = [];
			for(var i = 0; i < this.numcount; i++) {
				var num = new game.IconNumber({
					imgsource: this.imgsource,
					x: i * (rect[2] + this.hspace),
					bgimg: this.bgimg,
					numsimglist: this.numsimglist
				}).addTo(this);
				this.nums.push(num);
			}
		},
		clearAll: function() {
			for(var i = 0; i < this.nums.length; i++) {
				this.nums[i].clear();
			}
			this.currentindex = -1;
		},
		addNum: function(n) {
			if(this.currentindex >= this.nums.length - 1) {

			} else {
				this.currentindex++;
				this.nums[this.currentindex].setNum(n);
			}
		},
		delNum: function() {
			if(this.currentindex == -1) {

			} else {
				this.nums[this.currentindex].clear();
				this.currentindex--;
			}
		},
		getNumsValue: function() {
			var result = '';
			for(var i = 0; i < this.nums.length; i++) {
				result += this.nums[i].defaultvalue.toString();
			}
			return result;
		},
		onUpdate: function() {

		},
	});

	//复合上面两个组件 组成的面板，可以操作
	var InputNumpanel = ns.InputNumpanel = Hilo.Class.create({
		Extends: Hilo.Container,
		name: 'InputNumpanel',
		numpanel: null,
		inputpanel: null,
		vspace: 25,
		numcount: 6,
		inceptHandle: null,
		constructor: function(properties) {
			InputNumpanel.superclass.constructor.call(this, properties);
			this.init(properties);
		},
		init: function(properties) {
			var btns = [
				['login_bg53', 1],
				['login_bg54', 2],
				['login_bg55', 3],
				['login_bg56', 4],
				['login_bg57', 5],
				['login_bg58', 6],
				['login_bg59', 7],
				['login_bg60', 8],
				['login_bg61', 9],
				['login_bg51', 100],
				['login_bg62', 0],
				['login_bg52', 200],
			];
			this.numpanel = new game.NumbersPanel({
				imgsource: 'ui',
				numcount: this.numcount,
				bgimg: 'login_bg48',
				numsimglist: ['whiteNum0', 'whiteNum1', 'whiteNum2', 'whiteNum3', 'whiteNum4', 'whiteNum5', 'whiteNum6', 'whiteNum7', 'whiteNum8', 'whiteNum9'],
			}).addTo(this);
			this.inputpanel = new game.NumbersKeyPanel({
				imgsource: 'ui',
				btnupimg: 'login_bg49',
				btndownimg: 'login_bg50',
				btns: btns,
				btnhandle: this.inputSingleNum,
				y: this.vspace + this.numpanel.height,

			}).addTo(this);
			if(this.inputpanel.width > this.numpanel.width) {
				this.width = this.inputpanel.width;
			} else {
				this.width = this.numpanel.width;
			}
			this.height = this.inputpanel.height + this.vspace + this.numpanel.height;
			this.inputpanel.x = (this.width - this.inputpanel.width) / 2;
			this.numpanel.x = (this.width - this.numpanel.width) / 2;
		},
		inputSingleNum: function(n) {
			var panel = this.parent.parent;
			if(n == 200) {
				panel.numpanel.delNum();
			} else if(n == 100) {
				panel.numpanel.clearAll();
			} else {
				panel.numpanel.addNum(n);
			}
			panel.inceptHandle(panel.numpanel.getNumsValue());
		},

		onUpdate: function() {

		},
	});

	//ShowTalkpanel  -- 聊天操作面板
	var ShowTalkpanel = ns.ShowTalkpanel = Hilo.Class.create({
		Extends: Hilo.Container,
		name: 'ShowTalkpanel',
		parentscene: null,
		panel:null,
		inputid:'INVITESCENE_ID',
		targetscene:null,
		talkpanel:null,
		browspanel:null,
		sendbtn:null,
		constructor: function(properties) {
			ShowTalkpanel.superclass.constructor.call(this, properties);
			this.init(properties);
		},
		init: function(properties) {
			var self = this;
			this.panel = game.configdata.createBgPanel([], 'login_bg35', true, true, this.parentscene, 'login_13', 'login_14', 'ui', 55, 'empty', 'empty');
			this.parentscene.panelid = this.id;
			
			var title = new game.TabButton({parentscene:this,leftfunc:this.showTalk,rightfunc:this.showBrows}).addTo(this.panel);
			title.x = (this.panel.width - title.width) / 2 * game.scalefact;
			title.y = 0;
			this.createTalkPanel();
			this.createBrowsPanel();
			this.browspanel.visible = false;

			this.panel.addTo(this);
			this.panel.closebtn.on(Hilo.event.POINTER_END, function(e) {
				self.parentscene.hidepanel();
			});
		},
		showTalk:function(parentscene){
			console.log(this);
			console.log('talk');
			parentscene._showTalk();
		},
		showBrows:function(parentscene){
			console.log(this);
			console.log('brows');
			parentscene._showBrows();
		},
		_showTalk:function(){
			this.talkpanel.visible = true;
			this.sendbtn.visible = true;
			this.browspanel.visible = false;
			this.insertDomtxt(0.125,0.125,0.5,0.04,this.panel.rx,this.panel.ry,this.panel.rwidht,this.panel.rheight);
		},
		_showBrows:function(){
			this.talkpanel.visible = false;
			this.sendbtn.visible = false;
			this.browspanel.visible = true;
			var input_id = '#'+this.inputid;
			$(input_id).remove();
		},
		hide:function(){
			var input_id = '#'+this.inputid;
			$(input_id).remove();
			this.panel.hide();
		},
		createTalkPanel:function(){
			var self = this;
			var scrollwin = new game.Scrollwindow({
				width: 621, //panel.width * game.scalefact * 6 / 8,
				height: this.panel.height * game.scalefact * 6 / 8,
				x: this.panel.width  * game.scalefact / 8,
				y: this.panel.height * game.scalefact / 4,
				scaleX: game.scalefact,
				scaleY: game.scalefact,
			}).addTo(this.panel);
			scrollwin.contentpanel.pointerEnabled = true;
			var content = new Hilo.Container();
			//content.pointerChildren = false;
			for(var i in game.mjdata.talksounds) {
				var data = game.mjdata.talksounds[i];
				var item = game.configdata.createBgTitletext(data[0], '26px 黑体', 'black', 'ui', 'login_bg92', 'left', 20).addTo(content);
				item.y = i * 60;
				item.sound = data[1];
				item.txt = data[0];
				item.on(Hilo.event.POINTER_END, function(e) {
					if(e.stageY < scrollwin.y || e.stageY > scrollwin.height + scrollwin.y){
						console.log('out range');
					}else{
						console.log('%d:%d:%d',e.stageY,scrollwin.y, scrollwin.height);
						if(scrollwin.slidedisy == 0) {
							game.sendMsg(game.scenes[self.targetscene], game.networker, game.networker.msg.SHOWTALK, ['text',this.txt, this.sound]);
						}
					}
				});
			}
			scrollwin.addContent(content, 660);
			
			this.insertDomtxt(0.125,0.125,0.5,0.04,this.panel.rx,this.panel.ry,this.panel.rwidht,this.panel.rheight);

			this.sendbtn = new game.IconButton({
				imgsource: 'ui',
				btnupimg: 'login_10',
				btndownimg: 'login_11',
				iconimg: 'login_bg90',
				x: this.panel.width * 0.65 * game.scalefact,
				y: this.panel.height * 0.125 * game.scalefact,
				handler: function() {
					var txt = $('#'+self.inputid)[0].value;
					if(txt.length > 0)
						game.sendMsg(game.scenes[self.targetscene], game.networker, game.networker.msg.SHOWTALK, ['text',txt, null]);
				},
				scaleX: game.scalefact,
				scaleY: game.scalefact,
			}).addTo(this.panel);
			
			this.talkpanel = scrollwin;
		},
		createBrowsPanel:function(){
			var self = this;
			var scrollwin = new game.Scrollwindow({
				width:  820, //panel.width * game.scalefact * 6 / 8,
				height: this.panel.height * game.scalefact * 6 / 8,
				x: this.panel.width  * game.scalefact / 8,
				y: this.panel.height * game.scalefact / 4,
				scaleX: game.scalefact,
				scaleY: game.scalefact,
			}).addTo(this.panel);
			scrollwin.contentpanel.pointerEnabled = true;
			var content = new Hilo.Container();
			//content.pointerChildren = false;
			var wnum = 9.0;
			for(var i=0;i<30;i++) {
				var browsname = 'biaoqing'+((i+1).toString());
				var rect = game.configdata.getPngRect(browsname,'brows');
				var data = game.mjdata.talksounds[i];
				var x = (i % wnum) *80;
				var y = Math.floor(i/wnum) *80;
				var item = game.configdata.createRectImg('brows',browsname,x,y,1).addTo(content);
				item.name = browsname;
				item.on(Hilo.event.POINTER_END, function(e) {
					var ty = self.panel.y+scrollwin.y;
					if(e.stageY <  tx || e.stageY > self.panel.height + ty){
						console.log('out range');
					}else{
						console.log('%d:%d:%d',e.stageY,ty, self.panel.height);
						if(scrollwin.slidedisy == 0) {
							game.sendMsg(game.scenes[self.targetscene], game.networker, game.networker.msg.SHOWTALK, ['brows',this.name]);
						}
					}
				});
			}
			scrollwin.addContent(content, 660);
			this.browspanel = scrollwin;
		},
		insertDomtxt:function(pctx,pcty,pctw,pcth,rx,ry,rwidth,rheight){
			var t = $('#game-container');
			var x =  game.screenWidth  * rx;
			var y =  game.screenHeight * ry;
			var px = game.screenWidth  *  pctx *  rwidth   * game.scalefact + x;
			var py = game.screenHeight *  pcty *  rheight  * game.scalefact + y;
			var pw = game.screenWidth  *  pctw *  rwidth   * game.scalefact;
			var ph = game.screenHeight *  pcth *  rheight  * game.scalefact;
			
			var posst = 'top:' + py + 'px;left:' + px + 'px';
			var cssst = "<input type='text'   id='"+this.inputid+"' placeholder='输入聊天内容...' style='width:" + pw + "px;height:"+ph+"px;position:absolute;" + posst + "'></input>";
			//var cssst = "<input type='text'   id='"+this.inputid+"' placeholder='输入聊天内容...' style='width:" + pw + "px;height:12px;position:absolute;" + posst + "'></input>";
			//var cssst = "<input type='text'  onfocus=ontxtfocus() id='"+this.inputid+"' value='输入聊天内容...' style='width:" + pw + "px;height:12px;position:absolute;" + posst + "'></input>";
			console.log(cssst);
			t.after(cssst);
		},
		onUpdate: function() {

		},
	});

})(window.game);
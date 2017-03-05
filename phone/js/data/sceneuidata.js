game = window.game || {};

game.sceneuidata = new function(){
	var self = this;
	
	self.init = function(){
		console.log('scene ui data init');
	};
	
	self.weixinlogin_uidata = [
	        [
				{
					itemid:'id_weixinlogbg_girl_bmp',
					itemtype:'bmp',
					imgsource:'bg',
					itemurlvalue:'login_bg',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'pct',
					aligny:'top_5'
				},
	        ],
			[
				{
					itemid:'id_weixinlogin_btn',
					itemtype:'btn',
					itemurlvalue:'login_1',
					btnup:'login_2',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'pct',
					aligny:'top_62'
				},
				{
					itemid:'id_agreeweixinlogin_selectbox',
					itemtype:'selectbox',
					itemurlvalue:'login_bg48',
					selectvalue:'login_4',
					layouttype_x:'pct',
					alignx:'left_36',
					layouttype_y:'pct',
					aligny:'bottom_10'
				},
				{
					itemid:'id_weixinlogin_txt',
					itemtype:'bmp',
					itemurlvalue:'login_5',
					layouttype_x:'follow',
					alignx:'id_agreeweixinlogin_selectbox&115',
					layouttype_y:'follow',
					aligny:'id_agreeweixinlogin_selectbox&15'
				}
			]
		];
	
	self.main_uidata = [
	        [
				{
					itemid:'id_weixinlogbg_girl_bmp',
					itemtype:'bmp',
					itemurlvalue:'tuiguang15',
					layouttype_x:'pct',
					alignx:'right_42',
					layouttype_y:'pct',
					aligny:'top_5'
				},
	        ],
			[
				{
					itemid:'id_mainscene_expandable_btn',
					itemtype:'scalebtn',
					itemurlvalue:'tuiguang15',
					btnup:'tuiguang15',
					layouttype_x:'pct',
					alignx:'right_34',
					layouttype_y:'pct',
					aligny:'top_8'
				},
				{
					itemid:'id_mainscene_share_btn',
					itemtype:'scalebtn',
					itemurlvalue:'1',
					layouttype_x:'pct',
					alignx:'right_26',
					layouttype_y:'pct',
					aligny:'top_8'
				},
				{
					itemid:'id_mainscene_score_btn',
					itemtype:'scalebtn',
					itemurlvalue:'login_bg14',
					layouttype_x:'pct',
					alignx:'right_18',
					layouttype_y:'pct',
					aligny:'top_8'
				},
				{
					itemid:'id_mainscene_help_btn',
					itemtype:'scalebtn',
					itemurlvalue:'lsbattle_5',
					layouttype_x:'pct',
					alignx:'right_10',
					layouttype_y:'pct',
					aligny:'top_8'
				},
				{
					itemid:'id_mainscene_setting_btn',
					itemtype:'scalebtn',
					itemurlvalue:'lsbattle_2',
					layouttype_x:'pct',
					alignx:'right_2',
					layouttype_y:'pct',
					aligny:'top_8'
				},
				{
					itemid:'id_mainscene_createroom_btn',
					itemtype:'scalebtn',
					itemurlvalue:'5',
					layouttype_x:'pct',
					alignx:'left_30',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_mainscene_enterroom_btn',
					itemtype:'scalebtn',
					itemurlvalue:'6',
					layouttype_x:'pct',
					alignx:'left_60',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_mainscene_merrygoround_bottom',
					itemtype:'merrygoround',
					headimg:'login_bg16',
					itemurlvalue:'login_bg17',
					layouttype_x:'pct',
					alignx:'left_20',
					layouttype_y:'pct',
					aligny:'top_90'
				}
			],
			//---------- 2：分享按钮弹出窗口  朋友圈分享按钮  微信分享按钮
			[
				{
					itemid:'id_weixinsharebg_bmp',
					itemtype:'bmp',
					itemurlvalue:'login_bg36',
					imgsource:'bg',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_shareweixin_btn',
					itemtype:'scalebtn',
					itemurlvalue:'fenxiang2',
					btnup:'fenxiang2',
					layouttype_x:'pct',
					alignx:'left_25',
					layouttype_y:'pct',
					aligny:'top_45'
				},
				{
					itemid:'id_shareweixin_text',
					itemtype:'texttitle',
					itemurlvalue:'fenxiang2',
					textvalue:'微信',
					color:'#333333',
					font:'30px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_25',
					layouttype_y:'pct',
					aligny:'bottom_40'
				},
				{
					itemid:'id_sharepenyouquan_btn',
					itemtype:'scalebtn',
					itemurlvalue:'fenxiang3',
					btnup:'fenxiang3',
					layouttype_x:'pct',
					alignx:'right_25',
					layouttype_y:'pct',
					aligny:'top_45'
				},
				{
					itemid:'id_shareweixin_text',
					itemtype:'texttitle',
					itemurlvalue:'fenxiang2',
					textvalue:'朋友圈',
					color:'#333333',
					font:'30px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'right_25',
					layouttype_y:'pct',
					aligny:'bottom_40'
				},
			],
			// -------- 3 创建房间窗口数据
			[
				{
					itemid:'id_createroombg_bmp',
					itemtype:'bmp',
					itemurlvalue:'login_bg36',
					imgsource:'bg',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'pct',
					aligny:'top_12'
				},
				{
					itemid:'id_createroomtitle_bmp',
					itemtype:'doublebmp',
					itemurlvalue:'login_bg38',
					frontimg:'21',
					imgsource:'ui',
					layouttype_x:'follow',
					alignx:'id_createroombg_bmp&0',
					layouttype_y:'pct',
					aligny:'bottom_85'
				},
				//---- 局数
				{
					itemid:'id_radiobox_count_1',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:4,
					layouttype_x:'pct',
					alignx:'left_30',
					layouttype_y:'pct',
					aligny:'top_20',
					groupid:'groupid001',
					lbtext:'4局',
					ischeck:true,
				},
				{
					itemid:'id_radiobox_count_2',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:8,
					layouttype_x:'pct',
					alignx:'left_50',
					layouttype_y:'pct',
					aligny:'top_20',
					groupid:'groupid001',
					lbtext:'8局',
					ischeck:false,
				},
				{
					itemid:'id_radiobox_count_3',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:16,
					layouttype_x:'pct',
					alignx:'left_70',
					layouttype_y:'pct',
					aligny:'top_20',
					groupid:'groupid001',
					lbtext:'16局',
					ischeck:false,
				},
				{
					itemid:'id_shareweixin2_text',
					itemtype:'simpletext',
					textvalue:'局数：',
					color:'#333333',
					font:'28px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_20',
					layouttype_y:'follow',
					aligny:'id_radiobox_count_3&10'
				},
				//---- 支付方
				{
					itemid:'id_radiobox_pay_1',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:0,
					layouttype_x:'pct',
					alignx:'left_30',
					layouttype_y:'pct',
					aligny:'top_35',
					groupid:'groupid002',
					lbtext:'房主支付',
					ischeck:true,
				},
				{
					itemid:'id_radiobox_pay_2',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:1,
					layouttype_x:'pct',
					alignx:'left_50',
					layouttype_y:'pct',
					aligny:'top_35',
					groupid:'groupid002',
					lbtext:'雀神支付',
					ischeck:false,
				},
				{
					itemid:'id_shareweixin2_text2',
					itemtype:'simpletext',
					textvalue:'房卡：',
					color:'#333333',
					font:'28px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_20',
					layouttype_y:'follow',
					aligny:'id_radiobox_pay_2&10'
				},
				//----------人数
				{
					itemid:'id_radiobox_man_1',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:4,
					layouttype_x:'pct',
					alignx:'left_30',
					layouttype_y:'pct',
					aligny:'top_50',
					groupid:'groupid003',
					lbtext:'4人',
					ischeck:true,
				},
				{
					itemid:'id_radiobox_man_2',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:3,
					layouttype_x:'pct',
					alignx:'left_50',
					layouttype_y:'pct',
					aligny:'top_50',
					groupid:'groupid003',
					lbtext:'3人',
					ischeck:false,
				},
				{
					itemid:'id_radiobox_man_3',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:2,
					layouttype_x:'pct',
					alignx:'left_70',
					layouttype_y:'pct',
					aligny:'top_50',
					groupid:'groupid003',
					lbtext:'2人',
					ischeck:false,
				},
				{
					itemid:'id_shareweixin2_text',
					itemtype:'simpletext',
					textvalue:'人数：',
					color:'#333333',
					font:'28px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_20',
					layouttype_y:'follow',
					aligny:'id_radiobox_man_3&10'
				},
				//----------玩法
				{
					itemid:'id_radiobox_type_1',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:0,
					layouttype_x:'pct',
					alignx:'left_30',
					layouttype_y:'pct',
					aligny:'top_65',
					groupid:'groupid004',
					lbtext:'放胡单赔',
					ischeck:true,
				},
				{
					itemid:'id_radiobox_type_2',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:1,
					layouttype_x:'pct',
					alignx:'left_50',
					layouttype_y:'pct',
					aligny:'top_65',
					groupid:'groupid004',
					lbtext:'放胡双倍单赔',
					ischeck:false,
				},
				{
					itemid:'id_radiobox_type_3',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					value:2,
					layouttype_x:'pct',
					alignx:'left_70',
					layouttype_y:'pct',
					aligny:'top_65',
					groupid:'groupid004',
					lbtext:'放胡全赔',
					ischeck:false,
				},
				{
					itemid:'id_shareweixin2_text',
					itemtype:'simpletext',
					textvalue:'玩法：',
					color:'#333333',
					font:'28px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_20',
					layouttype_y:'follow',
					aligny:'id_radiobox_type_3&10'
				},
				{
					itemid:'id_shareweixin2_text',
					itemtype:'simpletext',
					width:500,
					textvalue:'游戏首局结束前解散游戏，不扣除房卡',
					color:'#333333',
					font:'24px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_20',
					layouttype_y:'pct',
					aligny:'bottom_20'
				},
			],
			
		];
		
	self.playscene_uidata = [
	       //-------------- 0 邀请好友 场景
			[
				{
					itemid:'id_invitescene_invite_btn',
					itemtype:'btn',
					itemurlvalue:'battle_77',
					btnup:'battle_78',
					layouttype_x:'pct',
					alignx:'left_24',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_invitescene_disband_btn',
					itemtype:'btn',
					itemurlvalue:'battle_75',
					btnup:'battle_76',
					layouttype_x:'pct',
					alignx:'right_24',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_invitescene_titlebg_bmp',
					itemtype:'bmp',
					itemurlvalue:'login_bg17',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'txt',
					aligny:'top'
				},
				{
					itemid:'id_invitescene_title_txt',
					itemtype:'texttitle',
					itemurlvalue:'login_bg17',
					textvalue:'房间号：123456',
					color:'white',
					font:'14px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'txt',
					aligny:'top'
				},
				{
					itemid:'id_invitescene_wintype_txt',
					itemtype:'texttitle',
					itemurlvalue:'login_bg17',
					textvalue:'放胡怎么赔',
					color:'white',
					font:'24px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'pct',
					aligny:'top_60'
				},
				{
					itemid:'id_invitescene_playerup_bmp',
					itemtype:'bmp',
					itemurlvalue:'battle_100',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'pct',
					aligny:'top_10'
				},
				{
					itemid:'id_invitescene_playerdown_bmp',
					itemtype:'bmp',
					itemurlvalue:'battle_100',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'pct',
					aligny:'bottom_5'
				},
				{
					itemid:'id_invitescene_playerleft_bmp',
					itemtype:'bmp',
					itemurlvalue:'battle_100',
					layouttype_x:'pct',
					alignx:'left_5',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_invitescene_playerright_bmp',
					itemtype:'bmp',
					itemurlvalue:'battle_100',
					layouttype_x:'pct',
					alignx:'right_5',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_invitescene_back_btn',
					itemtype:'scalebtn',
					itemurlvalue:'lsbattle_74',
					layouttype_x:'pct',
					alignx:'left_2',
					layouttype_y:'pct',
					aligny:'top_2'
				},
				{
					itemid:'id_invitescene_setting_btn',
					itemtype:'scalebtn',
					itemurlvalue:'lsbattle_2',
					layouttype_x:'pct',
					alignx:'right_2',
					layouttype_y:'pct',
					aligny:'top_2'
				},
				{
					itemid:'id_invitescene_talk_btn',
					itemtype:'scalebtn',
					itemurlvalue:'lsbattle_3',
					layouttype_x:'pct',
					alignx:'right_2',
					layouttype_y:'pct',
					aligny:'bottom_15'
				},
				/*{
					itemid:'id_mainscene_setting_btn',
					itemtype:'scalebtn',
					itemurlvalue:'login_bg14',
					layouttype_x:'pct',
					alignx:'right_2',
					layouttype_y:'pct',
					aligny:'top_8'
				},
				{
					itemid:'id_mainscene_createroom_btn',
					itemtype:'scalebtn',
					itemurlvalue:'5',
					layouttype_x:'pct',
					alignx:'left_45',
					layouttype_y:'pct',
					aligny:'top_50'
				},
				{
					itemid:'id_mainscene_enterroom_btn',
					itemtype:'scalebtn',
					itemurlvalue:'6',
					layouttype_x:'pct',
					alignx:'left_80',
					layouttype_y:'pct',
					aligny:'top_50'
				},
				{
					itemid:'id_mainscene_merrygoround_bottom',
					itemtype:'merrygoround',
					headimg:'login_bg16',
					itemurlvalue:'login_bg17',
					layouttype_x:'pct',
					alignx:'left_20',
					layouttype_y:'pct',
					aligny:'top_90'
				}*/
			],
			//---------- 2：分享按钮弹出窗口  朋友圈分享按钮  微信分享按钮
			[
				{
					itemid:'id_weixinsharebg_bmp',
					itemtype:'bmp',
					itemurlvalue:'login_bg36',
					imgsource:'bg',
					layouttype_x:'txt',
					alignx:'center',
					layouttype_y:'txt',
					aligny:'center'
				},
				{
					itemid:'id_shareweixin_btn',
					itemtype:'scalebtn',
					itemurlvalue:'fenxiang2',
					btnup:'fenxiang2',
					layouttype_x:'pct',
					alignx:'left_38',
					layouttype_y:'pct',
					aligny:'top_45'
				},
				{
					itemid:'id_shareweixin_text',
					itemtype:'texttitle',
					itemurlvalue:'fenxiang2',
					textvalue:'微信',
					color:'#333333',
					font:'16px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_38',
					layouttype_y:'pct',
					aligny:'bottom_55'
				},
				{
					itemid:'id_sharepenyouquan_btn',
					itemtype:'scalebtn',
					itemurlvalue:'fenxiang3',
					btnup:'fenxiang3',
					layouttype_x:'pct',
					alignx:'left_63',
					layouttype_y:'pct',
					aligny:'top_45'
				},
				{
					itemid:'id_shareweixin_text',
					itemtype:'texttitle',
					itemurlvalue:'fenxiang2',
					textvalue:'朋友圈',
					color:'#333333',
					font:'16px 黑体',
					bg:'rgba(0,0,0,0)',
					layouttype_x:'pct',
					alignx:'left_63',
					layouttype_y:'pct',
					aligny:'bottom_55'
				},
			],
			// -------- 3 创建房间窗口数据
			[
				{
					itemid:'id_radiobox_test_1',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					layouttype_x:'pct',
					alignx:'left_30',
					layouttype_y:'pct',
					aligny:'bottom_40',
					groupid:'groupid001',
					lbtext:'4局',
					ischeck:true,
				},
				{
					itemid:'id_radiobox_test_2',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					layouttype_x:'pct',
					alignx:'left_45',
					layouttype_y:'pct',
					aligny:'bottom_40',
					groupid:'groupid001',
					lbtext:'8局',
					ischeck:false,
				},
				{
					itemid:'id_radiobox_test_3',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					layouttype_x:'pct',
					alignx:'left_60',
					layouttype_y:'pct',
					aligny:'bottom_40',
					groupid:'groupid001',
					lbtext:'16局',
					ischeck:false,
				},
				{
					itemid:'id_radiobox_test_11',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					layouttype_x:'pct',
					alignx:'left_45',
					layouttype_y:'pct',
					aligny:'bottom_30',
					groupid:'groupid002',
					lbtext:'房主',
					ischeck:true,
				},
				{
					itemid:'id_radiobox_test_22',
					itemtype:'radiobox',
					itemurlvalue:'23',
					selectvalue:'22',
					layouttype_x:'pct',
					alignx:'left_60',
					layouttype_y:'pct',
					aligny:'bottom_30',
					groupid:'groupid002',
					lbtext:'雀圣',
					ischeck:false,
				}
			],
			
		];
	
	self.createAtlas = function(data){
		var atlas = new Hilo.TextureAtlas({
			image: game.getImg(data.name),
			width: data.w,
			height: data.h,
			frames:data.frames,
			sprites:data.sprites,
		});
		return atlas;
	};
};


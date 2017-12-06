var game;
var nowRunLandscape;
var inLoading = true;
var gameOver = false;
var CONST_WIDTH = 1920/1.5;
var CONST_HEIGHT = 1080/1.5;

var Switch = false;

game = new Phaser.Game(CONST_WIDTH,CONST_HEIGHT,Phaser.AUTO,"game")

if (window.innerWidth > window.innerHeight) nowRunLandscape = true;
else    nowRunLandscape = false;


function leaveIncorrectCb(){
    if(!game.device.desktop){
        game.camera.x = 0;
        game.world.rotation = 0;
        
		game.width = CONST_WIDTH;
		game.height = CONST_HEIGHT;
		game.renderer.resize(game.width,game.height);
		
		nowRunLandscape = true;
    }
}

function enterIncorrectCb(){
 	if(!game.device.desktop){
        game.camera.x = -1080/1.5;
        game.world.rotation = Math.PI / 2;
        
        game.width = CONST_HEIGHT;
        game.height = CONST_WIDTH;
    	game.renderer.resize(game.width,game.height);
    	
		nowRunLandscape = false;
 	}
}

game.Mystate={};
//========================================== load ========================================
game.Mystate.load={	
	preload:function(){
		game.stage.backgroundColor='#ffffff';
    	game.stage.disableVisibilityChange = true;
    	game.stage.smoothed = true;
    	game.scale.pageAlignHorizontally = true;
   	 	game.scale.pageAlignVertically = true;
   	 	
		game.load.image("bg","aside/image/bj.png")//背景加载
		game.load.image("bang","aside/image/ui_mozhang.png")//mofabang加载
		game.load.image("start_icon","aside/image/start_icon.png")//mofabang加载
		game.load.image("icon_exit_on","aside/image/Exit_on.png")
		game.load.image("icon_musical_on","aside/image/Musical_on.png")
		game.load.image("icon_musical_off","aside/image/Musical_off.png")
		game.load.image("icon_help","aside/image/Help_on.png")
		game.load.image("icon_more_on","aside/image/More_on.png")
		game.load.image("hand","aside/image/hand.png")
		game.load.image("wupin_guanzi","aside/image/wupin_guanzi_0.png")
		game.load.image("wupin_pingzi","aside/image/wupin_pingzi_0.png")
		game.load.image("wupin_tianping","aside/image/wupin_tianping_0.png")
		game.load.image("wupin_shu","aside/image/wupin_shu_0.png")
		game.load.image("Catoozi_off","aside/image/Catoozi_1.png")
		game.load.image("Catoozi_on","aside/image/Catoozi_0.png")
		game.load.image("list","aside/image/ui_bj.png")
		game.load.image("wupin_shiguan","aside/image/wupin_shiguan_0.png")
		game.load.image("wupin_tianping_xu","aside/image/tianping_1.png")
		game.load.image("wupin_shu_xu","aside/image/shu_1.png")
		game.load.image("wupin_pingzi_xu","aside/image/pingzi_1.png")
		game.load.image("wupin_guanzi_xu","aside/image/guanzi_1.png")
		game.load.image("wupin_shiguan_xu","aside/image/shiguan_1.png")
		game.load.image("wupin_tianping_guang","aside/image/wupin_tianping_1.png")//xuxian
		game.load.image("wupin_shu_guang","aside/image/wupin_shu_1.png")
		game.load.image("wupin_pingzi_guang","aside/image/wupin_pingzi_1.png")
		game.load.image("wupin_guanzi_guang","aside/image/wupin_guanzi_1.png")
		game.load.image("wupin_shiguan_guang","aside/image/wupin_shiguan_1.png")
		game.load.image("target","aside/image/target.png")
		game.load.image("xuxian","aside/image/ui_xuxian.png")
		game.load.image("xuxian001","aside/image/ui_xuxian001.png")
		game.load.image("xuxian_shiguan","aside/image/ui_xuxian_shiguan.png")
		game.load.image("xuxian_shu","aside/image/ui_xuxian_shu.png")
		game.load.image("xuxian_guanzi","aside/image/ui_xuxian_guanzi.png")
		game.load.image("xuxian_pingzi","aside/image/ui_xuxian_pingzi.png")
		game.load.image("xuxian_tianping","aside/image/ui_xuxian_tianping.png")
		
		game.load.spritesheet('shexian1','aside/image/she1.png',256,128/4,4)
		game.load.spritesheet('shexian2','aside/image/she2.png',256,128/4,4)
		game.load.spritesheet('shexian3','aside/image/she3.png',256,128/4,4)
		game.load.spritesheet('shexian4','aside/image/she4.png',256,128/4,4)
		game.load.spritesheet('shexian5','aside/image/she5.png',256,128/4,4)
		game.load.image("shu_over","aside/image/shu_0.png")
		game.load.image("shiguan_over","aside/image/shiguan_0.png")
		game.load.image("guanzi_over","aside/image/guanzi_0.png")
		game.load.image("pingzi_over","aside/image/pingzi_0.png")
		game.load.image("tianping_over","aside/image/tianping_0.png")
		
		game.load.audio('click', 'aside/audio/click.mp3');
		game.load.audio('goodjob', 'aside/audio/GoodJob01.wav');
		
		game.load.onFileComplete.add(function(pre){
			//text.text = pre	
		})	
	},	
	create:function(){
		game.state.start("ready")
	}
}
var starScreen;
var bang;
var target;
var target2;
var ball_angle;
var bounds;
var xuxian
var xuxian2
var xuxian_shiguan
var xuxian_shu;
var xuxian_guanzi;
var xuxian_pingzi;
var xuxian_tianping;

var shexian1,shexian2,shexian3,shexian4,shexian5
var wupin_guanzi;
var wupin_pingzi;
var wupin_tianping;
var wupin_shu;
var wupin_shiguan;
var wupin_guanzi_guang;
var wupin_pingzi_guang;
var wupin_tianping_guang;
var wupin_shu_guang;
var wupin_shiguan_guang;
var shiguanClicked =true;
var shiguanstartClick;
var shuClicked=true;
var shustartClick;
var guanziClicked=true;
var guanzistartClick;
var pingziClicked=true;
var pingzistartClick;
var tianpingClicked=true;
var tianpingstartClick;
var sum = 0;
var now_angle =0;
var hand;
var clicktag=0;
var wupin_shiguan_help = true;
var timer;
var lastTimer=0;
var now =0;
var shiguan_over;
var shu_over;
var guanzi_over;
var tianping_over;
var pingzi_over;
var baibu
var gameovertag=false;
var clickAudio,goodjobAudio;

game.Mystate.ready={
	preload:function(){	
 	 	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;	
	},
	create:function(){
		game.state.start("start")
	}
}

game.Mystate.start={
	preload:function(){
		game.load.image("start_screen","aside/image/start_screen.png")
		game.load.image("loader","aside/image/loader.png")
		game.load.image("loaderbar","aside/image/loaderbar.png")
   	 	
   	 	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		//game.load.image("preload",'aside/image/preloader.gif');
		game.scale.forceOrientation(true, false);
  		game.scale.enterIncorrectOrientation.add(enterIncorrectCb);
    	game.scale.leaveIncorrectOrientation.add(leaveIncorrectCb);
    	game.world.setBounds(-5000,-5000,10000, 10000);
	},
	
	create:function(){	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(CONST_WIDTH/2,CONST_HEIGHT/2,'bg').anchor.set(0.5,0.5);

    icon_help = game.add.image(106/1.5, 981.5/1.5, 'icon_help');
    icon_help.anchor.set(0.5);
    icon_help.inputEnabled = true;
    icon_help.events.onInputDown.add(this.onHelpButtonPressed, this);
    icon_exit_on = game.add.image(104/1.5, 100.5/1.5, 'icon_exit_on');
    icon_exit_on.anchor.set(0.5);
    icon_exit_on.inputEnabled = true;
    icon_exit_on.events.onInputDown.add(this.onButtonPressed, this);
    icon_musical_on = game.add.image(1814/1.5, 100.5/1.5, 'icon_musical_on');
    icon_musical_on.anchor.set(0.5);
    icon_musical_on.inputEnabled = true;
    icon_musical_on.visible = true;
    icon_musical_on.events.onInputDown.add(this.onMusicalButtonPressed, this);
    icon_musical_off = game.add.image(1814/1.5, 100.5/1.5, 'icon_musical_off');
    icon_musical_off.anchor.set(0.5);
    icon_musical_off.inputEnabled = false;
    icon_musical_off.visible = false;
    icon_musical_off.events.onInputDown.add(this.onMusicalButtonPressed, this);
    icon_more_on = game.add.image(1814/1.5, 981.5/1.5, 'icon_more_on');
    icon_more_on.anchor.set(0.5);
    icon_more_on.inputEnabled = true;
    icon_more_on.visible = true;
    icon_more_on.events.onInputDown.add(this.MoreButton, this);
    
    hand_img = game.add.image(960/1.5, 770/1.5, 'hand');
    hand_img.visible = false;
	
	this.Catoozi_on =  game.add.sprite(CONST_WIDTH/2, CONST_HEIGHT-50,'Catoozi_on');
	this.Catoozi_on.anchor.setTo(0.5);
	this.Catoozi_on.scale.setTo(1.2);
	this.Catoozi_off =  game.add.sprite(CONST_WIDTH/2, CONST_HEIGHT-50,'Catoozi_off');
	this.Catoozi_off.anchor.setTo(0.5);
	this.Catoozi_off.scale.setTo(1.2);
	this.Catoozi_on.inputEnabled = true;

	var list = game.add.sprite(30/1.5, 170/1.5,'list');

	var wupin_shiguan_xu = game.add.sprite(84/1.5,198/1.5,'wupin_shiguan_xu');
	var wupin_guanzi_xu = game.add.sprite(70/1.5,340/1.5,'wupin_guanzi_xu');
	var wupin_pingzi_xu = game.add.sprite(80/1.5,480/1.5,'wupin_pingzi_xu');
	var wupin_shu_xu = game.add.sprite(60/1.5,635/1.5,'wupin_shu_xu');
	var wupin_tianping_xu = game.add.sprite(60/1.5,770/1.5,'wupin_tianping_xu');

	wupin_guanzi = game.add.sprite(1380/1.5, 550/1.5,'wupin_guanzi');//管子
	wupin_pingzi = game.add.sprite(1700/1.5, 650/1.5,'wupin_pingzi');//瓶子
	wupin_tianping = game.add.sprite(1100/1.5, 750/1.5,'wupin_tianping');//天平
	wupin_shu = game.add.sprite(1160/1.5, 430/1.5,'wupin_shu');//书
	wupin_shiguan = game.add.sprite(874/1.5, 255/1.5,'wupin_shiguan');//试管
	wupin_shiguan.scale.setTo(0.8,0.8)

	game.physics.arcade.enable(wupin_guanzi);
	game.physics.arcade.enable(wupin_pingzi);
	game.physics.arcade.enable(wupin_tianping);
	game.physics.arcade.enable(wupin_shu);
	game.physics.arcade.enable(wupin_shiguan);

    bounds = new Phaser.Rectangle(200/1.5, 340/1.5, 400/1.5, 380/1.5);
    var graphics = game.add.graphics(bounds.x, bounds.y);
    graphics.beginFill(0x000077);
    graphics.drawRect(0, 0, bounds.width, bounds.height);
    graphics.alpha=0

	bang = game.add.sprite(200/1.5,CONST_HEIGHT/2,'bang');
	bang.index = 999;
	bang.anchor.setTo(0.1, 0.5);

	target = game.add.sprite(400/1.5, CONST_HEIGHT/2, 'bang');
	target.alpha=0
	target.scale.setTo(1,4)
	target.anchor.setTo(0.5, 0.5);
	target.inputEnabled = true;
   	target.input.enableDrag(true);
   	target.input.boundsRect = bounds;

	game.physics.enable(bang, Phaser.Physics.ARCADE);
	var angle = 0;
 	bang.inputEnabled = true;
    bang.input.useHandCursor = true;

    	//xuxian2 = game.add.sprite(3,100/1.5,"xuxian001")
    	xuxian2 = game.add.sprite(bang.x, bang.y, 'xuxian001');
    	xuxian_shiguan = game.add.sprite(bang.x, bang.y, 'xuxian_shiguan');
    	xuxian_shu = game.add.sprite(bang.x, bang.y, 'xuxian_shu');
    	xuxian_guanzi = game.add.sprite(bang.x, bang.y, 'xuxian_guanzi');
    	xuxian_pingzi = game.add.sprite(bang.x, bang.y, 'xuxian_pingzi');
    	xuxian_tianping = game.add.sprite(bang.x, bang.y, 'xuxian_tianping');//tianping虚线
		//xuxian2.scale.setTo(1,1);
	
		shexian1 = game.add.sprite(3000/1.5,0,"shexian3");
		shexian2 = game.add.sprite(3000/1.5,0,"shexian3");
		shexian3 = game.add.sprite(3000/1.5,0,"shexian3");
		shexian4 = game.add.sprite(3000/1.5,0,"shexian3");
		shexian5 = game.add.sprite(3000/1.5,0,"shexian3");
		
		game.physics.enable(xuxian2, Phaser.Physics.ARCADE);
		game.physics.enable(shexian1, Phaser.Physics.ARCADE);
		game.physics.enable(shexian2, Phaser.Physics.ARCADE);
		game.physics.enable(shexian3, Phaser.Physics.ARCADE);
		game.physics.enable(shexian4, Phaser.Physics.ARCADE);
		game.physics.enable(shexian5, Phaser.Physics.ARCADE);

		shexian1.reset(bang.x,bang.y-14)
		shexian2.reset(bang.x,bang.y-14)
		shexian3.reset(bang.x,bang.y-14)
		shexian4.reset(bang.x,bang.y-14)
		shexian5.reset(bang.x,bang.y-14)

		shexian1.alpha=0;
		shexian2.alpha=0;
		shexian3.alpha=0;
		shexian4.alpha=0;
		shexian5.alpha=0;
		
		shexian1.animations.add('she1',[0,1,2,3],10,true);
		shexian2.animations.add('she2',[0,1,2,3],10,true);
		shexian3.animations.add('she3',[0,1,2,3],10,true);
		shexian4.animations.add('she4',[0,1,2,3],10,true);
		shexian5.animations.add('she5',[0,1,2,3],10,true);

		wupin_shu_guang = game.add.sprite(1150/1.5,420/1.5,'wupin_shu_guang')
		wupin_guanzi_guang = game.add.sprite(1370/1.5,540/1.5,'wupin_guanzi_guang')
		wupin_pingzi_guang = game.add.sprite(1690/1.5,640/1.5,'wupin_pingzi_guang')
		wupin_tianping_guang = game.add.sprite(1090/1.5,740/1.5,'wupin_tianping_guang')	
		wupin_shiguan_guang = game.add.sprite(864/1.5,245/1.5,'wupin_shiguan_guang')	
		wupin_shiguan_guang.scale.setTo(0.8,0.8) 

		shiguan_over = game.add.sprite(85/1.5,200/1.5,'shiguan_over');		
		shu_over = game.add.sprite(60/1.5,635/1.5,'shu_over');		
		guanzi_over = game.add.sprite(70/1.5,340/1.5,'guanzi_over');		
		pingzi_over = game.add.sprite(80/1.5,480/1.5,'pingzi_over');		
		tianping_over = game.add.sprite(60/1.5,770/1.5,'tianping_over');
		shiguan_over.alpha =0;
		shu_over.alpha =0;
		guanzi_over.alpha =0;
		pingzi_over.alpha =0;
		tianping_over.alpha =0;

		bounds = new Phaser.Rectangle(0, 0, CONST_WIDTH, CONST_HEIGHT); 
		baibu = game.add.graphics(bounds.x, bounds.y);
    	baibu.beginFill(0xffffff);
    	baibu.drawRect(0, 0, bounds.width, bounds.height);
    	baibu.alpha=0 
    	
    	clickAudio = game.add.audio("click")
    	goodjobAudio = game.add.audio("goodjob")
    	
    	//开始入场动画
      	starScreen =game.add.image(game.width/2,game.height/2,"start_screen")
      	starScreen.anchor.set(0.5,0.5);
      	
		this.loader = game.add.image(CONST_WIDTH/2-200,CONST_HEIGHT-200/1.5,"loader");
		this.loader.scale.setTo(1,1)
		this.loaderbar = game.add.image(CONST_WIDTH/2-200,CONST_HEIGHT-200/1.5,"loaderbar");
		this.loaderbar.scale.setTo(0,1)
		this.loaderbar.width=0;
		this.start_icon =	game.add.image(960/1.5,926/1.5,"start_icon");
		this.start_icon.inputEnabled = true;
		this.start_icon.anchor.set(0.5);
		this.start_icon.events.onInputDown.add(this.onStartPressed, this);
		this.start_icon.alpha = 0;
		//game.stage.backgroundColor = '#fff';//入场背景
		var tweenload = game.add.tween(this.loaderbar).to({width:[0,446]},350,null);
		tweenload.start();
		if(Switch){
			tweenload.onComplete.add(this.onStartPressed_pre,this)
		}
		else{
			tweenload.onComplete.add(this.onStartPressed,this)
		}
	},
	//load加载
	onStartPressed_pre:function(){
		game.time.events.add(Phaser.Timer.SECOND * 1, function(){
			//scale.setTo(0,0)
			//starScreen.scale.setTo(0.5,0.5)
			this.loader.alpha=0;
			this.loaderbar.alpha = 0;
			//console.log(this.start_screen.alpha)
			this.start_icon.alpha = 1;
        
    }, this);
	},
	//开始游戏
	onStartPressed:function(){
		game.add.tween(this.start_icon.scale).to({x: 0.85, y: 0.85}, 140, Phaser.Easing.Cubic.Out, true, 0, 0, true);
		game.add.tween(this.start_icon).to({alpha: 0}, 1000, Phaser.Easing.Default, true, 1000);				
        //starScreen.alpha = 0;
        game.time.events.add(Phaser.Timer.SECOND * 1,function(){
        	 var startScreenT = game.add.tween(starScreen).to({alpha: 0}, 1000, Phaser.Easing.Default,);
 			startScreenT.start();
 			this.start_icon.scale.setTo(0,0)
 			this.loader.alpha=0;
			this.loaderbar.alpha = 0;
        },this)
       
	},
//	==============update=============================================================================================================================
	update:function(){

		game.physics.arcade.angleBetween(bang, target);
		target.angle=bang.angle//实质重叠
		bang.rotation = game.physics.arcade.angleBetween(bang, target);
		
       	this.xuxian2();
       	this.shexianRotate();
		this.dianliang();
		this.gameOver();
	},
	onCatoozi:function(){
		console.log("Catoozi is clicked")
	},
	dianliang:function(){
		this.Catoozi_on.events.onInputDown.add(this.sumclick,this);//sumclick
		wupin_shiguan_guang.alpha=0;
		wupin_shu_guang.alpha=0;
		wupin_guanzi_guang.alpha=0;
		wupin_pingzi_guang.alpha = 0;
		wupin_tianping_guang.alpha=0;
		//if---判断角度---------
        //``````````````````试管
		if(bang.angle<-15.7&&bang.angle>-21){
					 
			if(wupin_shiguan.x>100/1.5){
				this.Catoozi_on.alpha=1;
				this.Catoozi_off.alpha=0;	
			}else{
				this.Catoozi_on.alpha=0;
				this.Catoozi_off.alpha=1;
			}
			if(wupin_shiguan.x<870/1.5){
			wupin_shiguan_guang.scale.setTo(0,0)
			}
			wupin_shiguan_guang.alpha =1;
			
			//虚线设置
			//console.log(wupin_shiguan.x)
			if(wupin_shiguan.x>=552){
				xuxian2.alpha =0;		     
			    xuxian_shiguan.alpha=1;
			}else if(wupin_shiguan.x<552&&wupin_shiguan.x>100){
				xuxian2.alpha =0;		     
			    xuxian_shiguan.alpha=0;
			}else{
				xuxian2.alpha =1;
			}
			
			 if(shiguanClicked&&wupin_shiguan_guang.alpha>=1){
			 	shiguanClicked = false;
			 	this.Catoozi_on.events.onInputDown.add(this.shiguanMove, this);	
			 }
		}
		//-----------------------------------------------------书
		else if(bang.angle<-3.5&&bang.angle>-6.5){
			if(wupin_shu.x>100/1.5){
				this.Catoozi_on.alpha=1;
				this.Catoozi_off.alpha=0;		
			}else{
				this.Catoozi_on.alpha=0;
				this.Catoozi_off.alpha=1;
			}
			if(wupin_shu.x<1160/1.5){
			wupin_shu_guang.scale.setTo(0,0)
			}
			wupin_shu_guang.alpha=1;
			if(wupin_shu.x>100/1.5){		
				xuxian2.scale.setTo(1,1)
				
			}else{				
				wupin_shu_guang.alpha = 0;
				xuxian2.scale.setTo(1,1)
				
			}	
			
			//虚线设置
			//console.log(wupin_shu.x)
			if(wupin_shu.x>=743){
				xuxian2.alpha =0;		     
			    xuxian_shu.alpha=1;
			}else if(wupin_shu.x<743&&wupin_shu.x>100){
				xuxian2.alpha =0;		     
			    xuxian_shu.alpha=0;
			}else{
				xuxian2.alpha =1;
			}
			
			 if(shuClicked&&wupin_shu_guang.alpha>=1){
			 	shuClicked = false;
			 	this.Catoozi_on.events.onInputDown.add(this.shuMove, this);	
			}
//``````````````````````````````````````````````````````````````````````罐子
		}else if(bang.angle<3.5&&bang.angle>0.8){			
			wupin_guanzi_guang.alpha=1;
			if(wupin_guanzi.x>100/1.5){
				this.Catoozi_on.alpha=1;
				this.Catoozi_off.alpha=0;
				xuxian2.scale.setTo(1,1)
				xuxian_guanzi.alpha=1;
				xuxian2.alpha=0;
			}else{
				this.Catoozi_on.alpha=0;
				this.Catoozi_off.alpha=1;		
				xuxian2.scale.setTo(1,1)
				wupin_guanzi_guang.alpha=0; 
				xuxian2.alpha=1;
			}
			if(wupin_guanzi.x<1380/1.5){
			wupin_guanzi_guang.scale.setTo(0,0)
			}
			
			//虚线设置
			//console.log(wupin_guanzi.x)
			if(wupin_guanzi.x>=880){
				xuxian2.alpha =0;		     
			    xuxian_guanzi.alpha=1;
			}else if(wupin_guanzi.x<880&&wupin_guanzi.x>100){
				xuxian2.alpha =0;		     
			    xuxian_guanzi.alpha=0;
			}else{
				xuxian2.alpha =1;
			}
			
			if(guanziClicked){
				guanziClicked = false;
				this.Catoozi_on.events.onInputDown.add(this.guanziMove, this);
			}		
//````````````````````````````````````````````````````````````````````瓶子	
		}else if(bang.angle<7&&bang.angle>4.2){	
			wupin_pingzi_guang.alpha = 1;
			if(wupin_pingzi.x>100/1.5){
				this.Catoozi_on.alpha=1;
				this.Catoozi_off.alpha=0;
				xuxian2.scale.setTo(1,1)	
			}else{
				this.Catoozi_on.alpha=0;
				this.Catoozi_off.alpha=1;
				wupin_pingzi_guang.alpha=0;
				
			}

			if(wupin_pingzi.x<1700/1.5){
			wupin_pingzi_guang.scale.setTo(0,0)

			}	
			console.log(wupin_pingzi.x)
			if(wupin_pingzi.x>=1130){
				xuxian2.alpha=0;
				xuxian_pingzi.alpha=1;
			}else if(wupin_pingzi.x<1133&&wupin_pingzi.x>100){
				xuxian_pingzi.alpha=0;
			} else{
				xuxian2.alpha=1;
			}
			

			if(pingziClicked){
				
				pingziClicked=false;
				this.Catoozi_on.events.onInputDown.add(this.pingziMove, this);
			}
			
//````````````````````````````````````````````````````````````````````````天平	

		}else if(bang.angle<20.5&&bang.angle>12){

			wupin_tianping_guang.alpha=1;

			if(wupin_tianping.x>100/1.5){
				this.Catoozi_on.alpha=1;
				this.Catoozi_off.alpha=0;
				
			}else{
				this.Catoozi_on.alpha=0;
				this.Catoozi_off.alpha=1;
				
				wupin_tianping_guang.alpha=0;
			}	

			if(wupin_tianping.x<1100/1.5){
			wupin_tianping_guang.scale.setTo(0,0)

			}	
//			console.log(wupin_tianping.x)//733
			if(wupin_tianping.x>=730){
				xuxian2.alpha=0;
				xuxian_tianping.alpha=1;
			}else if(wupin_tianping.x<730&&wupin_tianping.x>100){
				xuxian_tianping.alpha=0;
			}else{
				xuxian2.alpha=1;
			}
			if(tianpingClicked){
				tianpingClicked=false;
				this.Catoozi_on.events.onInputDown.add(this.tianpingMove, this);
			}		
		}else{
			now =0;

			this.Catoozi_on.alpha=0;
			this.Catoozi_off.alpha=1;
			xuxian2.scale.setTo(1,1.1)		
				
//				虚线通用设置
				
			     xuxian2.alpha =1;
			    
			     xuxian_shiguan.alpha=0;
			     xuxian_shu.alpha=0;
			     xuxian_guanzi.alpha=0;
			     xuxian_pingzi.alpha=0;
			     xuxian_tianping.alpha=0;

		}
	},//panduan rukou
	
	//click==========================================================================================
	
	//-----------------------------------试管
	shiguanMove:function(){
		
		sum=0;
		if(wupin_shiguan_guang.alpha<=0){
			return;
		}else{
			sum+=30;
		}
		
		if(wupin_shiguan.x>700/1.5){
			wupin_shiguan.reset(wupin_shiguan.x-sum,wupin_shiguan.y+sum/10) 
			target.inputEnabled = false;//阻止转动
		}
		if(wupin_shiguan.x<=700/1.5&&wupin_shiguan.x>=100/1.5){	
			goodjobAudio.play();
			xuxian_shiguan.alpha=0;
//			xuxian_shiguan.destroy();//注销试管的虚线射线
		
			var tween1
			var tween2
			sum=0;
			tween1 = game.add.tween(wupin_shiguan);
			tween1.to({x:450/1.5,y:400/1.5},1000,null);
			tween1.start();//物品开始自己移动
		
			tween1.onComplete.add(tween2,this)	

			this.Catoozi_on.inputEnabled = false;//设置局限防止动画过程事件干扰	
		}//if

		if(wupin_shiguan.x>700/1.5){
		this.shexian5_shiguan()		
							
		}else{
			shexian5.alpha=0;
		}

		function tween2(){
			tween2 = game.add.tween(wupin_shiguan);
			tween2.to({alpha:0.3},300,null);
			tween2.start();
			tween2.onComplete.add(shiguanOver,this)			
			}//t2
		function shiguanOver(){
			
			wupin_shiguan.alpha=1;
			wupin_shiguan.reset(-175/1.5,190/1.5)
			shiguan_over.alpha=1;
			console.log(wupin_shu.x)
			this.Catoozi_on.inputEnabled = true;//返回可点
			target.inputEnabled = true;//返回可转
			xuxian2.alpha =1//fanhui xuxian
			shexian5.alpha = 0;
		}
	},
	//``````````````````````````````````````书
	shuMove:function(){
		xuxian_shu.destroy();
		sum =0;
		if(wupin_shu_guang.alpha<=0){
			return
		}else{	
			sum+=30//移动基数	
		}//if

		if(wupin_shu.x>750/1.5){
			wupin_shu.reset(wupin_shu.x-sum,wupin_shu.y+sum/8.5)
			target.inputEnabled = false;//开始时不能再转

		}

		console.log(wupin_shu.x ,wupin_shu.y)//1160 430
//		
		if(wupin_shu.x>750/1.5){
		this.shexian4_shu();		
		}else{
			shexian4.alpha=0;
		}

		if(wupin_shu.x<=750/1.5&&wupin_shu.x>=100/1.5){	
			goodjobAudio.play();
			var tween1
			var tween2
			sum=0;
			tween1 = game.add.tween(wupin_shu);
			tween1.to({x:450/1.5,y:500/1.5},1000,null);
			tween1.start();
			tween1.onComplete.add(tween2,this)	
			this.Catoozi_on.inputEnabled = false;//设置局限防止动画过程事件干扰	
		}//if
		function tween2(){
			tween2 = game.add.tween(wupin_shu);
			tween2.to({alpha:0.3},300,null);
			tween2.start();
			tween2.onComplete.add(shuover,this)			
			}//t2
		function shuover(){
			
			wupin_shu.alpha=1;
			//wupin_shu_guang.alpha=0;
			wupin_shu.reset(-175/1.5,660/1.5)
			shu_over.alpha=1;
			console.log(wupin_shu.x)
			this.Catoozi_on.inputEnabled = true;//返回可点
			target.inputEnabled = true;//返回可转
			xuxian2.alpha =1//fanhui xuxian
			shexian4.alpha = 0;
		}	
	},
	//罐子
	guanziMove:function(){
		
		sum=0;
		if(wupin_guanzi_guang.alpha<=0.3){		
			return
		}else{
			sum+=40;
		}//if
		if(wupin_guanzi.x>800/1.5){
			wupin_guanzi.reset(wupin_guanzi.x-sum,wupin_guanzi.y)
			target.inputEnabled = false;//开始时不能再转
		}
		if(wupin_guanzi.x>800/1.5){
			this.shexian3_guanzi();//发射
		}else{
			shexian3.alpha=0;
		}
		
		var tween1 = game.add.tween(wupin_guanzi);
		tween1.to({x:450/1.5,y:500/1.5},1000,null);
		if(wupin_guanzi.x<=800/1.5&&wupin_guanzi.x>100/1.5){
			goodjobAudio.play();
			tween1.start();
			this.Catoozi_on.inputEnabled = false;
		}
		tween1.onComplete.add(tween2,this)
		
		function tween2(){
		var tween2 = game.add.tween(wupin_guanzi);
		tween2.to({alpha:0.3},300,null);
		tween2.start();
		tween2.onComplete.add(guanziover,this)
		}	
		function guanziover(){
			wupin_guanzi.alpha=1;
			wupin_guanzi.reset(-175/1.5,360/1.5)
			guanzi_over.alpha=1;
			this.Catoozi_on.inputEnabled = true;
			target.inputEnabled = true;

			xuxian2.alpha =1//fanhui xuxian
			
			shexian3.alpha = 0;
		}
	},
	//瓶子
	pingziMove:function(){

		sum=0;
		if(wupin_pingzi_guang.alpha<=0.3){
			return
		}else{
			sum+=50;
		}//if
		if(wupin_pingzi.x>800/1.5){
			wupin_pingzi.reset(wupin_pingzi.x-sum,wupin_pingzi.y-sum/8)
			target.inputEnabled = false;
		}
//	
		if(wupin_pingzi.x>800/1.5){
			this.shexian2_pingzi();
		}else{
			shexian2.alpha=0;
		}
		
		console.log(wupin_pingzi.x,wupin_pingzi.y)
		
		var tween1 = game.add.tween(wupin_pingzi);
		tween1.to({x:450/1.5,y:510/1.5},1000,null);
		if(wupin_pingzi.x<=800/1.5&&wupin_pingzi.x>100/1.5){
			
			goodjobAudio.play();
			
			this.Catoozi_on.inputEnabled = false;
			tween1.start();
		}
		
		tween1.onComplete.add(tween2,this)
		
		function tween2(){
		var tween2 = game.add.tween(wupin_pingzi);
		tween2.to({alpha:0.3},300,null);
		tween2.start();
		tween2.onComplete.add(pingziover,this)
		}
		
		function pingziover(){
			wupin_pingzi.alpha=1;
			wupin_pingzi.reset(-95/1.5,485/1.5);
			pingzi_over.alpha=1;
			wupin_pingzi.scale.setTo(1.3)
			this.Catoozi_on.inputEnabled = true;
			target.inputEnabled = true;
			
			xuxian2.alpha =1
			shexian2.alpha = 0;
		}	
	},
	//天平
	tianpingMove:function(){
		sum=0;
		if(wupin_tianping_guang.alpha<=0.3){
			return
		}else{
			sum+=35;
		}//if
		if(wupin_tianping.x>750/1.5){
			wupin_tianping.reset(wupin_tianping.x-sum,wupin_tianping.y-sum/5)
			target.inputEnabled = false;
		}
	
		if(wupin_tianping.x>750/1.5){
			this.shexian1_tianping();
		}else{
			shexian1.alpha=0;		
		}
		
		var tween1 = game.add.tween(wupin_tianping);
		tween1.to({x:450/1.5,y:520/1.5},1000,null);
		if(wupin_tianping.x<=750/1.5&&wupin_tianping.x>100/1.5){
			
			goodjobAudio.play();
			
		this.Catoozi_on.inputEnabled = false;
		tween1.start();	
		
		}
		tween1.onComplete.add(tween2,this)
		
		function tween2(){
		var tween2 = game.add.tween(wupin_tianping);
		tween2.to({alpha:0.3},300,null);
		tween2.start();
		tween2.onComplete.add(tianpingover,this)
		}
		
		function tianpingover(){
			wupin_tianping.alpha=1;
			
			wupin_tianping.reset(-175/1.5,775/1.5)
			tianping_over.alpha=1;
			wupin_tianping.scale.setTo(0.6)
			this.Catoozi_on.inputEnabled = true;
			target.inputEnabled = true;
			xuxian2.alpha =1

			shexian1.alpha = 0;
			shexian1.destroy();	
		}
	},
	sumclick:function(){	
		clickAudio.play();
		var ct1 = game.add.tween(this.Catoozi_on.scale)
		ct1.to({x:[0.9,1.2],y:[0.9,1.2]},200,null)
		ct1.start()
		//console.log("sunmclickde")
	},
	onHelpButtonPressed:function(){
		//console.log("xuxian2,bang,target",xuxian2.angle,bang.angle,target.angle)//-3-- -6,0-4,5-8,11-15
		//help action
		clickAudio.play();
		var icon_help_tween = game.add.tween(icon_help.scale);
		icon_help_tween.to({x:[0.85,1],y:[0.85,1]},500,null);
		icon_help_tween.start();
		
		clicktag+=1;
		if(clicktag == 1){
			if((xuxian2.angle>-21&&xuxian2.angle<-15&&this.Catoozi_on.alpha==1)||(xuxian2.angle>-6&&xuxian2.angle<-3&&this.Catoozi_on.alpha==1)||(xuxian2.angle>0&&xuxian2.angle<4&&this.Catoozi_on.alpha==1)||(xuxian2.angle>5&&xuxian2.angle<8&&this.Catoozi_on.alpha==1)||(xuxian2.angle>11&&xuxian2.angle<15&&this.Catoozi_on.alpha==1)){
			//指在物体上并且能点击时
			var hand1 = game.add.sprite(this.Catoozi_on.x,this.Catoozi_on.y,"hand")
	
			var t1 = game.add.tween(hand1);
			t1.to({alpha:[1,0.95,1,0.9,1],width:[hand1.width,hand1.width+10,hand1.width,hand1.width+10,hand1.width],height:[hand1.height,hand1.height+10,hand1.height,hand1.height+10,hand1.height]},3000,null);
			t1.start();
			t1.onComplete.add(t2,this)
			function t2(){
	
				var t2 = game.add.tween(hand1);
				t2.to({alpha:0},500)
				t2.start();
			}				
	
		}else{
			//激光未射向物品
			//console.log("xuanzhuan")
			
			var hand2 = game.add.sprite(bang.x+60,bang.y,"hand")
			var t1 = game.add.tween(hand2);
			t1.to({y:[bang.y,bang.y+60,bang.y-60,bang.y+50,bang.y-50,bang.y+30]},3500,null,0);
			t1.start();
			t1.onComplete.add(t2,this)
			function t2(){
				var t2 = game.add.tween(hand2);
				t2.to({alpha:0},500)
				t2.start();
			}
		}//else 
			if(wupin_shiguan.x>850/1.5){
				
				this.wupin_shiguan_faguang();
			
			}
			if(wupin_shu.x>=1150/1.5){
				this.wupin_shu_faguang();
			}
			if(wupin_guanzi.x>=1160/1.5){
				this.wupin_guanzi_faguang();
			}
			if(wupin_pingzi.x>=1160/1.5){
				this.wupin_pingzi_faguang();
			}
			if(wupin_tianping.x>=1100/1.5){
				this.wupin_tianping_faguang();
			}
		setTimeout(function(){
			clicktag =0;
		},3000)
		}// click if
				
	},
	wupin_shiguan_faguang:function(){
		var wupin_shiguan_help_guang = game.add.sprite(864/1.5,245/1.5,'wupin_shiguan_guang')
		wupin_shiguan_help_guang.scale.setTo(0.8,0.8) 	
		var t1 = game.add.tween(wupin_shiguan_help_guang);
		t1.to({alpha:[0,1,0,1,0]},1000,null)
		t1.start();
		t1.onComplete.add(t2,this);
		function t2(){
			wupin_shiguan_help_guang.scale.setTo(0,0)
		}
		return
	},
	wupin_shu_faguang:function(){
		var wupin_shu_help_guang = game.add.sprite(1150/1.5,420/1.5,'wupin_shu_guang')
		var t2 = game.add.tween(wupin_shu_help_guang);
		t2.to({alpha:[0,1,0,1,0]},1000,null)
		t2.start();
		return
	},
	wupin_guanzi_faguang:function(){
		var wupin_guanzi_help_guang =  game.add.sprite(1370/1.5,540/1.5,'wupin_guanzi_guang')
		var t1 = game.add.tween(wupin_guanzi_help_guang);
		t1.to({alpha:[0,1,0,1,0]},1000,null)
		t1.start();
		return
	},
	wupin_pingzi_faguang:function(){
		var wupin_pingzi_help_guang = game.add.sprite(1690/1.5,640/1.5,'wupin_pingzi_guang')
		var t1 = game.add.tween(wupin_pingzi_help_guang);
		t1.to({alpha:[0,1,0,1,0]},1000,null)
		t1.start();
		return
	},
	wupin_tianping_faguang:function(){
		var wupin_tianping_help_guang = game.add.sprite(1090/1.5,740/1.5,'wupin_tianping_guang')
		var t1 = game.add.tween(wupin_tianping_help_guang);
		t1.to({alpha:[0,1,0,1,0]},1000,null)
		t1.start();
		return
	},
	
	onButtonPressed:function(sender){console.log('退出')
	
	clickAudio.play();
	
	sender.scale.set(1);
	
		var tween = game.add.tween(sender.scale).to({x: 0.85, y: 0.85}, 140, Phaser.Easing.Cubic.Out, true, 0, 0, true);
		 tween.onComplete.add(function(){

		 },this)
		
	},
	onMusicalButtonPressed:function(sender){
		
		clickAudio.play();
		
		sender.scale.set(1);
		var tween = game.add.tween(sender.scale).to({x: 0.85, y: 0.85}, 140, Phaser.Easing.Cubic.Out, true, 0, 0, true);
   		 tween.onComplete.add(function() {
        if (sender == icon_musical_on) {
            icon_musical_on.inputEnabled = false;
            icon_musical_on.alpha = 0;
            icon_musical_off.inputEnabled = true;
            icon_musical_off.alpha = 1;
            icon_musical_off.visible=true;
            is_musical_on = false;
//          icon_musical_off.y = 200
//          if (bgm.isPlaying) {
//              bgm.pause();
//          }
//          if (boo.isPlaying) {
//              boo.stop();
//          }
//          if (woo.isPlaying) {
//              woo.stop();
//          }
//          if (kirakira.isPlaying) {
//              kirakira.stop();
//          }
        } else {
            icon_musical_on.inputEnabled = true;
            icon_musical_on.alpha = 1;
            icon_musical_off.inputEnabled = false;
            icon_musical_off.alpha = 0;
            is_musical_on = true;
//          if (bgm.paused) {
//              bgm.resume();
//          } else {
//              playBgm();
//          }
        }
    }, this);
    },
	MoreButton:function(sender){
		
		clickAudio.play();
		icon_more_on
		var tween = game.add.tween(sender.scale).to({x: 0.85, y: 0.85}, 140, Phaser.Easing.Cubic.Out, true, 0, 0, true);
		
	},
	//==== xuxian rotation angle 调整
	xuxian2:function(){
	
			xuxian2.reset(bang.x,bang.y)
			xuxian_shiguan.reset(bang.x,bang.y)
			xuxian_shu.reset(bang.x,bang.y)
			xuxian_guanzi.reset(bang.x,bang.y)
			xuxian_pingzi.reset(bang.x,bang.y)
			xuxian_tianping.reset(bang.x,bang.y)

			xuxian2.rotation = game.physics.arcade.angleBetween(bang, target);
			xuxian_shiguan.rotation = game.physics.arcade.angleBetween(bang, target);
			xuxian_shu.rotation = game.physics.arcade.angleBetween(bang, target);
			xuxian_guanzi.rotation = game.physics.arcade.angleBetween(bang, target);
			xuxian_pingzi.rotation = game.physics.arcade.angleBetween(bang, target);
			xuxian_tianping.rotation = game.physics.arcade.angleBetween(bang, target);
			//xuxian2.body.setSize(20/1.5,20/1.5,200/1.5,50/1.5)
			
	},
	//=============================================================================================================射线
	
	shexianRotate:function(){
			
			shexian1.rotation = game.physics.arcade.angleBetween(bang, target);
			shexian2.rotation = game.physics.arcade.angleBetween(bang, target);
			shexian3.rotation = game.physics.arcade.angleBetween(bang, target);
			shexian4.rotation = game.physics.arcade.angleBetween(bang, target);
			shexian5.rotation = game.physics.arcade.angleBetween(bang, target);
			
	},
	//天平的发射射线
	shexian1_tianping:function(){
		shexian1.alpha =1;
		shexian1.animations.play('she1')
		
		var dians1 = game.add.tween('shexian1');
		dians1.to({width:wupin_tianping.x-120/1.5},20,null);
		dians1.start();
		xuxian2.alpha =0;
		dians1.onComplete.add(dians1over,this);
		function dians1over(){
		
		shexian1.width = wupin_tianping.x-120/1.5

		}	
	},
	shexian2_pingzi:function(){
		shexian2.alpha =1;
		shexian2.animations.play('she2')
		var dians2 = game.add.tween('shexian2');
		dians2.to({width:wupin_pingzi.x-130/1.5},20,null);
		dians2.start();
		xuxian2.alpha =0;
		dians2.onComplete.add(dians2over,this);
		function dians2over(){		
		shexian2.width = wupin_pingzi.x-130/1.5

		}	
	},
	shexian3_guanzi:function(){
		shexian3.alpha =1;
		shexian3.animations.play('she3')
		var dians3 = game.add.tween('shexian3');
		dians3.to({width:wupin_guanzi.x-140/1.5},20,null);
		dians3.start();
		xuxian2.alpha =0;
		dians3.onComplete.add(dians3over,this);
		function dians3over(){
		
		shexian3.width = wupin_guanzi.x-140/1.5

		}	
	},
	shexian4_shu:function(){
		shexian4.alpha =1;
		shexian4.animations.play('she4')
		var dians4 = game.add.tween('shexian4');
		dians4.to({width:wupin_shu.x-140/1.5},20,null);
		dians4.start();
		xuxian2.alpha =0;
		dians4.onComplete.add(dians4over,this);
		function dians4over(){
		
		shexian4.width = wupin_shu.x-140/1.5
		}	
	},
	shexian5_shiguan:function(){
		shexian5.alpha =1;
		
		shexian5.animations.play('she5')
		var dians5 = game.add.tween('shexian5');
		dians5.to({width:wupin_shiguan.x-120/1.5},20,null);
		dians5.start();
		xuxian2.alpha = 0;
		
		dians5.onComplete.add(dians5over,this);
		function dians5over(){
		
		shexian5.width = wupin_shiguan.x-120/1.5

		}	
	},

	gameOver:function(){
		//console.log(2222)
		
	if(shiguan_over.alpha>=1&&guanzi_over.alpha>=1&&shu_over.alpha>=1&&pingzi_over.alpha>=1&&tianping_over.alpha>=1){
		
		game.add.tween(baibu).to({alpha: 1}, 300, Phaser.Easing.Default, true, 2);
		game.state.start("overState")
		game.time.events.add(Phaser.Timer.SECOND*0.5,function(){
			
			clicktag =2;
		} , this);	
	}
	},
	gameoverFn:function(){
		var bounds2 = new Phaser.Rectangle(200/1.5, 340/1.5, 400/1.5, 380/1.5);
    	var graphics = game.add.graphics(bounds2.x, bounds2.y);
    	graphics.beginFill(0x000077);
    	graphics.drawRect(0, 0, bounds2.width, bounds2.height);
    	graphics.alpha=0.3
    	console.log(111)
	},
	 render:function() {
	 	
	 	if(wupin_guanzi){
	 		
	 	}
     
	}
}
//=================================================================================
game.Mystate.overState={
	preload:function(){
		
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		game.load.image("star_da","aside/image/star_da.png")
		game.load.image("star_zhong","aside/image/star_zhong.png")
		game.load.image("star_xiao","aside/image/star_xiao.png")
		game.load.image("next","aside/image/Next.png")
		game.load.image("again","aside/image/Play-again.png")
	},
	create:function(){
		console.log(123)
		game.add.sprite(0,0,'bg');
// icon
    icon_help = game.add.image(106/1.5, 981.5/1.5, 'icon_help');
    icon_help.anchor.set(0.5);
 
    icon_exit_on = game.add.image(104/1.5, 100.5/1.5, 'icon_exit_on');
    icon_exit_on.anchor.set(0.5);

    icon_musical_on = game.add.image(1814/1.5, 100.5/1.5, 'icon_musical_on');
    icon_musical_on.anchor.set(0.5);

    icon_musical_off = game.add.image(1814/1.5, 100.5/1.5, 'icon_musical_off');
    icon_musical_off.anchor.set(0.5);
    icon_more_on = game.add.image(1814/1.5, 981.5/1.5, 'icon_more_on');
    icon_more_on.anchor.set(0.5);
//CONST_WIDTH/2-160, CONST_HEIGHT/
	this.Catoozi_on =  game.add.sprite(CONST_WIDTH/2, CONST_HEIGHT-50,'Catoozi_on');
	this.Catoozi_on.anchor.setTo(0.5);
	this.Catoozi_on.scale.setTo(1.2);
	this.Catoozi_off =  game.add.sprite(CONST_WIDTH/2, CONST_HEIGHT-50,'Catoozi_off');
	this.Catoozi_off.anchor.setTo(0.5);
	this.Catoozi_off.scale.setTo(1.2);
	this.Catoozi_on.inputEnabled = true;
	
	var list = game.add.sprite(30/1.5, 170/1.5,'list');
	var wupin_shiguan_xu = game.add.sprite(84/1.5,198/1.5,'wupin_shiguan_xu');
	var wupin_guanzi_xu = game.add.sprite(70/1.5,340/1.5,'wupin_guanzi_xu');
	var wupin_pingzi_xu = game.add.sprite(80/1.5,480/1.5,'wupin_pingzi_xu');
	var wupin_shu_xu = game.add.sprite(60/1.5,635/1.5,'wupin_shu_xu');
	var wupin_tianping_xu = game.add.sprite(60/1.5,770/1.5,'wupin_tianping_xu');
	
		bang = game.add.sprite(200/1.5,CONST_HEIGHT/2,'bang');
		bang.index = 999;
		bang.anchor.setTo(0.1, 0.5);		

		shiguan_over = game.add.sprite(85/1.5,200/1.5,'shiguan_over');		
		shu_over = game.add.sprite(60/1.5,635/1.5,'shu_over');		
		guanzi_over = game.add.sprite(70/1.5,340/1.5,'guanzi_over');		
		pingzi_over = game.add.sprite(80/1.5,480/1.5,'pingzi_over');		
		tianping_over = game.add.sprite(60/1.5,770/1.5,'tianping_over');
		  
		bounds = new Phaser.Rectangle(0, 0, CONST_WIDTH, CONST_HEIGHT,380/1.5);
    	var graphics = game.add.graphics(bounds.x, bounds.y);
    	graphics.beginFill(0x000000);
    	graphics.drawRect(0, 0, bounds.width, bounds.height);
    	graphics.alpha=0.5
    	
    	clickAudio = game.add.audio("click")
    	goodjobAudio = game.add.audio("goodjob")
    	
	//再来一次	
	again = game.add.image(406/1.5,CONST_HEIGHT/2, 'again');
    again.anchor.set(0.5);
    again.inputEnabled = true;
    again.events.onInputDown.add(this.again, this);
    again.alpha=0;
    //下一个
    next = game.add.image(1400/1.5,CONST_HEIGHT/2-80/1.5,'next')
    next.alpha=0;
	//星星
	star_da = game.add.image(840/1.5, 470/1.5, 'star_da');
    star_da.anchor.set(0.5);
    star_da.alpha = 1;
    star_zhong = game.add.image(1132/1.5, 510/1.5, 'star_zhong');
    star_zhong.anchor.set(0.5);
    star_zhong.alpha = 1;
    star_xiao = game.add.image(1028/1.5, 660/1.5, 'star_xiao');
    star_xiao.anchor.set(0.5);
    star_xiao.alpha = 1;
	
    star_da.scale.set(0);
    star_zhong.scale.set(0);
    star_xiao.scale.set(0);

    star_da.angle = 30;
    star_zhong.angle = 30;
    star_xiao.angle = 30;

    star_da.reset(CONST_WIDTH / 2, 445/1.5);
    star_zhong.reset(CONST_WIDTH / 2, 445/1.5);
    star_xiao.reset(CONST_WIDTH / 2, 445/1.5);

    star_da.alpha = 1;
    star_zhong.alpha = 1;
    star_xiao.alpha = 1;
	
	 // little start
    var delay = 1000;
    game.add.tween(star_xiao).to({x: 1012/1.5, y: 688/1.5, angle: -15}, 300, Phaser.Easing.Default, true, delay, 0, false);
    game.add.tween(star_xiao.scale).to({x: 1.5, y: 1.5}, 300, Phaser.Easing.Default, true, delay, 0, false).onComplete.add(function() {
        game.add.tween(star_xiao.scale).to({x: 1, y: 1, angle: 0}, 100, Phaser.Easing.Default, true, 0, 0, false);
    }, this);

    // mid star
    delay = 1100;
    game.add.tween(star_zhong).to({x: 1156/1.5, y: 498/1.5, angle: -15}, 300, Phaser.Easing.Default, true, delay, 0, false);
    game.add.tween(star_zhong.scale).to({x: 1.2, y: 1.2}, 300, Phaser.Easing.Default, true, delay, 0, false).onComplete.add(function() {
        game.add.tween(star_zhong.scale).to({x: 1, y: 1, angle: 0}, 100, Phaser.Easing.Default, true, 0, 0, false);
    }, this);

    delay = 1200;
    // big star
    game.add.tween(star_da).to({x: 845/1.5, y: 470/1.5, angle: -15}, 300, Phaser.Easing.Default, true, delay, 0, false);
    game.add.tween(star_da.scale).to({x: 1, y: 1}, 300, Phaser.Easing.Default, true, delay, 0, false).onComplete.add(function() {   
    game.add.tween(star_da.scale).to({x: 0.8, y: 0.8, angle: 0}, 100, Phaser.Easing.Default, true, 0, 0, false).onComplete.add(
            function() {
                again.inputEnabled = true;
                again.alpha = 0;
                next.inputEnabled = true;
                next.alpha = 0;

                game.world.bringToTop(star_da);
                game.world.bringToTop(star_zhong);
                game.world.bringToTop(star_xiao);

                game.add.tween(again).to({alpha: 1}, 1000, Phaser.Easing.Default, true, 0);
                game.add.tween(next).to({alpha: 1}, 1000, Phaser.Easing.Default, true, 0);

                game.world.bringToTop(again);
                game.world.bringToTop(next);
        }, this);
    }, this);

	game.time.events.add(Phaser.Timer.SECOND * 1.5,this.starts, this);	
	},
	update:function(){
		
	},
	again:function(){
		clickAudio.play();
		var againT = game.add.tween(again.scale);
		againT.to({x:[1,0.7,1],y:[1,0.7,1]},600,null);
		againT.start();
		game.time.events.add(Phaser.Timer.SECOND * 1,function(){
			location.reload();
			game.state.start("ready");
		} , this);	
	},
	starts:function(){
		
	}
}
var again,star_xiao,star_zhong,star_da,next;
//===============================================================================
game.state.add("load",game.Mystate.load);
game.state.add("start",game.Mystate.start);
game.state.add("ready",game.Mystate.ready);
game.state.add("overState",game.Mystate.overState);
game.state.start("load");


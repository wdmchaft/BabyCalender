//
// Create main view
//
BCal.createView = function() {
	// create view
	BCal.view = Titanium.UI.createView({
		top: 0
	});

	// make title bar
    var flexSpace = Titanium.UI.createButton({
        systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
	var title = Titanium.UI.createLabel({
		text: 'あやと',
		textAlign:'center'
	});

    var toolbar = Titanium.UI.createToolbar({
        items:[flexSpace,title,flexSpace],
        top:0,
        borderTop:true,
        borderBottom:false,
        translucent:true,
        barColor:'#999',
    });

	var label = Titanium.UI.createLabel({
		text: '２歳１０ヶ月',
		textAlign:'center',
		top: 0
	});

    // make main view
    var imageView = Titanium.UI.createImageView({
		image:'images/SANY0468.JPG',
		width:150,
		height:150,
		top:40
	});

   
	BCal.view.add(toolbar);
	BCal.view.add(label);
	BCal.view.add(imageView);
	BCal.win.add(BCal.view);
};


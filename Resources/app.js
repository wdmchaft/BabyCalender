// namespace
var BCal = {};

// include helper functions
Ti.include('utils.js');

// vars
BCal.view = null;

// create window
BCal.win = Ti.UI.createWindow({
	backgroundColor:'#fff'
});

// setup view and check into current location
BCal.createView();

// open window
BCal.win.open();







/*
    Re-usable global jQuery objects
*/
var appVersion = '0.2';
var moduleVersion = {
    'App.js' : appVersion + '.0.1',
    'App.Mobile.js' : appVersion + '.0.1',
    'App.Standard.js' : appVersion + '.0.1',
    'App.Tablet.js' : appVersion + '.0.1',
    'App.Widescreen.js' : appVersion + '.0.1',
    0:0};

var App = {},
    $window = null,
    $body = null,
    $nav = null;

App.initializeGlobals = function() {
    $window = $(window);
    $body = $('body');
    $nav = $('nav');
}


/*
    Application Logic
*/

// application init
App.init = function() {
    App.initializeGlobals(); // run once
    
    // determine user's environment: mobile, tablet, desktop, widescreen
    App.State.setState();
    $window.bind('resize', function() { App.State.setState() });
    
    // dynamically load navigation
    $.ajax({
        url: _RootLocation + 'test.data/navigation.js?v=' + moduleVersion['json.navigation.js'],
        success: function(response){
            $.each(JSON.parse(response), function(index, obj){
                $nav.append('<li><a href="' + obj.url + '">' + obj.name + '</a></li>')
            });
        }
    });

}

// application state
App.State = {};
App.State.state = '';

// change state (on application init and window resize)
App.State.setState = function() {
    var width = $window.width(),
        newState = '';
    
    if ( width < 740 ){
        newState = 'Mobile';
    } else if ( width < 960 ){
        newState = 'Tablet';
    } else if ( width < 1200 ){
        newState = 'Standard';
    } else {
        newState = 'Widescreen';
    }
    
    if (App.State.state != newState) { App.State.loadState(newState); }
    
    App.State.state = newState;
    
    $body.attr('id', App.State.state);
}

// ajax calls when state changes
App.State.loadState = function(newState){
    var oldState = App.State.state;
    
    if (App[newState]) {
        App[newState].init();
    } else {
        yepnope({
            load: _RootLocation + '/js/App.' + newState + '.js?v=' + moduleVersion['App.' + newState + '.js'],
            complete: function(){
                App[newState].init();
            }
        });
    }
}
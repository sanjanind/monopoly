// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    setName = function(className, name){ 
        $('.'+className).map((e,v) => {v.textContent = name})
        window.sessionStorage.setItem(className, name);

    }

    var pl1 = window.sessionStorage.getItem("pl1") || "Sanjan";
	var pl2 = window.sessionStorage.getItem("pl2") || "Ashish";
    var pl3 = window.sessionStorage.getItem("pl3") || "Tirtha";
    var pl4 = window.sessionStorage.getItem("pl4") || "ABSniper";

    setName('pl1', pl1);
    setName('pl2', pl2);
    setName('pl3', pl3);
    setName('pl4', pl4);


    $("#pl1").keypress(function(event) {
        setName('pl1', $('#pl1').val()+event.key);        
    });
    $("#pl2").keypress(function(event) {
        setName('pl2', $('#pl2').val()+event.key);        
    });
    $("#pl3").keypress(function(event) {
        setName('pl3', $('#pl3').val()+event.key);
    });
    $("#pl4").keypress(function(event) {
        setName('pl4', $('#pl4').val()+event.key);
    });

}());
// Place any jQuery/helper plugins in here.


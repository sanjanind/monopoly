$(start);

function start() {
	$(".textbox").css("width", "60px");
	var option = null;
	var vibrate = "yes";
	var bg = window.sessionStorage.getItem("bg") || "#f9f9f9";
	var bc = window.sessionStorage.getItem("bc") || "#000000";
	var fc = window.sessionStorage.getItem("fc") || "#000000";
	console.log(bg);
	var ua = navigator.userAgent, 
    event = (ua.match(/iPad/i)) ? "touchstart" : "click";

	$('.color-element div li a')
			.click(
					function() {

						var color = $(this).attr("color-index");
						if ($(this).attr("data-index") == "bg") {
							window.sessionStorage.setItem("bg", color);
							$(".ui-panel-wrapper").css("background-color",
									color);
							bg=color;
						} else if ($(this).attr("data-index") == "fc") {
							$(".ui-panel-wrapper").css("color", color);
							window.sessionStorage.setItem("fc", color);
							fc=color;
						} else if ($(this).attr("data-index") == "bc") {
							$('.css-label.ui-btn.ui-corner-all.ui-btn-inherit.ui-radio-off')
									.css("background-color", color);
							window.sessionStorage.setItem("bc", color);
							bc=color;
						}

						if (option == "yes") {
							$('#close').trigger('click');
						}
					});

	$(".col").on("click", function() {
		option = $(this).val();
		console.log(option);
	});
	$(".col1").on("click", function() {
		vibrate = $(this).val();
		console.log(vibrate);
	});

	var add = null;
	var sub = null;
	var inputData = null;
	var undo = 0;
	
	var pla1 = window.sessionStorage.getItem("player1") || 1500;
	var pla2 = window.sessionStorage.getItem("player2") || 1500;
	var pla3 = window.sessionStorage.getItem("player3") || 1500;
	var pla4 = window.sessionStorage.getItem("player4") || 1500;
	console.log(pla1);
	console.log(window.sessionStorage.getItem("player1"));

	window.onload = function() {
		console.log("It's loaded!");
		$(".ui-panel-wrapper").css("background-color", bg);
		$(".ui-panel-wrapper").css("color", fc);
		$(".css-label.ui-btn.ui-corner-all.ui-btn-inherit").css("background", bc);
		onDeviceReady();
	};

	$("#player1").val(pla1);
	$("#player2").val(pla2);
	$("#player3").val(pla3);
	$("#player4").val(pla4);

	$(".give").on("click", function() {
		sub = $(this).val();
		console.log(sub + " give is checked!");
		$("#toadd").val("0");
		$('.radGroup1.css-label.ui-btn.ui-corner-all.ui-btn-inherit')
		.css("background-color", bc);
		$(this).parent().children(':first-child').css({
		    'background-color' : 'limeGreen'
		});
	});

	$(".take").on("click", function() {
		add = $(this).val();
		console.log(add + " take is checked!");
		$("#toadd").val("0");
		
		//$(this).parent().children()[0].css("background-color","blue");
		console.log($(this).parent().children(':first-child'));
//		console.log($(this).attr('id'));
		$('.radGroup2.css-label.ui-btn.ui-corner-all.ui-btn-inherit')
		.css("background-color", bc);
		$(this).parent().children(':first-child').css({
		    'background-color' : 'limeGreen'
		});
	});

	$("#undo").bind(event, function(){
		if (undo == 1) {
							var ok = confirm('You Cant Roll Back Undo Value.\n R u sure?');
							if (ok == true) {
							$('#' + add).val(parseInt($('#' + add).val())- parseInt(inputData));
							$('#' + sub).val(parseInt($('#' + sub).val())+ parseInt(inputData));
							$("#toadd").val("0");
							undo = 0;
							window.sessionStorage.setItem("player1", $("#player1").val());
							window.sessionStorage.setItem("player2", $("#player2").val());
							window.sessionStorage.setItem("player3", $("#player3").val());
							window.sessionStorage.setItem("player4", $("#player4").val());
						}
		};
	});

	$(".adding").bind(event, function(){
				if (add != null && sub != null) {
					console.log($(".number").text());
					console.log($('#' + add).val());
					inputData = $("div.number").text();
					$('#' + add).val(parseInt($('#' + add).val())+ parseInt(inputData));
					$('#' + sub).val(	parseInt($('#' + sub).val())- parseInt(inputData));
					$(".number").text("0");
					undo = 1;
					 var player1= $("#player1").val();
					 var player2= $("#player2").val();
					 var player3= $("#player3").val();
					 var player4= $("#player4").val();
					window.sessionStorage.setItem("player1", player1);
					window.sessionStorage.setItem("player2", player2);
					window.sessionStorage.setItem("player3", player3);
					window.sessionStorage.setItem("player4", player4);
					var points = [player1,player2,player3,player4];
					// var map = {player1 :"1st",player2 :"2nd",player3 :"3rd",player4 :"4th"};
					points.sort(function(a, b){return a-b});
					console.log(points);
					var play=points.pop();
					console.log(play);
					var play2=null;
					for(var i=1;i<5;i++){
						if(play!=play2){
							 if(play==player1){
								 document.getElementById('1st').innerHTML=i; 
							 }
							 if(play==player2){
								 document.getElementById('2nd').innerHTML=i; 
							 }
							 if(play==player3){
								 document.getElementById('3rd').innerHTML=i; 
							 }
							 if(play==player4){
								 document.getElementById('4th').innerHTML=i; 
							 }
						}
						play2=play;
						play=points.pop();
					}
				} else {
					alert('No Player Select.');
				}
			});

	$(".cal").bind(event, function(){
		console.log($(this).val());
		if ($('#toadd').val() == 0) {
			$('#toadd').val($(this).val());
		} else {
			$('#toadd').val($('#toadd').val() + $(this).val());
		}
	});


	$("#clearall").click(function() {
		var ok = confirm('You Cant Roll Back Clear Data.\n R u sure?');
		if (ok == true) {
			$(".number").text("0");
			$("#player1").val(1500);
			$("#player2").val(1500);
			$("#player3").val(1500);
			$("#player4").val(1500);
			add = sub = null;
			$('.undefine').html('0');
			$('input').removeAttr('checked');
			$('.css-label.ui-btn.ui-corner-all.ui-btn-inherit').css("background-color", bc);
			window.sessionStorage.clear();
		}
	});
	
	$("body").click(function() {
		if(vibrate=="yes"){
			console.log('vibrate');
	    navigator.vibrate(1000);
		}else{
			console.log(' not vibrate');
		}
	    });
	$("#refresh").click(function() {
		updateStatus();
	});
	 var battery = navigator.battery || navigator.webkitBattery;
	    console.log(battery);
	if (typeof battery != 'undefined'){
	    battery.addEventListener('chargingchange', updateStatus);  
	    battery.addEventListener('levelchange', updateStatus);
	}
	  function updateStatus() {  
		  console.log('Battery status: ' + battery.level * 100 + ' %');
	      if (battery.charging) {
	    	  document.getElementById('deviceProperties').innerHTML ='Battery is charging...Battery status: ' + battery.level * 100 + ' %';
	        alert('Battery is charging...');   
	      }else{
	    	  document.getElementById('deviceProperties').innerHTML ='Battery is discharging...Battery status: ' + battery.level * 100 + ' %'; 
	      }
	    }
	  
	  
	  function onDeviceReady() {
			console.log( 'device info ready ');
		    document.getElementById('DeviceInfo').innerHTML = 'Device Name: '     + device.name     + '<br />' + 
		                        'Device PhoneGap: ' + device.phonegap + '<br />' + 
		                        'Device Platform: ' + device.platform + '<br />' + 
		                        'Device UUID: '     + device.uuid     + '<br />' + 
		                        'Device Version: '  + device.version  + '<br />';
		}  
	  
	$('.ui-input-text.ui-body-inherit.ui-corner-all.ui-shadow-inset').removeAttr('class');
	
	
}

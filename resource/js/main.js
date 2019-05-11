/**
 *  Calculator functions
 */
$(function(){

    var dials = $(".dials ol li");
    var index;
    var number = $("div.number");
    var total;
    //.on("click touchstart", function(){
     var ua = navigator.userAgent, 
    event = (ua.match(/iPad/i)) ? "touchstart" : "click";
 
// $("#theElement").bind(event, function() {
//      // jquery code
// }
    dials.bind(event, function(){
        console.log('number ',number.text());
        index = dials.index(this);
        if(index == 9){
        	if(number.text().indexOf(".")==-1){
            number.append(".");
        	}
        }else if(index == 10){
            if(number.text()>0){
            number.append("0");
            }
        }else if(index == 11){
            if(number.text()>0){
            number.append("00");
            }

        }else if(index == 12){

            $(".number").text("0");

        }else if(index == 13){
            if(number.text().length==1){
            $(".number").text("0");
        }else if(number.text()>0){
            total = number.text();
            total = total.slice(0,-1);
            number.empty().append(total);
        }
        console.log('length ',number.text().length);

        }else if(index == 14){

            //add any call action here
        }else{ 
            if(number.text()==0 && number.text().indexOf(".")==-1){
                number.text("");
            }
            number.append(index+1);
            }
    });

    $(document).keydown(function(e){

        switch(e.which){

            case 96:

                number.append("0");
                break;

            case 97:

                number.append("1");
                break;

            case 98:

                number.append("2");
                break;

            case 99:

                number.append("3");
                break;

            case 100:

                number.append("4");
                break;

            case 101:

                number.append("5");
                break;

            case 102:

                number.append("6");
                break;

            case 103:

                number.append("7");
                break;

            case 104:

                number.append("8");
                break;

            case 105:

                number.append("9");
                break;

            case 8:

                total = number.text();
                total = total.slice(0,-1);
                number.empty().append(total);
                break;

            case 27:

                number.empty();
                break;

            case 106:

                number.append(".");
                break;

            case 35:

                number.append("00");
                break;

            case 13:

                $('.pad-action').click();
                break;

            default: return;
        }

        e.preventDefault();
    });
});
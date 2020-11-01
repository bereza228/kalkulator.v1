$(function(){

    $("button").click(function(){
        let action = $("select").val();
        let val1 = parseInt( $(".val1").val());
        let val2 = parseInt($(".val2").val());
        let result;

        if(action == "+"){
            result = val1 + val2;
        }
        else if(action == "-"){
            result = val1 - val2;
        }
        else if (action == "*"){
            result = val1 * val2;
        }
        else if (action == "/"){
            result = val1 / val2;
        }
        
        $(".result").html(result).val();
       
    });

});
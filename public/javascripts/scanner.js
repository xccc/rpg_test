function init() {
var dTime;


function bruter() {
	data = {}
	data.message = "start_bruting";
$.ajax({type: "POST",url: "hdds",dataType:'text',data:(data), success:function(result){
	
	$('#info').html(result);
	dTime = $('#info').text();
	
	// release();

}});

}







function scanner() {
	data = {}
	data.message = "start_scanning";
$.ajax({type: "POST",url: "tiss",data:(data), success:function(result){
	
	$('#info').html(result);
	dTime = parseInt($('#info').text());
	
	
	release();


}});

}
	
$('#scanner').click(function() {
	scanner();
})

$('#bruter').click(function() {
	bruter();
})






function release() {
	
                var $pG = $('#progressbar').progressbar();
                var pGress = setInterval(function() {
                    var pVal = $pG.progressbar('option', 'value');
                    var pCnt = !isNaN(pVal) ? (pVal + 1) : 1;
                    if (pCnt > 100) {
                        clearInterval(pGress);
                    } else {
                        $pG.progressbar({
                            value : pCnt
                        });
                       
                    }
                }, dTime*10);
               console.log(pVal);
            }








}

$(document).ready(init);

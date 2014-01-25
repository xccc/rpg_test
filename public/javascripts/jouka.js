function init() {

var dTime;


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
                        if(pVal == 99) {
							
							alert('Gratz you got new level:)');
							
							
							$('#progressbar').hide();
							
						}
                    }
                }, dTime);
               console.log(pVal);
            }
            
           

$('#scanner').click(function() {
	dTime = $('#info').text();
	release();
	
	
})




}
$(document).ready(init);


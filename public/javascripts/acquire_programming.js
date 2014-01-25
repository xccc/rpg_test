function init() {
var socket = io.connect();
var dTime;
socket.on('connect', function(data) {
	socket.emit('connected', {player: $('#player').val()});
})
socket.on('tra', function() {
	window.onload(alert('tuss'));
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
                        if(pVal == 99) {
							
							alert('Gratz you got new level:)');
							pVal = 0;
							socket.emit('update-level', {player: $('#player').val()});
						//	$('#progressbar').progressbar('value', 0);
							
							$('#progressbar').hide();
							
						}
                    }
                }, dTime*10);
               console.log(pVal);
            }
            
           

$('#programming').click(function() {
	socket.emit('new_level', {user: $('#player').val()});
	
	
})

socket.on('level', function(data) {
	
	dTime = data.time;
	release();

})



}
$(document).ready(init);


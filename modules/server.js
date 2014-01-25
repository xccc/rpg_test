exports.server_time = function() {
	var sTime = new Date();
	var full_time = '';
		full_time += sTime.getFullYear();
		full_time += sTime.getMonth();
		full_time += sTime.getDay();
		full_time += sTime.getHours();
		full_time += sTime.getMinutes();
		full_time += sTime.getSeconds();
		
	return parseInt(full_time);
}

 var sock = new SockJS('http://localhost:9999/my_prefix');
 sock.onopen = function() {
     console.log('open');
 };
 sock.onmessage = function(e) {
     console.log('message', e.data);
 };
 sock.onclose = function() {
     console.log('close');
 };
 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28125984-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

function go2banner(n){
	document.getElementById("train").style.left = (-980*n) + 'px';	
}
var n=0;
function nextSlide(){
	n++;
	if(n>2)n=3;
	go2banner(n);	
}
function prewSlide(){
	n--;
	if(n<1)n=0;
	go2banner(n);	
}
1. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi. (0.5%):
	callback er leið til að kalla á function inní öðru function 


2. Hvað er EventLoop? Úrskýrðu með eigin orðum. (0.25%):
	er tildæmis while loop  þar sem eh atburðir eiga sér stað á meðan "eventið" á sér stað


3.
	function checkUsername(e, minlength) {
	var target = e.target;
	}
	var el = document.getElementById('username');
	el.addEventListener('blur', function(e){checkUsername(e,5);}, false);



4. Event flow, Hvað þýðir false í Event Listener? (0.25%)
	elUsername.addEventListener('blur' , function() {
	checkUsername(5);
	}, false)

	false þýir að þú viljir ekki gera event capture sem byrjar yst 
	á event flow hringnum og vinnur sig niður

5.

	preventOefault() hættir við venjulega hegðun eventsins
	stopPropagation() stoppar event flow 




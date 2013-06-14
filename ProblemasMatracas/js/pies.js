$(document).ready(function() {
    		if (window.PIE) {
        		$('.contenido-texto').each(function() {
            		PIE.attach(this);
        		});
    		}		
		});
});
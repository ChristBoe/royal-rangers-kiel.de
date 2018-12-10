var detector = new MobileDetect(window.navigator.userAgent);
		if (detector.mobile() != null && localStorage.getItem('rr104webappnotremind') == null) {
            document.getElementById('webappblendout').style.display = 'block';}
        
        if(detector.mobile() != null){document.getElementById('gettowebapp').style.display = 'block';}
		
        
        document.getElementById('webappyes').onclick = function() {window.location = 'getapp.html';};
        document.getElementById('webappnotnow').onclick = function() {document.getElementById('webappblendout').style.display = 'none';};
        document.getElementById('webbappnotremind').onclick = function() {document.getElementById('webappblendout').style.display = 'none'; localStorage.setItem('rr104webappnotremind', true);};
function switchtohassee()
		{
			"use strict";
            
			document.getElementById('tablinkshassee').style.outline = 'none';
			document.getElementById('elmschenhagen').style.display = 'none';
			document.getElementById('hassee').style.display = 'block';
			document.getElementById('tablinkshassee').style.background = '#ccc';
			document.getElementById('tablinkseh').style.background = '#e0e0e0';
			document.getElementById('tablinkshassee').style.borderStyle = "inset";
			document.getElementById('tablinkseh').style.borderStyle = "none";
			document.getElementById('tablinkseh').style.cursor = "pointer";
			document.getElementById('tablinkshassee').style.cursor = "default";
            return;
			
		}

		function switchtoeh()
		{
			"use strict";
			
			document.getElementById('tablinkseh').style.outline = 'none';
			document.getElementById('hassee').style.display = 'none';
			document.getElementById('elmschenhagen').style.display = 'block';
			document.getElementById('tablinkseh').style.background = '#ccc';
			document.getElementById('tablinkshassee').style.background = '#e0e0e0';
			document.getElementById('tablinkshassee').style.borderStyle = "none";
			document.getElementById('tablinkseh').style.borderStyle = "inset";
			document.getElementById('tablinkseh').style.cursor = "default";
			document.getElementById('tablinkshassee').style.cursor = "pointer";
            return;
		}
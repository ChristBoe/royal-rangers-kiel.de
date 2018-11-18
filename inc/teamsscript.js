function arrayToCards(tableData) {
	var carddeck = $('<div class="card-deck"></div>');
	// ignore title row
	tableData.shift();  	
	$(tableData).each(function (i, rowData) {

		// prepare card
  	var card = $('<div class="card"></div>');

		// team image
		var team_image = $('<img class="card-img-top" src="' + rowData[4] + '" alt="Team Animal Foto from Wikipedia"></div>'); 
		card.append(team_image);

		// image overlay
		var image_copyright = $('<div class="card-img-overlay"><a href="' + rowData[6] + '">&copy; ' + rowData[5] + '</a></div>')
		card.append(image_copyright);

		// prepare card body
		var cardbody = $('<div class="card-body"></div>');		

		// team name
		var team_name = $('<h5 class="card-title">' + rowData[0] + '</h5>');
		cardbody.append(team_name);
		
		// team leaders
		var team_leaders = $('<p><b>Teamleiter:</b> ' + rowData[1] + '</p>');
		cardbody.append(team_leaders);

		// age class
		var age_class = $('<p><b>Altersgruppe: </b> ' + rowData[2] + '</p>');
		cardbody.append(age_class);

  	card.append(cardbody);
		carddeck.append(card);
	});
	return carddeck;
}

var result = $('<div class="container-fluid"><div>');

$.ajax({
  type: "GET",
  url: "https://raw.githubusercontent.com/RR104/royal-rangers-kiel.de/master/data/teams_and_leaders.csv",
  success: function (data) {
		$('#teams').append(result.append(arrayToCards($.csv.toArrays(data))));
  }
});

function arrayToCards(tableData) {
	var carddeck = $('<div class="card-deck"></div>');
	// ignore title row
	tableData.shift();  	
	$(tableData).each(function (i, rowData) {
  	var card = $('<div class="card"></div>');
		var cardbody = $('<div class="card-body"></div>');
  	$(rowData).each(function (j, cellData) {
    	cardbody.append($('<p class="card-text">'+cellData+'</p>'));
  	});
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

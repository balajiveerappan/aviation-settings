

var dateRange = function() {

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!

	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	var fromDate = dd + '/' + mm + '/' + yyyy;
	document.getElementById("fromDate").value = fromDate;

	var today = new Date();
	today.setDate(today.getDate() - 30);

	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!

	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	var today = dd + '/' + mm + '/' + yyyy;

	//document.getElementById("dateRange").value = fromDate+" - "+today;

	document.getElementById("dateRange").value = "10/08/2014 - 10/08/2016";

}


var drawVisualization=  function() {
	var removalATAData = []
	$.ajax({
		url : "/splashScreen",
		data:{componentType: "ATA"},
		success : function(data) {
			removalATAData = data;
			var datam = new google.visualization.DataTable();
			datam.addColumn("string", "name");
			datam.addColumn("number", "value");
			datam.addRows(removalATAData)
			var optionsm = {
				title : 'Top 10 worst performing ATAs',
				vAxis : {
					title : 'Number of removals',
					format : '#',
					titleTextStyle : {
						bold : true
					}
				},
				hAxis : {
					title : 'ATA',

					titleTextStyle : {
						bold : true
					}
				},
				titleTextStyle : {
					fontSize : 18
				},
				width : 500,
				height : 300,
				colors : [ '#673AB7' ],
				titlePosition : 'out',
				seriesType : 'bars',

				legend : {
					position : 'none'
				},
				series : {
					1 : {
						type : 'line'
					}
				}
			};
			var chart = new google.visualization.ComboChart(document
					.getElementById('piechart_div'));
			chart.draw(datam, optionsm);
			google.visualization.events.addListener(chart, 'select',
					selectHandler);

		}

	});
}
/*-----------------------------Chart2-----------------------------------------*/

var drawVisualization2 =  function() {
	// Some raw data (not necessarily accurate)
	var removalCPNSerialData = []
	$.ajax({
		url : "/splashScreen",
		data:{componentType: "CPN"},
		success : function(data) {

			removalCPNSerialData = data;

			var datam = new google.visualization.DataTable();
			datam.addColumn("string", "name");
			datam.addColumn("number", "value");
			datam.addRows(removalCPNSerialData)

			var optionsm = {
				title : 'Top 10 worst performing Serial Numbers',

				vAxis : {
					title : 'Number of removals',
					format : '#',

					titleTextStyle : {
						bold : true
					}
				},
				hAxis : {
					title : 'Company serial number',
					titleTextStyle : {
						bold : true
					}
				},
				width : 500,
				height : 300,
				colors : [ '#e0440e' ],

				seriesType : 'bars',
				legend : {
					position : 'none'
				},
				titleTextStyle : {
					fontSize : 18
				},
				series : {
					1 : {
						type : 'line'
					}
				}
			};
			var chart = new google.visualization.ComboChart(document
					.getElementById('barchart_div'));
			chart.draw(datam, optionsm);
			google.visualization.events.addListener(chart, 'select',
					selectHandler);

		}

	});

}

var drawStacked = function() {
	var removalTailData = []
	$.ajax({
		url : "/splashScreen",
		data:{componentType: "TAIL"},
		success : function(data) {
			removalTailData = data;
			var datam = new google.visualization.DataTable();
			datam.addColumn("string", "name");
			datam.addColumn("number", "value");
			datam.addRows(removalTailData)

			var optionsm = {
				title : 'Top 10 worst performing Tails',
				vAxis : {
					title : 'Number of removals',
					format : '#',
					titleTextStyle : {
						bold : true
					}
				},
				hAxis : {
					title : 'Aircraft Numbers',
					titleTextStyle : {
						bold : true
					}
				},
				width : 500,
				height : 300,
				colors : [ '#0288D1' ],
				seriesType : 'bars',

				legend : {
					position : 'none'
				},
				titleTextStyle : {
					fontSize : 18
				},
				series : {
					1 : {
						type : 'line'
					}
				}
			};
			var chart = new google.visualization.ComboChart(document
					.getElementById('piechart_divp'));
			chart.draw(datam, optionsm);
			google.visualization.events.addListener(chart, 'select',
					selectHandler);
		}
	});
}

var drawVisualizations =  function() {
	// Some raw data (not necessarily accurate)
	var removalCPNData = []
	$.ajax({
		url : "/splashScreen",
		data:{componentType: "MFG"},
		success : function(data) {
			removalCPNData = data;
			var datam = new google.visualization.DataTable();
			datam.addColumn("string", "name");
			datam.addColumn("number", "value");
			datam.addRows(removalCPNData)

			var optionsm = {
				title : 'Top 10 worst performing MPNs',
				vAxis : {
					title : 'Number of removals',
					format : '#',
					titleTextStyle : {
						bold : true
					}
				},
				hAxis : {
					title : 'MFG.Part Number',
					titleTextStyle : {
						bold : true

					}
				},

				width : 500,
				height : 300,
				colors : [ '#00796B' ],
				seriesType : 'bars',
				legend : {
					position : 'none'
				},
				titleTextStyle : {
					fontSize : 18
				},
				series : {
					1 : {
						type : 'line'
					}
				}
			};
			var chart = new google.visualization.ComboChart(document
					.getElementById('barchart_div2'));
			chart.draw(datam, optionsm);
			google.visualization.events.addListener(chart, 'select',
					selectHandler);

		}
	});

}

var selectHandler = function() {
	window.open('test.html', '_self');
}


var dtRange=[];
 function dateRange(){
 		$.ajax({
			url : "/getSplashDate",
			
			success : function(data){
			var dateRange =data.split(',');
			dtRange=dateRange;
			var tempFrom=dateRange[0].split("-");
			fromDate=tempFrom[2]+"/"+tempFrom[1]+"/"+tempFrom[0];
			var tempTo=dateRange[1].split("-");
			toDate=tempTo[2]+"/"+tempTo[1]+"/"+tempTo[0];
			document.getElementById("dateRange").value = fromDate+" - "+toDate;
			document.getElementById("fromDate").value = toDate;
			},
			
			error : function(data){
			
			}
			
		}); 
			
			
	
 
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
			google.visualization.events.addListener(chart, 'select', function(){
				var selection = chart.getSelection();
				if (selection.length) {

					var xAxisValue=datam.getValue(selection[0].row,0);
					var dType="ATA";
					navigation(xAxisValue,dType);
					//window.open('test.html', '_self');
				}
			});

		}

	});
}
/*-----------------------------Chart2-----------------------------------------*/

var drawVisualization2 =  function() {
	// Some raw data (not necessarily accurate)
	var removalCPNSerialData = []
	$.ajax({
		url : "/splashScreen",
		data:{componentType: "CSN"},
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
			google.visualization.events.addListener(chart, 'select', function(){
				var selection = chart.getSelection();
				if (selection.length) {
					var xAxisValue=datam.getValue(selection[0].row,0);
					var dType="CSN";
					navigation(xAxisValue,dType);
					
					//window.open('test.html', '_self');
				}
			});

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
			google.visualization.events.addListener(chart, 'select', function(){
				var selection = chart.getSelection();
				if (selection.length) {
					var xAxisValue=datam.getValue(selection[0].row,0);
					var dType="Tail";
					navigation(xAxisValue,dType);
					
					//window.open('test.html', '_self');
				}
			});
		}
	});
}

var drawVisualizations =  function() {
	// Some raw data (not necessarily accurate)
	var removalCPNData = []
	$.ajax({
		url : "/splashScreen",
		data:{componentType: "CPN"},
		success : function(data) {
			removalCPNData = data;
			var datam = new google.visualization.DataTable();
			datam.addColumn("string", "name");
			datam.addColumn("number", "value");
			datam.addRows(removalCPNData)

			var optionsm = {
				title : 'Top 10 worst performing CPNs',
				vAxis : {
					title : 'Number of removals',
					format : '#',
					titleTextStyle : {
						bold : true
					}
				},
				hAxis : {
					title : 'Company Part Number',
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
			google.visualization.events.addListener(chart, 'select', function(){
				var selection = chart.getSelection();
				if (selection.length) {
					var xAxisValue=datam.getValue(selection[0].row,0);
					var dType="CPN";
					navigation(xAxisValue,dType);
					
				}
			});

		}
	});

}

/*var selectHandler = function() {
	
	
	
	window.open('test.html', '_self');
}*/









/*
* navigation from splash to removal graph
*/

/*
open = function(verb, url, data, target) {
	  var form = document.createElement("form");
	  form.action = url;
	  form.method = verb;
	  form.target = target || "_self";
	  if (data) {
	    for (var key in data) {
	      var input = document.createElement("textarea");
	      input.name = key;
	      input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
	      form.appendChild(input);
	    }
	  }
	  form.style.display = 'none';
	  document.body.appendChild(form);
	  form.submit();
	};*/
function navigation(actualData,dataType){

//var fmDate=document.getElementById().value
		
				var mapForm = document.createElement("form");
				mapForm.target = "Map";
				mapForm.method = "get"; // or "post" if appropriate
				mapForm.action = "/aviation-component-ui/splashTest";
				
				var actualDataInput = document.createElement("input");
				actualDataInput.type = "text";
				actualDataInput.name = "actualData";
				actualDataInput.value = actualData;
				 	
				var dataTypeInput1 = document.createElement("input");
				dataTypeInput1.type = "text";
				dataTypeInput1.name = "dataType";
				dataTypeInput1.value = dataType;
				
			 	
				var dataTypeInput2 = document.createElement("input");
				dataTypeInput2.type = "text";
				dataTypeInput2.name = "fromDate";
				dataTypeInput2.value = dtRange[0];
				
				var dataTypeInput3 = document.createElement("input");
				dataTypeInput3.type = "text";
				dataTypeInput3.name = "toDate";
				dataTypeInput3.value = dtRange[1];
				
				
				var dataTypeInput4 = document.createElement("input");
				dataTypeInput4.type = "text";
				dataTypeInput4.name = "pageType";
				dataTypeInput4.value = "splash";
				
				
				mapForm.appendChild(actualDataInput);
				mapForm.appendChild(dataTypeInput1);
				mapForm.appendChild(dataTypeInput2);
				mapForm.appendChild(dataTypeInput3);
				mapForm.appendChild(dataTypeInput4);
				
				document.body.appendChild(mapForm);
				
				map = window.open('Map', '_self');
				mapForm.submit(); 

}



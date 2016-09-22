<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
	<title>Visualisation Google</title>
	<!-- On charge jQuery -->
	<script	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<!-- On charge le plugin JSONToTable https://github.com/jongha/jquery-jsontotable -->
	<script type="text/javascript" 	src="javascript/jquery.jsontotable.min.js">
	</script>

	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script type="text/javascript">
		google.load("visualization", "1", {packages: ["corechart"]});
		function callJSON() {
			$.getJSON(
				// L'url du web servicr
				'jdbc2json/SalesByCustomer?template=AllRecordsAsArray', 
				// La fonction qui traite les résultats
				drawChart
			).fail( // Quoi faire en cas d'erreur
				function(XMLHttpRequest, textStatus, errorThrown) {
					alert(errorThrown +": " + XMLHttpRequest.responseText);
				}
			);
		}

		function drawChart(dataArray) {
			// On met le descriptif des données
			dataArray.unshift(["Client", "Sales"]);

			var data = google.visualization.arrayToDataTable(dataArray);

			var options = {
				title: 'Sales by customer',
				is3D: true,
			};

			var chart = new google.visualization.PieChart(document.getElementById('piechart'));

			chart.draw(data, options);
		}
	</script>
</head>
<body>
	<a href='jdbc2json/SalesByCustomer?template=AllRecordsAsArray' target="_blank">Voir les données brutes</a><br>
	
	<br/>
	<button type="button" onclick="callJSON();">List all customers</button>
	<br/>
	
	<div id="piechart" style="width: 900px; height: 500px;"></div>
</body>
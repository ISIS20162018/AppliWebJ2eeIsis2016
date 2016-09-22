/**
 * 
 * Fonction d'initialisation de l'applciation et de ses packages.
 */




function drawChart(dataTable, datagiven, optionsTable, type) {

    // Create the data table.
    var data = new google.visualization.DataTable();
    
    for (var i = 0; i < dataTable.length; i++) {
        data.addColumn(dataTable[i][0], dataTable[i][1]);
    }

    for (var i = 0; i < datagiven.length; i++) {
        data.addRow([datagiven[i][0], datagiven[i][1]]);
    }

    // Set chart options
    var options = optionsTable;

    switch (type[0]) {
        case 'pie':
            var chart = new google.visualization.PieChart(document.getElementById(type[1]));
            break;
        case 'bar':
            var chart = new google.visualization.BarChart(document.getElementById(type[1]));
            break;
    }
    // Instantiate and draw our chart, passing in some options.

    chart.draw(data, options);
}
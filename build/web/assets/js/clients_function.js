
var clientsModules = function () {

    //Création du module
    var self = {};

    self.displayAllClients = function () {
        //Création d'un module de display clients
        var mod = {};
        $('#displayAllClients').click(function () {
            //paramètres ici des champs / inputs
            var data = new Array();
            $.ajax({
                url: 'jdbc2json/TousLesClients',
                data: {}
            }).success(function (response) {

                for (var i = 0; i < response.records.length; i++) {
                    //console.log(response.records[i]);
                    var code_postal = response.records[i].CODE_POSTAL;
                    //On parcourt notre tableau pour rentrer les code postaux

                    if ($.inArray(code_postal, data) == "-1") {
                        //Si il n'y a pas le CP dans le tableau
                        var tabTemporaire = [code_postal, 1];
                        data.push(tabTemporaire);
                    } else {
                        //Si elle y est
                        var index = $.inArray(code_postal, data);
                        var tabTemp = data[index];
                        //On modifie 
                        tabTemp[1] = tabTemp[1] + 1;
                        data[index] = tabTemp;

                    }

                }

                //On créé le camembert
                //Notre table : 
                var dataTable = [
                    ["string", "departement"],
                    ["number", "Nombre"]
                ];
                var type = ["pie", "chart_div"];
                drawChart(dataTable, data,
                        {'title': 'Liste des départements',
                            'width': 800,
                            'height': 600,
                            'pieHole': 0
                        },
                        type
                        );
                
                var type = ["bar", "chart_div2"];
                drawChart(dataTable, data,
                        {'title': 'Liste des départements',
                            'width': 800,
                            'height': 600,
                            'pieHole': 0.6
                        },
                        type
                        );

            });
        });


    }();
    
    
    
    

    $(document).ready(function () {
        // Load the Visualization API and the corechart package.
       

        return self;
    });


}();

/**
 * 
 * @param {type} dataTable ==> entêtes
 * @param {type} datagiven ==> les données
 * @param {type} optionsTable ==> les options : {title, width, height}
 * @param {type} type ==> array("type", "elementIdDom");
 * @returns nothing
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
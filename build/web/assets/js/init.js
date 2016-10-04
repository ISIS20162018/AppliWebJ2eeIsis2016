/**
 * 
 * Fonction d'initialisation de l'applciation et de ses packages.
 */


var connexion = function () {
    var s = {};
    s.co = function () {
        $("#connexion").click(function () {
            //Requête Ajax pour se connecter
            //Récupération des inputs
            var identifiant = $("[name=identifiant]").val();
            var password = $("[name=pass]").val();

            $.ajax({
                url: 'connexion',
                data: {
                    identifiant: identifiant,
                    password: password
                }
            }).success(function (response) {
                $('.ajaxresponse').html(response);

                var s = $('.ajaxresponse').html();
                switch (response) {
                    case 'echec':
                        $('.ajaxresponse').html('<span class="red-text">Les identifiants ne sont pas corrects</span>');
                        $('#modal1').openModal();

                        break;
                    case 'success':
                        $('.ajaxresponse').html('<span class="green-text">Les identifiants sont corrects</span>');
                        $('#modal1').openModal();

                        document.location.href = "home";
                        break;
                }
            });

        });
    }();

    return s;
};

$().ready(function () {
    connexion();
});




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
        case 'histogram':
            var chart = new google.visualization.Histogram(document.getElementById(type[1]));
            break;
        case 'columnChart':
            var chart = new google.visualization.ColumnChart(document.getElementById(type[1]));
            break;
        case 'geoChart':
            var chart = new google.visualization.GeoChart(document.getElementById(type[1]));
            break;
    }
    // Instantiate and draw our chart, passing in some options.

    chart.draw(data, options);
}

  $(document).ready(function() {
    Materialize.updateTextFields();
  });
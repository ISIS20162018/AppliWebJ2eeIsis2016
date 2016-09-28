/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var dashboard = function () {

    var self = {};

    /**
     * Fonction qui liste les dernirèes commandes sous forme d'un pieChart
     * @returns {undefined}
     */
    self.stateCommands = function (cible, button) {
        var count = 1;
        $(cible).html();
        $(button).click(function () {
            if ($(cible) != null) {
                $.ajax({
                    url: 'jdbc2json/Etat100Commandes',
                    data: {}
                }).success(function (reponse) {
                    //Notre affichage 
                    var tab = reponse.records;
                    //Notre tableau contient 2 cells : data[0] ==> Commande finies / data[1] ==> commande envoyées
                    var datag = [["Valides", 0], ["En cours", 0]];
                    for (var i = 0; i < tab.length; i++) {
                        if (tab[i].ENVOYEE_LE != null) {
                            datag[1][1] += 1;
                        } else {
                            datag[0][1] += 1;
                        }
                    }

                    //Donénes à afficher : data
                    //Construction du tableau pour le camembert
                    var dataTable = [
                        ["string", "commandes"],
                        ["number", "nombre"]
                    ];

                    var type = ["pie", cible];
                    var options = {'title': 'Etat des commandes',
                        'width': '100%',
                        'height': 'auto',
                        'pieHole': 0
                    };

                    if (count % 2 == 1) {
                        $(button).removeClass("light-green");
                        $(button).addClass("orange");
                        count++;
                        drawChart(dataTable, datag, options, type);
                    } else {
                        $(button).removeClass("orange");
                        $(button).addClass("green");
                        count++;
                        $("#" + cible).html("");
                    }

                    //On dessine


                });
            }
        });
    };

    self.lastCommands = function (cible, button) {
        var count2 = 1;
        $(button).click(function () {
            if ($(cible) != null) {
                $.ajax({
                    url: 'jdbc2json/DernieresCommandes',
                    data: {}
                }).success(function (reponse) {
                    console.log(reponse);

                    //Notre affichage 
                    var tab = reponse.records;
                    var datag = [];
                    for (var i = 0; i < tab.length; i++) {
                        var temp = [tab[i].ENVOYEE_LE, tab[i].COMMANDEPARJOUR];
                        datag.push(temp);
                    }

                    //Donénes à afficher : data
                    //Construction du tableau pour le camembert
                    var dataTable = [
                        ["string", "date"],
                        ["number", "Commandes"],
                    ];

                    var type = ["columnChart", cible];
                    var options = {'title': 'Nombre de commandes',
                        'width': '100%',
                        'height': 'auto',
                        'colors': ['green', '#00ff11'],
                        'legend': 'none'
                    };
                    console.log(count2);
                    if (count2 % 2 == 1) {
                        $(button).removeClass("light-green");
                        $(button).addClass("orange");
                        count2++;
                        drawChart(dataTable, datag, options, type);
                    } else {
                        $(button).removeClass("orange");
                        $(button).addClass("green");
                        count2++;
                        $("#" + cible).html("");
                    }
                });
            }
        });
    }

    self.distCategories = function (cible, button) {
        var count3 = 1;
        $(button).click(function () {
            if ($(cible) != null) {
                $.ajax({
                    url: 'jdbc2json/DistributionCategories',
                    data: {}
                }).success(function (reponse) {
                    console.log(reponse);

                    //Notre affichage 
                    var tab = reponse.records;
                    var datag = [];
                    for (var i = 0; i < tab.length; i++) {
                        var temp = [tab[i].LIBELLE, tab[i].NOMBREDECOMMANDES];
                        datag.push(temp);
                    }

                    //Donénes à afficher : data
                    //Construction du tableau pour le camembert
                    var dataTable = [
                        ["string", "libelle"],
                        ["number", "distribution"],
                    ];

                    var type = ["pie", cible];
                    var options = {'title': 'Distribution des categories',
                        'width': '100%',
                        'height': 'auto',
                        'pieHole': 0
                    };
                    console.log(count3);
                    if (count3 % 2 == 1) {
                        $(button).removeClass("light-green");
                        $(button).addClass("orange");
                        count3++;
                        drawChart(dataTable, datag, options, type);
                    } else {
                        $(button).removeClass("orange");
                        $(button).addClass("green");
                        count3++;
                        $("#" + cible).html("");
                    }
                });
            }
        });
    }

    self.distRevenues = function (cible, button) {
        var count4 = 1;
        $(button).click(function () {
            var dateDuJour= new Date();
            var dateDuJourMoisInterval = new Date(new Date().setMonth(dateDuJour.getMonth() - 1));
            
            alert("date du jour :" + dateDuJour + "et date autre:" + dateDuJourMoisInterval);

            if ($(cible) != null) {
                $.ajax({
                    url: 'jdbc2json/DistributionRevenus',
                    data: {
                        'dateDebut': dateDuJourMoisInterval,
                        ' dateFin': dateDuJour
                    }
                }).success(function (reponse) {
                    console.log(reponse);

                    //Notre affichage 
                    var tab = reponse.records;
                    var datag = [];
                    for (var i = 0; i < tab.length; i++) {
                        var temp = [tab[i].LIBELLE, tab[i].NOMBREDECOMMANDES];
                        datag.push(temp);
                    }

                    //Donénes à afficher : data
                    //Construction du tableau pour le camembert
                    var dataTable = [
                        ["string", "libelle"],
                        ["number", "distribution"],
                    ];

                    var type = ["pie", cible];
                    var options = {'title': 'Distribution des categories',
                        'width': '100%',
                        'height': 'auto',
                        'pieHole': 0
                    };
                    console.log(count3);
                    if (count3 % 2 == 1) {
                        $(button).removeClass("light-green");
                        $(button).addClass("orange");
                        count3++;
                        drawChart(dataTable, datag, options, type);
                    } else {
                        $(button).removeClass("orange");
                        $(button).addClass("green");
                        count3++;
                        $("#" + cible).html("");
                    }
                });
            }
        });
    }

    $(document).ready(function () {
        return [
            self.stateCommands("state_commands", "#stateCommandsButton"),
            self.lastCommands("last_commands", "#lastCommandsButton"),
            self.distCategories("dist_categories", "#distCategoriesButton"),
            self.distRevenues("revenues", "#distRevenues")
        ];
    })

}();
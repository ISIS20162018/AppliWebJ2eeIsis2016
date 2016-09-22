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
    self.lastCommands = function (cible) {
        $(cible).html();
        $("#lastCommandsButton").click(function () {
            if ($(cible) != null) {
                $.ajax({
                    url: 'jdbc2json/DernieresCommandes',
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
                    
                    //On dessine
                    drawChart(dataTable, datag, options, type);

                });
            }
        });
    };
    
    self.lastRegistered = function(cible){
        $("#lastRegisteredButton").click(function(){
           //Ici :P 
        });
    }


    $(document).ready(function () {
        return [
            self.lastCommands("last_commands"),
            self.lastRegistered("last_registered")
        ];
    })

}();
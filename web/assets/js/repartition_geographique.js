/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var repartitionGeographiqueModule = function () {

    var self = {};
    /**
     * Récupération des pays disponibles
     */

    self.putPaysOnSelect = function (elem) {
        var html = '<option value="" disabled>Choisissez les pays</option>';
        $.ajax({
            url: 'jdbc2json/RecuperationPays',
            data: {}
        }).success(function (resp) {
            for (var i = 0; i < resp.records.length; i++) {
                html += "<option value='" + resp.records[i]['PAYS_LIVRAISON'] + "'>" + resp.records[i]['PAYS_LIVRAISON'] + "</option>";
                //pays.push(resp.records[i].PAYS_LIVRAISON);
            }
            $(elem).html('');
            //console.log($(elem));
            $(elem).html(html);
            $(elem).material_select();
        });
    };
    /**
     * Recherche des paramètres au chengement du formulaire
     * @returns {undefined}
     */
    self.rechercheValueForm = function (cible) {
        $('form').change(function () {
            //Récupération de nos paramètres :
            var paysChoosen = $('form [name="pays"] option:selected');
            var type = $("[name=typeSearch]:checked").val();
            var date = $("[name=datepicker]").val();
            var dateDebut = self.instancierDate(new Date(date));
            var date2 = $("[name=datepicker2]").val();
            var dateFin = self.instancierDate(new Date(date2));
            //Création du tableau temporaire
            var datag = [];
            for (var i = 0; i < paysChoosen.length; i++) {
                var p = paysChoosen[i].value;
                var temp = [p, 0];
                datag.push(temp);
            }


            if (type != 'cmds') {
                //On est dans le cadre de clients
                //On parcourt notre tableau ^-^
                var temp = [];
                for (var i = 0; i < datag.length; i++) {
                    //On va requêter autant de fois qu'on le doit
                    $.ajax({
                        url: 'jdbc2json/nbClients',
                        data: {
                            'ddebut': dateDebut,
                            'dfin': dateFin,
                            'pays': datag[i][0]
                        },
                        success: function (resp) {
                            temp.push(resp);
                        },
                        async: false
                    });
                }

                //Temp = pays
                //En termes de données
                for (var i = 0; i < temp.length; i++) {
                    //On prend les données de temps et on les mets dans datag ;D
                    datag[i][1] = temp[i].records[0].NBCLIENT;
                }
                //DataG est rempli *O*
                var ndatag = [];
                for (var i = 0; i < datag.length; i++) {
                    ndatag.push([datag[i][0], datag[i][1]]);
                }

                var dataTable = [
                    ["string", "Pays"],
                    ["number", "Nombre de clients"]
                ];

                var type = ["geoChart", cible];

                drawChart(dataTable, ndatag, {}, type);

            } else {
                //Dans le cadre de commandes
                var temp = [];
                for (var i = 0; i < datag.length; i++) {
                    //On va requêter autant de fois qu'on le doit
                    $.ajax({
                        url: 'jdbc2json/CommandesParPays',
                        data: {
                            'ddebut': dateDebut,
                            'dfin': dateFin,
                            'pays': datag[i][0]
                        },
                        success: function (resp) {
                            temp.push(resp);
                        },
                        async: false
                    });
                }

                //Temp = pays
                //En termes de données
                for (var i = 0; i < temp.length; i++) {
                    //On prend les données de temps et on les mets dans datag ;D
                    datag[i][1] = temp[i].records[0].NBCOMMANDE;
                }
                //DataG est rempli *O*
                var ndatag = [];
                for (var i = 0; i < datag.length; i++) {
                    ndatag.push([datag[i][0], datag[i][1]]);
                }

                var dataTable = [
                    ["string", "Pays"],
                    ["number", "Nombre de commandes"]
                ];

                var type = ["geoChart", cible];

                drawChart(dataTable, ndatag, {}, type);

            }
        });
    };

    self.instancierDate = function (date) {
        var month = date.getMonth() + 1;
        var mois = (month < 10 ? "0" + month : month);
        var jour = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        var dateDuJourChiffre = date.getFullYear() + "-" + mois + "-" + jour;
        return dateDuJourChiffre;
    }

    /**
     * RETOUR DU MODULE
     */    $(document).ready(function () {
        return [
            self.putPaysOnSelect("#choosePays"),
            self.rechercheValueForm("regions_div")
        ];
    });

}();
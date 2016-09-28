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
            console.log($(elem));
            $(elem).html(html);
            $(elem).material_select();
        });
    };

    /**
     * Recherche des paramètres au chengement du formulaire
     * @returns {undefined}
     */
    self.rechercheValueForm = function () {
        $('form').change(function(){
           //Récupération de nos paramètres :
           var paysChoosen = $('form [name="pays"] option:selected');
           
           var type = $("[name=typeSearch]").val();
           
           var temps = $("[name=temps]:checked").val();
           
           var date = $("[name=datepicker]").val();
           var nd = new Date(date);
           
           
           if(type == 'on'){
               //On est dans le cadre de clients
               
           } else {
               //Dans le cadre de commandes
           }
           
        });
    };

    $(document).ready(function () {
        return [
            self.putPaysOnSelect("#choosePays"),
            self.rechercheValueForm()
        ];
    });


}();


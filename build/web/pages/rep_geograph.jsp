
<div class="row">
    <div class='col s12'>

        <div class='card'>
            <div class='card-content'>
                <div class='card-title'>Répartition géographique</div>

                <div class="card-panel grey">
                    <span class="white-text">Cette interface permet d'avoir une vue approximative avec une représentation géographique.</span>
                </div>

                <form>

                    <div class='row'>
                        <div class='col s12 l3'>
                            <div class="input-field">
                                <select id="choosePays" name='pays' multiple>
                                </select>
                                <label>Sélection des pays</label>
                            </div>
                        </div>
                        <div class='col s12 l3'>
                            <div class="input-field">
                                <!--<div class="switch">
                                    <label>
                                        Nombre de commandes
                                        <input type="checkbox" name="typeSearch">
                                        <span class="lever"></span>
                                        Nombre de clients
                                    </label>
                                </div>-->
                                <p>
                                    <input name="typeSearch" type="radio" value='cmds' id="cmds" />
                                    <label for="cmds">Nombre de commandes</label>
                                </p>
                                <p>
                                    <input name="typeSearch" type="radio" value='clients' id="clients" />
                                    <label for="clients">Nombre de clients</label>
                                </p>
                            </div>
                        </div>
                        <div class='col s12 l3'>
                            <!-- <div class="input-field">
                                 <p>
                                     <input name="temps" type="radio" value='hebdo' checked id="hebdo" />
                                     <label for="hebdo">Hebdomadaire</label>
                                 </p>
                                 <p>
                                     <input name="temps" type="radio" value='mensuel' id="mensuel" />
                                     <label for="mensuel">Mensuel</label>
                                 </p>
                                 <p>
                                     <input name="temps" type="radio" value='annuel' id="annuel"  />
                                     <label for="annuel">Annuel</label>
                                 </p>
                             </div>-->
                            <div class='input-field'>
                                <input type="date" class="datepicker" name='datepicker'>
                                <label for="datepicker">Sellectionnez une date de début</label>
                            </div>
                        </div>

                        <div class='col s12 l3'>
                            <div class='input-field'>
                                <input type="date" class="datepicker" name='datepicker2'>
                                <label for="datepicker2">Sellectionnez une date de fin</label>
                            </div>
                            <script>
                                $('.datepicker, .datepicker2').pickadate({
                                    selectMonths: true, // Creates a dropdown to control month
                                    selectYears: 50 // Creates a dropdown of 15 years to control year
                                });
                            </script>
                        </div>
                    </div>

                </form>

            </div>
        </div>
        
        <div class='card' id="displayCarte">
            <div class="card-title">Affichage de la carte</div>
            <div class='card-content'>
                <div id="regions_div" style="width: 900px; height: 500px;"></div>
            </div>
        </div>

    </div>
</div>

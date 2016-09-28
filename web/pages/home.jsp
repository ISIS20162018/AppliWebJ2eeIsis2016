<div class='card'>
    <div class='card-content'>
        <div class='card-title'>Tableau de bord - ${sessionScope.identifiant} </div>
        <div>
            <div class='row'>
                <form>
                    <div class='col s12 m6 l3'>
                        <a id="stateCommandsButton" class="waves-effect width100 waves-light light-green darken-4 btn-large">
                            <i class="material-icons left">library_books</i>Etat des commandes
                        </a>
                    </div>
                    <div class='col s12 m6 l3'>
                        <a id="lastCommandsButton" class=" waves-effect width100 waves-light light-green darken-4 btn-large">
                            <i class="material-icons left">person</i>Commandes du mois
                        </a>
                    </div>
                    <div class='col s12 m6 l3'>
                        <a id="distCategoriesButton" class="waves-effect width100 waves-light light-green darken-4 btn-large">
                            <i class="material-icons left">loyalty</i> Distribution categories
                        </a>
                    </div>
                    <div class='col s12 m6 l3 '>
                        <a id="distRevenues" class="light-green waves-effect width100 waves-light darken-4 btn-large">
                            <i class="material-icons left">shopping_cart</i> Chiffes d'affaires
                        </a>
                    </div>
                </form>
            </div>

            <div class='row'>
                <div class='col s12 l6'>
                    <div class='card'>
                        <div class='card-content'>
                            <div id="state_commands"></div>
                        </div>
                    </div>
                </div>
                <div class='col s12 l6'>
                    <div class='card'>
                        <div class='card-content'>
                            <div id="last_commands"></div>
                        </div>
                    </div>
                </div>
                <div class='col s12 l6'>
                    <div class='card'>
                        <div class='card-content'>
                            <div id="dist_categories"></div>
                        </div>
                    </div>
                </div>
                <div class='col s12 l6'>
                    <div class='card'>
                        <div class='card-content'>
                            <div id="revenues"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
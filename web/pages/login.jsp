<%-- 
    Document   : login
    Created on : 23 sept. 2016, 13:49:39
    Author     : Fabien
--%>

<div class="container">

    <div class="row">

        <div class='col s12'>

            <h2>Connectez-vous à l'application</h2>
            <span class='chip'>Compte admin : admin / admin</span>

            <div class='card'>
                <div class='card-content'>
                    <div class='card-title'>Formulaire de connexion</div>
                    <form method='post'>
                        <div class='row'>
                            <div class='col s12 m6'>
                                <div class='input-field'>
                                    <input type="text" name='identifiant'>
                                    <label for="identifiant">Identifiant</label>
                                </div>
                            </div>
                            <div class='col s12 m6'>
                                <div class='input-field'>
                                    <input type="text" name='pass'>
                                    <label for="pass">Password</label>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col s12'>
                                <button type="button" id="connexion" class='btn btn-block green width100'>Se connecter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div id="modal1" class="modal">
                <div class="modal-content">
                    <h4>Formulaire de connexion</h4>
                    <div class="ajaxresponse">
                        
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">fermer</a>
                </div>
            </div>

        </div>

    </div>

</div>

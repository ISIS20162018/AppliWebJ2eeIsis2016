<%-- 
    Document   : index
    Created on : 13 sept. 2016, 16:38:54
    Author     : Fabien
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="./assets/css/materialize.min.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script   src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
        <script src="./assets/js/materialize.min.js"></script>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <title>Notre application Javascript - Clients</title>
    </head>
    <body>

        <header>
            <nav>
                <div class="nav-wrapper green">
                    <a href="#" class="brand-logo right">Leslie & Fabien</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="#">Tableau de bord</a></li>
                        <li><a href="#">A propos</a></li>
                    </ul>
                </div>
            </nav>
        </header>



        <div id="container">

            <div class='row'>

                <div class='col s12 l9'>
                    <!-- On va essayer de lister en ajax !! -->
                    <div class='card'>
                        <div class='card-content'>
                            <div class='card-title'>Listing des clients</div>
                            <div>
                                <div class='row'><div class='col s12'><a type='button' id='displayAllClients' class='btn btn-block waves-effect orange white-text bold'>Afficher les participants</a>&nbsp;<a type='button' id='cleanClients' class='btn btn-block waves-effect red white-text bold'>Vider le tableau</a></div></div>
                                <div class='row'>
                                    <div class='col s12'>

                                        <div class='ajaxResponse'>

                                            <div id="chart_div"></div>
                                            <div id="chart_div2"></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='col s12 l3'>
                    <div class='card'>
                        <div class='card-content'>
                            <div class='card-title'>Navigation</div>
                            <div class="collection">
                                <a href="#!" class="collection-item active">Tableau de bord</a>
                                <a href="#!" class="collection-item">Répartition géographique</a>
                                <a href="#!" class="collection-item">Récapitulatif</a>
                                <a href="#!" class="collection-item">Stock & commandes</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>



        </div>

        <footer class="page-footer green">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2014 Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>

        <script src="./assets/js/clients_function.js"></script>
    </body>
</html>

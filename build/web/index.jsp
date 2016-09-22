<%-- 
    Document   : index
    Created on : 13 sept. 2016, 16:38:54
    Author     : Fabien
--%>

<%@include file="structure/header.jsp" %>
<!DOCTYPE html>

<body>


    <%@include file="structure/menu.jsp" %>


    <div id="container">

        <div class='row'>

            <div class='col s12 l9'>
                <!-- TABLEAU DE BORD -->
                <%@include file="pages/home.jsp" %>
            </div>

            <div class='col s12 l3'>
                <%@include file="structure/menu_sided.jsp" %>
            </div>

        </div>
    </div>

    <%@include file="structure/footer.jsp" %>
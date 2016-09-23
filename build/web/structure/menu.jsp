<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<header>
    <nav>
        <div class="nav-wrapper green">
            <a href="#" class="brand-logo right">Leslie & Fabien</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a href="#">Tableau de bord</a></li>
                <li><a href="#">A propos</a></li>
                    <c:if test="${!empty sessionScope.connected}">
                    <li class="red"><a href="deconnexion">Déconnexion</a></li>
                    </c:if>
            </ul>
        </div>
    </nav>
</header>
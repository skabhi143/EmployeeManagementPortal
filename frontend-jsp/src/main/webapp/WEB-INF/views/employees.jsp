<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Employee Portal (JSP)</title>
    <link rel="stylesheet" href="/resources/css/bootstrap.min.css"/>
</head>
<body>
<div class="container">
    <h1>Employee Management - JSP Example</h1>
    <table class="table table-bordered">
        <thead><tr><th>ID</th><th>Name</th><th>Dept</th></tr></thead>
        <tbody>
        <c:forEach var="e" items="${employees}">
            <tr>
                <td>${e.id}</td><td>${e.name}</td><td>${e.department}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
</body>
</html>

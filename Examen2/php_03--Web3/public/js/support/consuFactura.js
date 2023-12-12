var db = firebase.apps[0].firestore();
const tabla = document.querySelector('#tablaFact');

// Realiza la consulta a Firebase
db.collection("Orders").get().then(function (query) {
    tablaFact.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos
    var salida = "";

    query.forEach(function (doc) {
        var datos = doc.data();
        salida += '<tr>';
        salida += `<td>${datos.CustomerID}</td>`;
        salida += `<td>${datos.EmployeeID}</td>`;
        salida += `<td>${datos.Freight}</td>`;
        salida += `<td>${new Date(datos.OrderDate.seconds * 1000).toLocaleString()}</td>`;
        salida += `<td>${datos.OrderID}</td>`;
        salida += `<td>${new Date(datos.RequiredDate.seconds * 1000).toLocaleString()}</td>`;
        salida += `<td>${datos.ShipAddress}</td>`;
        salida += `<td>${datos.ShipCity}</td>`;
        salida += `<td>${datos.ShipCountry}</td>`;
        salida += `<td>${datos.ShipName}</td>`;
        salida += `<td>${new Date(datos.ShipPostalCode.seconds * 1000).toLocaleString()}</td>`;
        salida += `<td>${datos.ShipRegion}</td>`;
        salida += `<td>${datos.ShipVia}</td>`;
        salida += `<td>${new Date(datos.ShippedDate.seconds * 1000).toLocaleString()}</td>`;
        salida += '</tr>';
    });

    // Agrega los datos a la tabla
    tablaFact.innerHTML = salida;
    tabla.innerHTML = salida;
});

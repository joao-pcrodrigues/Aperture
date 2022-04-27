function update() {
    var tipo = document.getElementById("tipo");
    var tipoSel = tipo.options[tipo.selectedIndex];


    var prazo = document.getElementById("prazo").value;
    var prazoPer;

    if (prazo == 0) {
        prazoPer = 0;
    } else if (prazo == 1) {
        prazoPer = 0.05;
    } else if (prazo == 2) {
        prazoPer = 0.1;
    } else if (prazo == 3) {
        prazoPer = 0.15;
    } else {
        prazoPer = 0.2;
    };


    var sepSoma = 0;

    for (i = 0; i < document.orc.sep.length; i++) {
        if (document.orc.sep[i].checked) {
            sepSoma = sepSoma + parseInt(document.orc.sep[i].value);
        }
    };

    var a = parseInt(tipoSel.value) + parseInt(sepSoma);
    var b = 1 - prazoPer;

    document.getElementById("orcamento").value = a * b;

};


function validarOrc(orc) {

    var nome = document.orc.nomeOrc.value;

    if (nome == "") {
        alert("O campo nome não pode estar vazio");
        return false;
    }

    var apelido = document.orc.apelidoOrc.value;

    if (apelido == "") {
        alert("O campo apelido não pode estar vazio");
        return false;
    }

    var telemovel = document.orc.telOrc.value;

    if (isNaN(telemovel)) { //Executa quando os dados do telemóvel não são números
        alert("O número inserido não está correto.");
        return false;
    }

    if (telemovel.length != 9) { //Executa quando a quantidade de números não é 9
        alert("O número de telemóvel deverá conter 9 digitos.");
        return false;
    }

    if (!telemovel.startsWith(9)) { //Executa quando o telemóvel não começa por 9
        alert("Telemóvel não começa com 9.");
        return false;
    }



    var email = document.orc.emailOrc.value;

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Define a combinação de caracteres para definir o campo email

    if (!re.test(String(email).toLowerCase())) { //Executa quando o email não está no formato definido na linha anterior
        alert("Email inválido");
        return false;
    }

    alert("Obrigado pelo preenchimento do formulário de orçamento. Entraremos em contacto consigo o mais brevemente possível");
    return true;

};


function validarCon(contacto) {

    var nome = document.contacto.nomeCon.value;

    if (nome == "") {
        alert("O campo nome não pode estar vazio");
        return false;
    }

    var apelido = document.contacto.apelidoCon.value;

    if (apelido == "") {
        alert("O campo apelido não pode estar vazio");
        return false;
    }

    var telemovel = document.contacto.telCon.value;

    if (isNaN(telemovel)) { //Executa quando os dados do telemóvel não são números
        alert("O número inserido não está correto.");
        return false;
    }

    if (telemovel.length != 9) { //Executa quando a quantidade de números não é 9
        alert("O número de telemóvel deverá conter 9 digitos.");
        return false;
    }

    if (!telemovel.startsWith(9)) { //Executa quando o telemóvel não começa por 9
        alert("Telemóvel não começa com 9.");
        return false;
    }

    var email = document.contacto.emailCon.value;

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Define a combinação de caracteres para definir o campo email

    if (!re.test(String(email).toLowerCase())) { //Executa quando o email não está no formato definido na linha anterior
        alert("Email inválido");
        return false;
    }

    var data = document.contacto.dataCon.value;



    alert("Obrigado pelo preenchimento do formulário. Entraremos em contacto consigo o mais brevemente possível");
    return true;

};



/* MAPA */
var mapa;
var mostrarDirecao;
var servicoRota = new google.maps.DirectionsService();
function carregarmapa() {
    var ponto = new google.maps.LatLng(37.017335135294594, -7.971340007953829);

    var opcoes = {
        zoom: 10,
        center: ponto,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    m = new google.maps.Map(document.getElementById("mapa"), opcoes);

    var marca = new google.maps.Marker({
        position: ponto,
        map: m,
        title: "ApertureStudios"
    });

    var caixa = new google.maps.InfoWindow({
        content: "<b>ApertureStudios</b> <br/> Visite-nos!"
    });

    google.maps.event.addListener(marca, 'click', function () {
        caixa.open(m, marca);
    });
};


function calcularRota() {
    var partida = navigator.geolocation.getCurrentPosition(showPosition);
    var destino = new google.maps.LatLng(37.017335135294594, -7.971340007953829);

    var opcoes = {
        origin: partida,
        destination: destino,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    servicoRota.route(opcoes, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            mostrarDirecao.setDirections(response);
        }
    });
};




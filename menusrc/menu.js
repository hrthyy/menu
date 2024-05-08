// WIP: header, footer, zene??, appok

function filterFor(mobile) {
    if (!mobile) {return;}
    // figyelmezteto jumpscare ha desktop app
    for (i=0;i<document.querySelectorAll('.app').length;i++) {
        if (document.querySelectorAll('.app')[i].getAttribute("data-device") == "desktop") {
            document.querySelectorAll('.app')[i].removeAttribute('href');
            document.querySelectorAll('.app')[i].setAttribute('onclick','wrongDevice(this.getAttribute("data-href"));');
        }
    }
}

function closePopup() { // msg bezárás
    document.getElementById('message').setAttribute('style','display: none');
}

function nullApp() { // üres app
    var msg = document.getElementById('message');
    msg.innerHTML = '<p>Nem elérhető</p><button>Bezárás</button>'
    msg.setAttribute("style","display: block;");
    msg.setAttribute('onclick','closePopup();');
}

function wrongDevice(elem) { // touchscreen nem supportolt
    elem = "'" + elem + "'";
    var msg = document.getElementById('message');
    msg.innerHTML = '<p>Ez az alkalmazás egy másik eszközre lett tervezve</p>';
    msg.innerHTML += '<p>(Lehet, hogy használhatatlan)</p>'
    msg.innerHTML += '<button onclick="closePopup();">Hát jó</button><br>';
    msg.innerHTML += '<button onclick="startAnyway(' + String(elem) + ')"' + '>De hát ez engem nem érdekel</button>';
    msg.setAttribute("style","display: block;");
}

function startAnyway(app_href) {
    console.log(String(app_href));
    window.location.href = String(app_href)
}
console.log("--------------------------------")
console.log("Level 2")

function moveSphere() {
    document.getElementById("sphere").removeAttribute("onclick");
    document.getElementById("page").innerHTML += '<input type="text" id="txt" maxlength=21>'
    document.getElementById("page").innerHTML += '<button onclick="submitTxt();">Submit</button><p id="out"></p>'
}

function submitTxt() {
    if (document.getElementById('txt').value == "csondbe legyel fukner") {
        document.getElementById ('out').innerHTML = "/MD715NHjps";
    } else {
        document.getElementById('out').innerHTML = "rossz";
    }
}
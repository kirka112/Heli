const modal = document.getElementById('myModal');
const btn = document.getElementsByClassName("bunner-btn")[0];
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}




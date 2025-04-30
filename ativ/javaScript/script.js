function showMessage() {
    alert('Olá, esta é uma interação com JavaScript')
}
function mudarColor() {
    var text1 = document.getElementById('text').style.color;
    if (text1 === 'red') {
        console.log(text1)
        document.getElementById('text').style.color = 'blue';
    } else {
        document.getElementById('text').style.color = 'red';
    }
}
const alt2 = document.getElementById('text').textContent;
function textAltere() {
    var alt = document.getElementById('text').textContent;
    if (alt !== "Alterado") {
        document.getElementById('text').textContent = "Alterado";
    } else {
        document.getElementById('text').textContent = alt2;
    }
}
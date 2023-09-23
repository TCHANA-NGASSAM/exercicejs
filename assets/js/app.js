
//Tp1-Question1
function calculerMoyenne() {
    let dc1 = document.getElementById("dc1").value;
    let dc2 = document.getElementById("dc2").value;
    let ds = document.getElementById("ds").value;

    let moyenne = (dc1 + dc2 + ds) / 3;

    document.getElementById("moyenne").innerHTML = "La moyenne est : " + moyenne;
}
//Tp1-question2
function calculerNombreJours() {
    let mois =document.getElementById("mois").value;
    let annee =document.getElementById("annee").value;

    let nombreJours = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (annee % 4 == 0 ){
        nombreJours[1] = 29;
    }
    let resultat = "Le mois " + mois + " de l'annee " + annee + " a " + nombreJours[mois - 1] + " jours.";

    document.getElementById("resultat").innerHTML = resultat;
}
//Tp1-question3
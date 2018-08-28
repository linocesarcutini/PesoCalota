var diametroExterno, diametro, altura, raioEsferico, peso;

function Peso () {
	this.peso = (PesoRaio(this.diametroExterno) + PesoReto(this.diametroExterno)) -
				(PesoRaio(this.diametro) + PesoReto(this.diametro));
}

function PesoRaio(diametro) {
    var pesoRaio = VolumeEsferico(diametro) * 0.00000785;

    return pesoRaio;
}

function AlturaRaio(raio, diametro) {
    var alturaRaio = raio - Math.sqrt(Math.pow(raio, 2) - Math.pow(diametro / 2, 2));

    return alturaRaio;
}

function VolumeEsferico(diametro) {
    var alturaRaio = AlturaRaio(this.raioEsferico, diametro);

    var	volumeEsferico = Math.PI * Math.pow(alturaRaio, 2) * 
            (3 * this.raioEsferico - alturaRaio) / 3;

    return volumeEsferico;
}

function PesoReto(diametro) {
    var areaBase = Math.PI * Math.pow(diametro / 2, 2);
    var alturaReta = this.altura - AlturaRaio(this.raioEsferico, diametro);
    var pesoReto = (alturaReta * areaBase) * 0.00000785;

    return pesoReto;
}

function CalculoPeso() {
	this.diametroExterno = parseFloat(document.getElementById('diametroExterno').value);
	this.diametro = parseFloat(document.getElementById('diametro').value);
	this.altura = parseFloat(document.getElementById('altura').value);
    this.raioEsferico = parseFloat(document.getElementById('raioEsferico').value);

    if (Verifica()) {
        Peso();
        document.getElementById("resultado").innerHTML = "Peso: " + peso.toFixed(6) + "kg";
    } else {
        alert("Todos os campos devem ser preenchidos!");
    }
}

function Verifica() {
    if  (isNaN(this.diametro) || isNaN(this.diametroExterno) ||
        isNaN(this.altura) || isNaN(this.raioEsferico)) {
        return false;
    } else {
        return true;
        }
}
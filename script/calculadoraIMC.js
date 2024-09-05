function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    if (!height || !weight) return;

    const imc = weight / (height * height);
    let message = '';

    if (imc < 18.5) {
        message = 'Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        message = 'Você está no peso ideal.';
    } else if (imc >= 25 && imc < 29.9) {
        message = 'Você está com sobrepeso.';
    } else {
        message = 'Você está na faixa de obesidade.';
    }

    document.getElementById('result').innerText = `Seu IMC é ${imc.toFixed(2)}. ${message}`;
}
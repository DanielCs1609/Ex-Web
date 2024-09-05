function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) return;

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Sua idade é ${age} anos.`;
}
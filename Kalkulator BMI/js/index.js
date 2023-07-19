document.getElementById('submit').addEventListener('click', calculateBMI);

// Fungsi untuk menghitung kalkulator BMI
function calculateBMI() {
    let weight = document.getElementById('beratBadan').value;
    let height = (document.getElementById('tinggiBadan').value) / 100;
    let bmi = Math.round((weight / (Math.pow(height, 2))) * 100) / 100;
    document.getElementById('calculated').innerHTML = bmi;
    document.getElementById('result').innerHTML = ifHealthy(bmi);
    document.getElementById('description').innerHTML = ifIdeal(bmi);
}

// Fungsi kondisional untuk mendapatkan nilai calculated dan result
function ifHealthy(yourbmi) {
    if (yourbmi < 18.5) {
        return '<span>Kekurangan berat badan</span>'
    }
    else if (yourbmi >= 18.5 && yourbmi < 25) {
        return '<span>Normal (ideal)</span>'
    }
    else if (yourbmi >= 25 && yourbmi < 30) {
        return '<span>Kelebihan berat badan</span>'
    }
    else {
        return '<span>Kegemukan</span>'
    }
}

// Fungsi kondisional untuk mendapatkan nilai description
function ifIdeal(yourbmi) {
    if (yourbmi < 18.5) {
        return '<span>Berat badan Anda kurang</span>'
    }
    else if (yourbmi >= 18.5 && yourbmi < 25) {
        return '<span>Berat badan Anda normal (ideal)</span>'
    }
    else if (yourbmi >= 25 && yourbmi < 30) {
        return '<span>Berat badan Anda berlebih</span>'
    }
    else {
        return '<span>Anda kegemukan (kegemukan)</span>'
    }
}

//
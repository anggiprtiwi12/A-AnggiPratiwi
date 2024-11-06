// Mendapatkan elemen dengan id "chorus"
const chorusDiv = document.getElementById("chorus");

// Chorus "I'm Blue" sebanyak 6 kali
for (let i = 0; i < 6; i++) {
    // Menambahkan lirik ke elemen div
    chorusDiv.innerHTML += "Da ba dee da ba daa<br>";
}
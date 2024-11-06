// Contoh var
function contohVar() {
    var angka = 10;
    console.log("Nilai awal angka (var):", angka);
    
    if (true) {
        var angka = 20; // Mengubah nilai di dalam blok
        console.log("Nilai angka dalam blok (var):", angka);
    }
    
    console.log("Nilai angka setelah blok (var):", angka);
    alert("Nilai angka setelah blok (var): " + angka);
}

// Contoh let
function contohLet() {
    let angka = 10;
    console.log("Nilai awal angka (let):", angka);
    
    if (true) {
        let angka = 20; // Mendeklarasikan variabel baru di dalam blok
        console.log("Nilai angka dalam blok (let):", angka);
    }
    
    console.log("Nilai angka setelah blok (let):", angka);
    alert("Nilai angka setelah blok (let): " + angka);
}

// Contoh const
function contohConst() {
    const angka = 10;
    console.log("Nilai awal angka (const):", angka);
    
    // Tidak bisa mengubah nilai const, akan menghasilkan error jika tidak dikomentari
    // angka = 20;
    
    console.log("Nilai angka (const) tetap:", angka);
    alert("Nilai angka (const) tetap: " + angka);
}

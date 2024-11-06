// Fungsi untuk menampilkan data tipe
function showDataTypes() {
    let nama = "Anggi";  // String
    let umur = 20;     // Number
    let sudahLulus = true; // Boolean
    let buah = ["Apel", "Mangga", "Jeruk"]; // Array
    let angkaBesar = 12345678901234567890n; // BigInt
    let nilaiKosong = null;  // Null
    let tidakTerdefinisi;    // Undefined
    let orang = { nama: "Pratiwi", umur: 25 }; // Object
    let simbolUnik = Symbol("id"); // Symbol

    // Tampilkan data tipe di konsol dan alert
    console.log("Nama (String):", nama);
    alert("Nama: " + nama);

    console.log("Umur (Number):", umur);
    alert("Umur: " + umur);

    console.log("Sudah Lulus (Boolean):", sudahLulus);
    alert("Sudah Lulus: " + sudahLulus);

    console.log("Buah (Array):", buah);
    alert("Buah: " + buah.join(", "));

    console.log("Angka Besar (BigInt):", angkaBesar);
    alert("Angka Besar: " + angkaBesar);

    console.log("Nilai Kosong (Null):", nilaiKosong);
    alert("Nilai Kosong: " + nilaiKosong);

    console.log("Tidak Terdefinisi (Undefined):", tidakTerdefinisi);
    alert("Tidak Terdefinisi: " + tidakTerdefinisi);

    console.log("Orang (Object):", orang);
    alert("Orang: Nama - " + orang.nama + ", Umur - " + orang.umur);

    console.log("Simbol Unik (Symbol):", simbolUnik);
    alert("Simbol Unik: " + simbolUnik.toString());
}

// Fungsi untuk melakukan operasi aritmatika
function performOperations() {
    // Definisikan dua variabel angka
    let x = 15;
    let y = 4;

    // Tampilkan nilai awal
    console.log("Nilai x:", x);
    console.log("Nilai y:", y);
    alert("Nilai x: " + x + "\nNilai y: " + y);

    // Operasi Aritmatika Dasar

    // Penjumlahan
    console.log("Penjumlahan (x + y):", x + " + " + y + " = " + (x + y));
    alert("Penjumlahan: " + x + " + " + y + " = " + (x + y));

    // Pengurangan
    console.log("Pengurangan (x - y):", x + " - " + y + " = " + (x - y));
    alert("Pengurangan: " + x + " - " + y + " = " + (x - y));

    // Perkalian
    console.log("Perkalian (x * y):", x + " * " + y + " = " + (x * y));
    alert("Perkalian: " + x + " * " + y + " = " + (x * y));

    // Pembagian
    console.log("Pembagian (x / y):", x + " / " + y + " = " + (x / y));
    alert("Pembagian: " + x + " / " + y + " = " + (x / y));

    // Modulus (Sisa Bagi)
    console.log("Modulus (x % y):", x + " % " + y + " = " + (x % y));
    alert("Modulus: " + x + " % " + y + " = " + (x % y));

    // Pangkat
    console.log("Pangkat (x ** y):", x + " ** " + y + " = " + (x ** y));
    alert("Pangkat: " + x + " ** " + y + " = " + (x ** y));

    // Inkremen (Tambah 1)
    let xIncremented = x + 1;
    console.log("Inkremen (x + 1):", x + " + 1 = " + xIncremented);
    alert("Inkremen: " + x + " + 1 = " + xIncremented);

    // Dekremen (Kurang 1)
    let yDecremented = y - 1;
    console.log("Dekremen (y - 1):", y + " - 1 = " + yDecremented);
    alert("Dekremen: " + y + " - 1 = " + yDecremented);
}
function bagiDuaAngka(angka1, angka2) {
    try {
      // Memeriksa apakah kedua input berupa angka
      if (isNaN(angka1) || isNaN(angka2)) {
        const errorMessage = "Kedua input harus berupa angka.";
        console.error(errorMessage);  // Menampilkan pesan kesalahan di konsol
        throw new Error(errorMessage);  // Menampilkan pesan kesalahan di halaman
      }
      
      // Memeriksa apakah pembagian dengan nol
      if (angka2 === 0) {
        const errorMessage = "Tidak dapat membagi dengan nol.";
        console.error(errorMessage);  // Menampilkan pesan kesalahan di konsol
        throw new Error(errorMessage);  // Menampilkan pesan kesalahan di halaman
      }
      
      // Melakukan pembagian
      const hasil = angka1 / angka2;
      
      // Menampilkan hasil pembagian di halaman dan di konsol
      document.getElementById("hasil").textContent = "Hasil pembagian: " + hasil;
      console.log("Hasil pembagian: " + hasil);  // Menampilkan hasil di konsol
      
    } catch (error) {
      // Menangkap dan menampilkan pesan kesalahan di konsol
      document.getElementById("hasil").textContent = "Terjadi kesalahan: " + error.message;
      console.error("Terjadi kesalahan: " + error.message);  // Menampilkan pesan kesalahan di konsol
    }
  }
  
  function prosesPembagian() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
  
    // Panggil fungsi bagiDuaAngka dengan nilai dari input
    bagiDuaAngka(angka1, angka2);
  }

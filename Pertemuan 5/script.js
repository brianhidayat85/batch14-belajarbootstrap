let nama = prompt("Masukkan nama Anda: ");

// menggabungkan string dengan variabel menggunakan simbol "+"      => (concat / concatenation)
document.write("Selamat datang, <b>" + nama + "</b>");

// menunjuk elemen html dengan id running-text
document.getElementById('running-text').innerHTML = "<marquee>Pengumuman: Hari ini pertemuan ke-5 kelas Belajar Langkah Fundamental Untuk Menjadi Web Programmer Hacktiv8! Keep spirit!</marquee>";
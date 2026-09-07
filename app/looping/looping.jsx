// app/looping/looping.jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function LoopingSoal() {
  // --- Soal 1: For Loop Dasar (Mencetak Angka 1 sampai 5) ---
  let hasilSoal1 = [];
  for (let i = 1; i <= 5; i++) {
    hasilSoal1.push(i);
  }

  // --- Soal 2: For Loop Hitung Mundur (Countdown 5 ke 1) ---
  let hasilSoal2 = [];
  for (let i = 5; i >= 1; i--) {
    hasilSoal2.push(i);
  }

  // --- Soal 3: For Loop dengan Kondisi (Mencari Angka Genap 1-10) ---
  let hasilSoal3 = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      hasilSoal3.push(i);
    }
  }

  // --- Soal 4: While Loop (Simulasi Pengurangan Stok Barang) ---
  let stok = 3;
  let logWhile = [];
  while (stok > 0) {
    logWhile.push(`Terjual 1 item, sisa stok: ${stok}`);
    stok--;
  }

  // --- Soal 5: Do-While Loop (Percobaan Validasi PIN Minimal 1 Kali) ---
  let percobaan = 0;
  let statusLogin = "";
  do {
    percobaan++;
    statusLogin = `Percobaan ke-${percobaan}: PIN Berhasil Dimasukkan`;
  } while (percobaan < 1);

  // --- Soal 6: For...of Loop (Menampilkan Nama Siswa dari Array) ---
  let daftarSiswa = ["Andi", "Budi", "Siti"];
  let hasilForOf = [];
  for (let siswa of daftarSiswa) {
    hasilForOf.push(`Siswa: ${siswa}`);
  }

  // --- Soal 7: For...in Loop (Membaca Properti Objek Profil) ---
  let profil = { nama: "Farel", kelas: "XI", jurusan: "RPL" };
  let hasilForIn = [];
  for (let key in profil) {
    hasilForIn.push(`${key}: ${profil[key]}`);
  }

  // --- Soal 8: Array Map Method (Transformasi Harga Produk dengan Pajak 10%) ---
  let hargaDasar = [10000, 20000, 30000];
  let hargaPajak = hargaDasar.map(harga => harga * 1.1);

  // --- Soal 9: Array Filter Method (Penyaringan Nilai Tuntas >= 75) ---
  let nilaiUjian = [65, 80, 90, 55, 78];
  let nilaiTuntas = nilaiUjian.filter(nilai => nilai >= 75);

  // --- Soal 10: Nested Loop / Perulangan Bersarang (Format Koordinat Matrix) ---
  let koordinat = [];
  for (let x = 1; x <= 2; x++) {
    for (let y = 1; y <= 2; y++) {
      koordinat.push(`(${x}, ${y})`);
    }
  }

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
        Jawaban Soal 1 - 10: Perulangan (Looping)
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 1: For Loop Dasar (1-5)</Text>
        <Text>{hasilSoal1.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 2: For Loop Hitung Mundur</Text>
        <Text>{hasilSoal2.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 3: For Loop Angka Genap</Text>
        <Text>{hasilSoal3.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 4: While Loop (Stok Barang)</Text>
        {logWhile.map((log, index) => (
          <Text key={index}>- {log}</Text>
        ))}
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 5: Do-While Loop (Validasi)</Text>
        <Text>{statusLogin}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 6: For...of Loop (Array Siswa)</Text>
        <Text>{hasilForOf.join(' | ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 7: For...in Loop (Objek Profil)</Text>
        <Text>{hasilForIn.join(' | ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 8: Array .map() (Transformasi Harga)</Text>
        <Text>{hargaPajak.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 9: Array .filter() (Nilai Tuntas)</Text>
        <Text>{nilaiTuntas.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 10: Nested Loop (Koordinat Matrix)</Text>
        <Text>{koordinat.join(' , ')}</Text>
      </View>
    </ScrollView>
  );
}
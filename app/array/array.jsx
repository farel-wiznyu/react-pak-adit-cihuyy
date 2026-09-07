// app/array/array.jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function ArraySoal() {
  // --- Soal 1: Manajemen Stok Barang Gudang (Akses Indeks) ---
  const gudang = [101, 102, 103, 104, 105];
  const elemenTerakhir = gudang[4];

  // --- Soal 2: Pengurutan Nilai Hasil Ujian (.sort()) ---
  let nilaiUjian = [78, 90, 65, 88, 92, 70];
  const sortedNilai = [...nilaiUjian].sort((a, b) => a - b);

  // --- Soal 3: Antrean Pendaftaran Vaksinasi (.push & .pop) ---
  let antreanVaksin = [];
  antreanVaksin.push("Andi");
  antreanVaksin.push("Budi");
  antreanVaksin.push("Siti");
  antreanVaksin.pop(); // Menghapus elemen terakhir ("Siti")

  // --- Soal 4: Penambahan Nomor Darurat (.unshift & .shift) ---
  let darurat = ["Kebakaran", "Kecelakaan"];
  darurat.unshift("Medis Darurat"); // Menambah di awal
  darurat.shift(); // Menghapus elemen pertama

  // --- Soal 5: Penyaringan Data Laporan (.slice()) ---
  let transaksi = [1000, 2500, 3200, 4100, 5000];
  let sampelData = transaksi.slice(1, 4);

  // --- Soal 6: Peremajaan Data Menu Restoran (.splice()) ---
  let menu = ["Burger", "Pizza", "Hotdog", "Pasta"];
  menu.splice(2, 1, "Spaghetti", "Salad");

  // --- Soal 7: Konversi Kalimat Menjadi Slug URL (.split & .join) ---
  let judul = "belajar pemrograman perangkat bergerak smk";
  let slug = judul.split(" ").join("-");

  // --- Soal 8: Ekstraksi Data Siswa Berprestasi (Destructuring) ---
  let skorSiswa = [98, 85, 90, 75, 80];
  const [juaraSatu, juaraDua, juaraTiga] = skorSiswa;

  // --- Soal 9: Rekapitulasi Nilai Sisa (Rest Parameters) ---
  let semuaNilai = [95, 88, 90, 85, 78, 82];
  const [nilaiUtama, ...sisaNilai] = semuaNilai;

  // --- Soal 10: Penggabungan Modul Keranjang Belanja (Spread Operator) ---
  let keranjangA = ["Sepatu", "Baju"];
  let keranjangB = ["Tas", "Topi"];
  let keranjangUtama = [...keranjangA, ...keranjangB, "Jaket"];

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
        Jawaban Soal 1 - 10: Array & Metode Manipulasinya
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 1: Manajemen Stok Gudang</Text>
        <Text>Elemen indeks ke-4: {elemenTerakhir}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 2: Pengurutan Nilai (.sort)</Text>
        <Text>Hasil urut ascending: {sortedNilai.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 3: Antrean Vaksin (.push & .pop)</Text>
        <Text>Kondisi akhir array: {antreanVaksin.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 4: Nomor Darurat (.unshift & .shift)</Text>
        <Text>Hasil akhir array: {darurat.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 5: Penyaringan Data (.slice)</Text>
        <Text>Sampel Data: {sampelData.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 6: Menu Restoran (.splice)</Text>
        <Text>Menu baru: {menu.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 7: Slug URL (.split & .join)</Text>
        <Text>Hasil Slug: {slug}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 8: Destructuring Siswa</Text>
        <Text>Juara 1: {juaraSatu}, Juara 2: {juaraDua}, Juara 3: {juaraTiga}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 9: Rest Parameters</Text>
        <Text>Nilai Utama: {nilaiUtama}</Text>
        <Text>Sisa Nilai: {sisaNilai.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 10: Spread Operator</Text>
        <Text>Keranjang Utama: {keranjangUtama.join(', ')}</Text>
      </View>
    </ScrollView>
  );
}
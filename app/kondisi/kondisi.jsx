// app/kondisi/kondisi.jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function KondisiSoal() {
  // --- Soal 1: Evaluasi Kelulusan Ujian (If-Else Dasar) ---
  let nilaiUjian = 80;
  let statusKelulusan = "";
  if (nilaiUjian >= 75) {
    statusKelulusan = "Lulus Kompeten";
  } else {
    statusKelulusan = "Remedial";
  }

  // --- Soal 2: Diskon Bertingkat Member Toko (If-Else If-Else) ---
  let tipeMember = "Gold";
  let diskonMember = 0;
  if (tipeMember === "Gold") {
    diskonMember = 20;
  } else if (tipeMember === "Silver") {
    diskonMember = 10;
  } else {
    diskonMember = 0;
  }

  // --- Soal 3: Validasi Panjang Password (If Sederhana) ---
  let passwordInput = "smkn10joss";
  let pesanPassword = "Valid";
  if (passwordInput.length < 8) {
    pesanPassword = "Password terlalu pendek (minimal 8 karakter)";
  }

  // --- Soal 4: Status Ketersediaan Produk (Ternary Operator) ---
  let stokBarang = 5;
  let statusStok = stokBarang > 0 ? "Stok Tersedia" : "Barang Habis";

  // --- Soal 5: Penjadwalan Toko Berdasarkan Hari (Switch Case) ---
  let hariIni = "Rabu";
  let statusBuka = "";
  switch (hariIni) {
    case "Sabtu":
    case "Minggu":
      statusBuka = "Libur (Toko Tutup)";
      break;
    default:
      statusBuka = "Buka (Jam Kerja 08:00 - 17:00)";
  }

  // --- Soal 6: Validasi Form Input Kosong (Truthy / Falsy Evaluation) ---
  let emailInput = "";
  let pesanForm = "";
  if (!emailInput) {
    pesanForm = "Peringatan: Kolom email tidak boleh kosong!";
  } else {
    pesanForm = "Email valid.";
  }

  // --- Soal 7: Diskon Spesial Berdasarkan Member & Total Belanja (Nested If) ---
  let isMemberVIP = true;
  let totalBelanjaan = 150000;
  let bonusTambahan = false;
  if (isMemberVIP) {
    if (totalBelanjaan >= 100000) {
      bonusTambahan = true;
    }
  }

  // --- Soal 8: Konversi Nilai Angka ke Huruf Mutu (If-Else If Rantai) ---
  let nilaiAngka = 85;
  let hurufMutu = "";
  if (nilaiAngka >= 90) {
    hurufMutu = "A";
  } else if (nilaiAngka >= 80) {
    hurufMutu = "B";
  } else if (nilaiAngka >= 70) {
    hurufMutu = "C";
  } else {
    hurufMutu = "D";
  }

  // --- Soal 9: Hak Akses Berdasarkan Role Pengguna (If-Else) ---
  let roleUser = "Admin";
  let hakAkses = "";
  if (roleUser === "Admin") {
    hakAkses = "Full Akses (Dashboard & Pengaturan Sistem)";
  } else if (roleUser === "Guru") {
    hakAkses = "Akses Input Nilai & Absensi";
  } else {
    hakAkses = "Akses Siswa (Hanya Lihat Nilai)";
  }

  // --- Soal 10: Klasifikasi Suhu Ruangan Server (Nested Ternary Operator) ---
  let suhuServer = 28;
  let statusSuhu = suhuServer > 30 ? "Bahaya (Panas)" : suhuServer < 20 ? "Dingin" : "Normal";

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
        Jawaban Soal 1 - 10: Struktur Kondisi (If-Else, Switch, Ternary)
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 1: Evaluasi Kelulusan (If-Else)</Text>
        <Text>Nilai {nilaiUjian} -&gt; Status: {statusKelulusan}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 2: Diskon Member (Else-If)</Text>
        <Text>Member {tipeMember} -&gt; Diskon: {diskonMember}%</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 3: Validasi Password (If)</Text>
        <Text>Pesan: {pesanPassword}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 4: Stok Barang (Ternary)</Text>
        <Text>Sisa {stokBarang} item -&gt; {statusStok}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 5: Jadwal Toko (Switch-Case)</Text>
        <Text>Hari {hariIni} -&gt; {statusBuka}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 6: Validasi Input Kosong</Text>
        <Text>{pesanForm}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 7: Bonus Belanja (Nested If)</Text>
        <Text>Dapat bonus tambahan: {bonusTambahan ? "Ya" : "Tidak"}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 8: Huruf Mutu Nilai</Text>
        <Text>Nilai {nilaiAngka} -&gt; Huruf Mutu: {hurufMutu}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 9: Hak Akses Role</Text>
        <Text>Role {roleUser} -&gt; {hakAkses}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 10: Suhu Server (Nested Ternary)</Text>
        <Text>Suhu {suhuServer}°C -&gt; {statusSuhu}</Text>
      </View>
    </ScrollView>
  );
}
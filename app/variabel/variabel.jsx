// app/variabel/variabel.jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function VariabelSoal() {
  // --- Soal 1: Sistem Registrasi Akun Pengguna Baru (Variabel & String) ---
  const firstName = "Budi";
  const lastName = "Santoso";
  const isAktif = true;
  const hasil1 = `Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`;

  // --- Soal 2: Validasi Nama Pengguna (Username Trim & Length) ---
  const rawUsername = " admin_smkn10 ";
  const cleanUsername = rawUsername.trim();
  const usernameLength = cleanUsername.length;

  // --- Soal 3: Fitur Sensor Komentar Kasar (Substring & IndexOf) ---
  let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
  const indexBuruk = komentar.indexOf("buruk");
  const subKomentar = komentar.substring(0, 19);

  // --- Soal 4: Pembuatan Kode Kupon Diskon Otomatis (Concatenation & Uppercase) ---
  const string1 = "diskon";
  const string2 = "spesial50";
  const kodeKupon = string1.concat(string2).toUpperCase();

  // --- Soal 5: Konversi Tipe Data Harga Produk dari API (Number & ParseInt) ---
  const hargaStr = "150000.50";
  const hargaNum = parseFloat(hargaStr);
  const stokNum = parseInt("25", 10);
  const totalProduk = hargaNum * stokNum;

  // --- Soal 6: Kalkulator Diskon Belanja Harian (Operator Aritmatika & Assignment) ---
  let totalBelanja = 250000;
  totalBelanja -= 50000; // Diskon potongan langsung
  const pajakLayanan = totalBelanja * 0.10; // Pajak 10%
  const totalPembayaran = totalBelanja + pajakLayanan;

  // --- Soal 7: Sistem Validasi Usia Pengguna (Operator Perbandingan Standar & Strict) ---
  const inputUsia = "17";
  const syaratUsia = 17;

  // --- Soal 8: Verifikasi Keamanan Login Ganda (Operator Kondisional AND &&) ---
  const isPasswordCorrect = true;
  const isEmailVerified = true;
  const canLogin = isPasswordCorrect && isEmailVerified;

  // --- Soal 9: Pengecekan Syarat Beasiswa Sekolah (Operator Kondisional OR ||) ---
  const isNilaiTinggi = true;
  const isJuaraLomba = false;
  const dapatBeasiswa = isNilaiTinggi || isJuaraLomba;

  // --- Soal 10: Studi Kasus Blok Scope Variabel (Let vs Var) ---
  const member = true;
  let infoBlok = "";
  if (member) {
    let diskonLet = 0.2;
    var diskonVar = 0.5;
    infoBlok = `Dalam blok -> diskonVar: ${diskonVar}, diskonLet: ${diskonLet}`;
  }

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
        Jawaban Soal 1 - 10: Variabel, Tipe Data, & Operator[cite: 1]
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 1: Registrasi Akun</Text>
        <Text>{hasil1}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 2: Validasi Username</Text>
        <Text>Username bersih: "{cleanUsername}", Panjang: {usernameLength}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 3: Sensor Komentar</Text>
        <Text>Posisi "buruk": {indexBuruk}</Text>
        <Text>Potongan (0-19): "{subKomentar}"</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 4: Kode Kupon Diskon</Text>
        <Text>Hasil Kupon: {kodeKupon}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 5: Konversi Harga & Stok</Text>
        <Text>Total Harga x Stok: {totalProduk}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 6: Kalkulator Diskon & Pajak</Text>
        <Text>Total Pembayaran Akhir: {totalPembayaran}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 7: Validasi Usia</Text>
        <Text>inputUsia === syaratUsia: {inputUsia === syaratUsia ? "True" : "False"} (Beda tipe data)</Text>
        <Text>inputUsia &gt;= syaratUsia: {inputUsia >= syaratUsia ? "True" : "False"} (Type coercion)</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 8: Verifikasi Login (AND)</Text>
        <Text>Tombol Masuk Terbuka: {canLogin.toString()}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 9: Syarat Beasiswa (OR)</Text>
        <Text>Kelayakan Beasiswa: {dapatBeasiswa.toString()}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 10: Let vs Var Scope</Text>
        <Text>{infoBlok}</Text>
        <Text>Luar blok - diskonVar bisa diakses: {diskonVar}, sedangkan diskonLet error (block scope).</Text>
      </View>
    </ScrollView>
  );
}
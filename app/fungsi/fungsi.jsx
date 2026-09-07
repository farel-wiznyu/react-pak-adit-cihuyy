// app/fungsi/fungsi.jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function FungsiSoal() {
  // --- Soal 1: Fungsi Sapaan Harian Tanpa Parameter ---
  function tampilkanPesan() {
    return "Selamat Datang di Aplikasi Mobile SMK!";
  }
  const hasilPesan = tampilkanPesan();

  // --- Soal 2: Fungsi Kode Verifikasi Tetap (Return Value) ---
  function dapatkanKodeUnik() {
    return 404;
  }
  const kodeUnik = dapatkanKodeUnik();

  // --- Soal 3: Fungsi Hitung Promo Produk (Dengan Parameter) ---
  function hitungPromo(harga) {
    return harga * 2;
  }
  const hasilPromo = hitungPromo(75000);

  // --- Soal 4: Penjumlahan Subtotal Belanja (Dua Parameter) ---
  function jumlahkanBelanja(hargaBarangA, hargaBarangB) {
    return hargaBarangA + hargaBarangB;
  }
  const totalBelanja = jumlahkanBelanja(120000, 85000);

  // --- Soal 5: Default Parameter Ongkir (ES6) ---
  function hitungOngkir(jarak, tarif = 5000) {
    return jarak * tarif;
  }
  const ongkir1 = hitungOngkir(3, 7000);
  const ongkir2 = hitungOngkir(4);

  // --- Soal 6: Cek Kelulusan Ujian dengan Percabangan ---
  function cekKelulusan(nilaiUjian) {
    if (nilaiUjian >= 75) {
      return "Lulus Kompeten";
    } else {
      return "Remedial";
    }
  }
  const statusUjian = cekKelulusan(80);

  // --- Soal 7: Hitung Mundur di Dalam Perulangan Fungsi ---
  const hasilHitungMundur = [];
  function jalankanHitungMundur(batas) {
    for (var i = 0; i < batas; i++) {
      hasilHitungMundur.push(i);
    }
  }
  jalankanHitungMundur(4);

  // --- Soal 8: Anonymous Function (Luas Persegi Panjang) ---
  const hitungLuasPersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
  };
  const luasPersegi = hitungLuasPersegiPanjang(5, 6);

  // --- Soal 9: Arrow Function (Konversi IDR ke USD) ---
  const konversiIDRkeUSD = (rupiah) => {
    return rupiah / 15000;
  };
  const hasilUSD = konversiIDRkeUSD(300000);

  // --- Soal 10: Rest Parameters Nama Lengkap (ES6) ---
  const formatNamaLengkap = (...rest) => {
    let [depan, belakang] = rest;
    return `${depan} ${belakang}`;
  };
  const namaHasil = formatNamaLengkap("Siti", "Aisyah");

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
        Jawaban Soal 1 - 10: Fungsi (Function)[cite: 5]
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 1: Fungsi Sapaan Harian</Text>
        <Text>{hasilPesan}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 2: Fungsi Kode Verifikasi</Text>
        <Text>Kode Unik: {kodeUnik}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 3: Hitung Promo Produk</Text>
        <Text>Harga 75000 x 2 = {hasilPromo}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 4: Penjumlahan Subtotal Belanja</Text>
        <Text>Total 120000 + 85000 = {totalBelanja}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 5: Default Parameter Ongkir</Text>
        <Text>Skenario 1 (3, 7000): {ongkir1}</Text>
        <Text>Skenario 2 (4, default tarif): {ongkir2}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 6: Cek Kelulusan Ujian</Text>
        <Text>Nilai 80 Status: {statusUjian}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 7: Hitung Mundur (For Loop)</Text>
        <Text>Nilai i: {hasilHitungMundur.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 8: Anonymous Function</Text>
        <Text>Luas (5, 6) = {luasPersegi}</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 9: Arrow Function Konversi</Text>
        <Text>300000 IDR = ${hasilUSD} USD</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Soal 10: Rest Parameters Nama</Text>
        <Text>Nama Lengkap: {namaHasil}</Text>
      </View>
    </ScrollView>
  );
}
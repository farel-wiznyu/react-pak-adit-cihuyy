// app/komponen/komponen.jsx
import React, { useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, Pressable, Button, Modal, ActivityIndicator, FlatList, SectionList, TouchableOpacity, Switch, StyleSheet } from 'react-native';

// Sub-komponen pendukung untuk Soal 1
function UserCard({ name, status, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>Status: {status}</Text>
      </View>
    </View>
  );
}

// Sub-komponen pendukung untuk Soal 5
function MyButton({ title, onPress, variant = 'primary' }) {
  const getBgColor = () => {
    if (variant === 'success') return '#28a745'; // Hijau[cite: 6]
    if (variant === 'danger') return '#dc3545';  // Merah[cite: 6]
    return '#007bff';                            // Biru (Primary)[cite: 6]
  };
  return (
    <Pressable style={[styles.button, { backgroundColor: getBgColor() }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

// Sub-komponen pendukung untuk Soal 7
function CustomImage({ uri }) {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.imageContainer}>
      {loading && <ActivityIndicator style={styles.loader} size="small" />}
      <Image
        source={{ uri }}
        style={styles.imgBox}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

export default function KomponenSoal() {
  // State untuk berbagai interaksi komponen
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingModal, setLoadingModal] = useState(false);
  const [selectedMode, setSelectedMode] = useState('Light Mode');
  const [agreed, setAgreed] = useState(false);

  // Data dummy Soal 3 (FlatList 50 Item)[cite: 6]
  const products = Array.from({ length: 50 }, (_, index) => ({
    id: (index + 1).toString(),
    name: `Produk Kejuruan ${index + 1}`
  }));

  // Data dummy Soal 4
  const categories = ["Semua", "Pemrograman", "Jaringan", "Multimedia", "Basis Data"];
  const contents = Array.from({ length: 5 }, (_, i) => `Modul Pembelajaran Materi Ke-${i + 1}`);

  // Data dummy Soal 8 (SectionList)[cite: 6]
  const sections = [
    {
      title: "Mata Pelajaran Kejuruan",
      data: [{ name: "Pemrograman Perangkat Bergerak", score: 90 }, { name: "Basis Data", score: 85 }]
    },
    {
      title: "Mata Pelajaran Umum",
      data: [{ name: "Matematika", score: 80 }, { name: "Bahasa Inggris", score: 92 }]
    }
  ];

  const modes = ['Light Mode', 'Dark Mode', 'System Default'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Jawaban Soal 1 - 10: Komponen React Native</Text>

      {/* --- Soal 1: Profil Anggota Komunitas --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 1: Profil Anggota Komunitas</Text>
        <UserCard name="Andi Saputra" status="Aktif" imageUrl="https://via.placeholder.com/50" />
        <UserCard name="Siti Rahma" status="Alumni" imageUrl="https://via.placeholder.com/50" />
      </View>

      {/* --- Soal 2: Form Login Interaktif (Pressable) --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 2: Form Login Interaktif</Text>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} value={password} onChangeText={setPassword} />
        <Pressable 
          style={({ pressed }) => [styles.loginButton, { opacity: pressed ? 0.6 : 1 }]} 
          onPress={() => alert('Login ditekan!')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>

      {/* --- Soal 3: Katalog Produk (FlatList) --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 3: Katalog Produk (FlatList 50 Item)</Text>
        <View style={{ height: 150, borderWidth: 1, borderColor: '#ddd', borderRadius: 4 }}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={{ fontSize: 11 }}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>

      {/* --- Soal 4: ScrollView Horizontal & Vertikal --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 4: Pembelajaran Interaktif (Horizontal & Vertikal Scroll)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 6 }}>
          {categories.map((cat, index) => (
            <View key={index} style={styles.chip}>
              <Text style={styles.chipText}>{cat}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={{ height: 120, borderWidth: 1, borderColor: '#ddd', borderRadius: 4 }}>
          <ScrollView>
            {contents.map((content, index) => (
              <View key={index} style={styles.contentCard}>
                <Text style={{ fontSize: 11 }}>{content}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* --- Soal 5: Komponen Tombol Kustom Varian --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 5: Komponen Tombol Kustom Berdasarkan Varian</Text>
        <MyButton title="Tombol Primary" onPress={() => {}} variant="primary" />
        <MyButton title="Tombol Success" onPress={() => {}} variant="success" />
        <MyButton title="Tombol Danger" onPress={() => {}} variant="danger" />
      </View>

      {/* --- Soal 6: Status Indikator Koneksi (Modal) --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 6: Status Indikator Koneksi (Modal)</Text>
        <Button title="Fetch Data" onPress={() => setLoadingModal(true)} />
        <Modal visible={loadingModal} transparent={true} animationType="fade">
          <View style={styles.modalBg}>
            <View style={styles.modalBox}>
              <ActivityIndicator size="large" color="#007bff" />
              <Text style={{ marginTop: 8, fontSize: 12 }}>Memuat data...</Text>
            </View>
          </View>
        </Modal>
      </View>

      {/* --- Soal 7: Layout Galeri Foto --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 7: Layout Galeri Foto</Text>
        <CustomImage uri="https://picsum.photos/100/100" />
      </View>

      {/* --- Soal 8: Dashboard Nilai Siswa (SectionList) --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 8: Dashboard Nilai Siswa (SectionList)</Text>
        <View style={{ height: 150, borderWidth: 1, borderColor: '#ddd', borderRadius: 4 }}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={{ fontSize: 11 }}>{item.name} - Nilai: {item.score}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>
      </View>

      {/* --- Soal 9: Pilihan Kategori Kustom --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 9: Pilihan Kategori Kustom dengan Umpan Balik Visual</Text>
        {modes.map((mode, index) => {
          const isActive = selectedMode === mode;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.option, { backgroundColor: isActive ? '#007bff' : '#f1f1f1' }]}
              onPress={() => setSelectedMode(mode)}
            >
              <Text style={{ color: isActive ? '#fff' : '#000', fontSize: 11 }}>{mode}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* --- Soal 10: Kebijakan Privasi (Switch) --- */}
      <View style={styles.section}>
        <Text style={styles.title}>Soal 10: Pengaturan Kebijakan Privasi</Text>
        <View style={styles.row}>
          <Text style={{ fontSize: 11 }}>Setuju Syarat & Ketentuan</Text>
          <Switch value={agreed} onValueChange={setAgreed} />
        </View>
        <Button
          title="Submit Pendaftaran"
          disabled={!agreed}
          onPress={() => alert('Berhasil mendaftar!')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  mainTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  section: { marginBottom: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontWeight: 'bold', fontSize: 13, marginBottom: 8, color: '#333' },
  card: { flexDirection: 'row', padding: 8, backgroundColor: '#f9f9f9', marginBottom: 6, borderRadius: 6, alignItems: 'center', borderWidth: 1, borderColor: '#ddd' },
  image: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontWeight: 'bold', fontSize: 12 },
  status: { color: '#666', fontSize: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 6, marginBottom: 6, borderRadius: 4, backgroundColor: '#fff', fontSize: 11 },
  loginButton: { backgroundColor: '#007AFF', padding: 8, borderRadius: 4, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 11 },
  listItem: { padding: 6, borderBottomWidth: 1, borderBottomColor: '#eee', backgroundColor: '#fff' },
  chip: { backgroundColor: '#e0e0e0', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginRight: 6, height: 26, justifyContent: 'center' },
  chipText: { fontSize: 10, fontWeight: '600' },
  contentCard: { padding: 6, backgroundColor: '#f9f9f9', marginBottom: 4, borderRadius: 4 },
  button: { padding: 8, borderRadius: 4, alignItems: 'center', marginBottom: 4 },
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: '#fff', padding: 16, borderRadius: 8, alignItems: 'center' },
  imageContainer: { width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 4, backgroundColor: '#eee' },
  imgBox: { width: '100%', height: '100%', borderRadius: 4 },
  loader: { position: 'absolute', zIndex: 1 },
  sectionHeader: { fontSize: 11, fontWeight: 'bold', backgroundColor: '#e9ecef', padding: 4, color: '#333' },
  option: { padding: 6, borderRadius: 4, marginBottom: 4, borderWidth: 1, borderColor: '#ddd' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }
});
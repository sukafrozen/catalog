import {
  champ500,
  champ250,
  champ1kg,
  sosisgeboy1kg,
  sosissedap1kg,
  sosisChamp1kg,
  kentangFiesta1kg,
  kentangAviko1kg,
} from "../assets/images";

export const categoryProduct = [
  { id: 1, nama: "nugget", class: ".nugget" },
  { id: 2, nama: "sosis", class: ".sosis" },
  { id: 3, nama: "kentang", class: ".kentang" },
];

export const daftarProduct = [
  {
    id: 1,
    kategori: "nugget",
    nama: "Chiken Nugget 250g",
    imgURL: champ250,
    harga: "Rp15.000",
    hargaFix: 15000,
    key: "champ250",
    merk: "CHAMP",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Nugget",
    masaPenyimpanan: "12 Bulan",
    berat: "250GR",
    stok: 150,
  },
  {
    id: 2,
    kategori: "nugget",
    nama: "Chiken Nugget 500g",
    imgURL: champ500,
    harga: "Rp25.000",
    hargaFix: 25000,
    key: "champ500",
    merk: "CHAMP",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Nugget",
    masaPenyimpanan: "12 Bulan",
    berat: "500GR",
    stok: 92,
  },
  {
    id: 3,
    kategori: "nugget",
    nama: "Chiken Nugget 1KG",
    imgURL: champ1kg,
    harga: "Rp45.000",
    hargaFix: 45000,
    key: "champ1kg",
    merk: "CHAMP",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Nugget",
    masaPenyimpanan: "12 Bulan",
    berat: "1000GR",
    stok: 80,
  },

  // Sosis
  {
    id: 4,
    kategori: "sosis",
    nama: "sosis 1KG",
    imgURL: sosisgeboy1kg,
    harga: "Rp38.000",
    hargaFix: 38000,
    key: "sosisgeboy1kg",
    merk: "GEBOY",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Sosis",
    masaPenyimpanan: "12 Bulan",
    berat: "1000GR",
    stok: 80,
  },
  {
    id: 5,
    kategori: "sosis",
    nama: "sosis 1KG",
    imgURL: sosissedap1kg,
    harga: "Rp42.000",
    hargaFix: 42000,
    key: "sosissedap1kg",
    merk: "So Good",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Sosis",
    masaPenyimpanan: "12 Bulan",
    berat: "1000GR",
    stok: 40,
  },
  {
    id: 6,
    kategori: "sosis",
    nama: "sosis 1KG",
    imgURL: sosisChamp1kg,
    harga: "Rp45.000",
    hargaFix: 45000,
    key: "sosisChamp1kg",
    merk: "CHAMP",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Sosis",
    masaPenyimpanan: "12 Bulan",
    berat: "1000GR",
    stok: 50,
  },

  // kentang
  {
    id: 7,
    kategori: "lainnya",
    nama: "kentang 1KG",
    imgURL: kentangFiesta1kg,
    harga: "Rp65.000",
    hargaFix: 65000,
    key: "kentangfiesta1kg",
    merk: "FIESTA",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Kentang",
    masaPenyimpanan: "12 Bulan",
    berat: "1000GR",
    stok: 30,
  },

  {
    id: 8,
    kategori: "lainnya",
    nama: "kentang 1KG",
    imgURL: kentangAviko1kg,
    harga: "Rp55.000",
    hargaFix: 55000,
    key: "kentangaviko1kg",
    merk: "AVIKO",
    kondisi: " Beku (-15°C - 0°C)",
    jenis: "Kentang",
    masaPenyimpanan: "12 Bulan",
    berat: "1000GR",
    stok: 0,
  },
];

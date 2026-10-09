# Issue: Setup Project Backend (Bun + ElysiaJS + Drizzle ORM + MySQL)

## 1. Overview
Inisialisasi dan konfigurasi dasar project backend modern berbasis TypeScript menggunakan runtime **Bun**, framework web **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**. Dokumen ini berfungsi sebagai panduan implementasi tingkat tinggi (high-level) bagi developer/AI agent pelaksana.

---

## 2. Tech Stack
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Language**: TypeScript
- **Web Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) + `drizzle-kit`
- **Database Driver**: MySQL client (misal: `mysql2`)
- **Database**: MySQL

---

## 3. High-Level Implementation Steps

### Phase 1: Project Initialization
- Inisialisasi project Bun di root direktori (`bun init`).
- Pastikan konfigurasi `package.json` dan `tsconfig.json` sudah sesuai standar Bun + TypeScript.
- Tambahkan dependencies utama:
  - `elysia`
  - `drizzle-orm`
  - driver MySQL (`mysql2` atau driver kompatibel Bun/MySQL)
- Tambahkan dev dependencies:
  - `drizzle-kit`
  - `@types/bun` (dan types pendukung lainnya jika diperlukan)

### Phase 2: Environment & Database Connection
- Siapkan konfigurasi environment variable (`.env` dan `.env.example`) untuk koneksi MySQL:
  - `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, serta `PORT` aplikasi.
- Buat modul konfigurasi database:
  - Inisialisasi connection pool/client MySQL.
  - Setup instance Drizzle client menggunakan connection tersebut.
- Siapkan file konfigurasi `drizzle.config.ts` untuk keperluan migration dan schema generation.

### Phase 3: Schema & Database Migration Setup
- Buat struktur folder modular untuk skema database (misal: `src/db/schema/`).
- Definisikan contoh skema awal (tabel contoh, misalnya `users` atau health entity) menggunakan Drizzle MySQL table builder.
- Buat script npm/bun di `package.json` untuk:
  - Generate migration (`drizzle-kit generate`)
  - Jalankan migration/push schema (`drizzle-kit migrate` atau `drizzle-kit push`)
  - Membuka Drizzle Studio (`drizzle-kit studio`)

### Phase 4: ElysiaJS Application Bootstrap
- Buat entry point aplikasi (`src/index.ts`).
- Konfigurasi server ElysiaJS:
  - Setup base routing (termasuk endpoint health check: `GET /health`).
  - Integrasikan instance database Drizzle ke context Elysia (atau service layer).
  - Tambahkan middleware penting sesuai kebutuhan (misal: CORS, error handler, atau swagger documentation).
- Pastikan server dapat berjalan di port yang ditentukan.

### Phase 5: Verification & Quality Check
- Verifikasi koneksi ke MySQL berhasil.
- Jalankan migration dan pastikan schema sinkron dengan database.
- Jalankan server (`bun run dev` atau `bun --watch src/index.ts`).
- Uji endpoint dasar melalui browser/cURL/Postman untuk memastikan respon valid.

---

## 4. Rekomendasi Struktur Direktori (High-Level)
```text
.
├── src/
│   ├── config/       # Konfigurasi env & aplikasi
│   ├── db/           # Koneksi database & schema Drizzle
│   │   ├── schema/   # Definisi tabel-tabel DB
│   │   └── index.ts  # Export instance Drizzle
│   ├── routes/       # Definisi endpoint ElysiaJS
│   └── index.ts      # Entry point aplikasi Elysia
├── drizzle/          # Generated migration files (otomatis oleh drizzle-kit)
├── .env.example      # Template variabel environment
├── drizzle.config.ts # Konfigurasi Drizzle Kit
├── package.json
└── tsconfig.json
```

---

## 5. Definition of Done (DoD)
- [ ] Project berhasil diinisialisasi menggunakan Bun tanpa error.
- [ ] Dependencies (Elysia, Drizzle, driver MySQL) terpasang dengan rapi.
- [ ] Drizzle terkonfigurasi dengan `drizzle.config.ts` dan dapat terhubung ke MySQL.
- [ ] Server ElysiaJS berjalan dan merespon request (misal endpoint `/health`).
- [ ] Tersedia file `.env.example` dan petunjuk run script pada `package.json`.

# Node.js RESTful API with Docker and MySQL

Proyek ini adalah aplikasi RESTful API sederhana yang dibangun dengan Node.js, menggunakan Docker untuk kontainerisasi dan MySQL sebagai database. Aplikasi ini memiliki fitur CRUD (Create, Read, Update, Delete) untuk produk dan pesanan.

## Fitur

- **Produk**: Menambah, membaca, memperbarui, dan menghapus produk.
- **Pesanan**: Membuat pesanan, membaca semua pesanan, dan menghapus pesanan.
- **Docker**: Mudah diatur dan dijalankan menggunakan Docker.
- **MySQL**: Database untuk menyimpan data produk dan pesanan.

## Prasyarat

Sebelum memulai, pastikan Anda memiliki:
- [Docker](https://docs.docker.com/get-docker/) terinstal di sistem Anda.
- [Docker Compose](https://docs.docker.com/compose/install/) terinstal.

## Instalasi

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/username/node-restful-api.git
   cd product-api

2. Buat file .env untuk mengatur variabel lingkungan (opsional): Anda dapat mengatur variabel lingkungan di docker-compose.yml jika ingin menggunakan nilai yang berbeda untuk password database.

3. Jalankan Docker Compose:
   ```bash
   docker-compose up --build

4. Akses aplikasi: Aplikasi akan berjalan di http://localhost:3000.

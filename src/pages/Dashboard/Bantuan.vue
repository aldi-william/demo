<script setup lang="ts">
  import { ref } from 'vue'
  import card_car from '../../assets/images/card_car.png'
  import label_icon from '../../assets/images/label_icon.png'
  import popup from '../../assets/images/popup.png'
  const menu = ref('tentang');
</script>
<template>
  <div class="container-xl">
      <div class="grid grid-cols-12 sm:flex md:flex lg:flex xl:flex 2xl:flex sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          <div class="col-span-12 bg-primary mt-6 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg sm:h-screen w-full sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
            <div class="flex sm:flex-col overflow-x-scroll sm:w-full sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible 2xl:overflow-visible">

              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'tentang'" class="w-60 px-4 py-2 text-primary bg-white rounded-lg mb-4 text-xl font-bold">Tentang Lelang</button>
              </div>

              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                   <button @click="menu = 'syarat'" class="w-60 px-4 py-2 text-primary bg-white rounded-lg mb-4 text-xl font-bold">Syarat & Kebijakan</button>
              </div>

            </div>
          </div>    
          <div v-if="menu === 'tentang'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
               <h1 class="text-xl mb-4 font-bold">Pertanyaan Disclaimer</h1>
               <p class="text-justify">1. Dengan Membeli Kendaraan Melalui Platfrom TAV, Pembeli dianggap telah meninjau dan setuju untuk membeli kendaraan berdasarkan deskripsi.</p>
               <p class="text-justify">2. Deskripsi dan kondisi Kendaraan (termasuk tetapi tidak terbatas pada jarak) artinya seperti kondisi kendaraan pada tanggal pemeriksaan kendaraan dan seperti yang dinyatakan dalam platfrom TAV.</p>
               <p class="text-justify">3. Pembeli diingatkan untuk memeriksa keadaan kendaraan, terutama sebelum atau selama penyerahan kendaraan dari kami kepada Pembeli(“Serah Terima”) untuk pihak (A) memastikan bahwa kendaraan itu sesuai deskripsi atau pihak (B) segera memberitahu kami sekiranya terdapat percanggahan dalam deskripsi semasa Serah Terima, jika gagal yang dianggap pembeli telah menerima kendaraan sesuai deskripsi atau syarat kendaraan semasa serah terima.</p>
               <p class="text-justify">4. Kecuali disediakan secara tertulis dan bertulis, kami menolak semua pernyataan atau jaminann lain, yang tersurat atau tersirat berkaitan dengan keadaan ini, termasuk, tanpa batasan, sebarang jaminan mengenai kualiti, roadworthiness, kesesuaian, kemampuan jual-beli, kesesuaian untuk tujuan tertentu atau sebaliknya (tanpa mengira apa jual cara urus niaga atau penggunaan perdagangan)
               </p>
               <h1 class="text-xl my-4 font-bold">Transparan Dalam Penawaran </h1>
               <p class="text-justify">1. Semua kendaraan yang telah terdaftar di Marketplace ini telah menjalani pemeriksaan oleh tim AV Mobil.</p>
               <p class="text-justify">2. Tim kami akan memberitahu penjual dalam kurun waktu 24 jam sejak Acara Live Bidding yang sukses, penjualan, pengalihan kepemilikan dan pembayaran akan diatur oleh penawar Harga Penawaran Tertinggi. </p>
               <p class="text-justify">3. Penawar harus membayar deposit 25% dari harga jual Kendaraan sejak Transaksi dinyatakan berhasil untuk memulai transaksi antara penawar dengan tim AV Mobil.</p>
               <p class="text-justify">4. Terdapat penambahan waktu 30 detik jika ada tawaran yang masuk 30 detik sebelum berakhirnya sesi Live Bidding, penambahan ini dilakukan untuk penawar lain memasukkan tawaran terakhir mereka. Jika tidak maka otomatis sesi Live Bidding akan selesai.</p>
               <div>
                <p class="text-justify">5. Terdapat biaya penanganan setelah transaksi antara AV Mobil dan Penawar dimulai. Berikut rinciannya :</p>
                <ul class="list-disc px-8">
                  <li>Untuk kendaraan seharga kurang dari 100 juta, biaya penanganannya adalah 1 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 101 - 125 juta, biaya penanganannya adalah 1,5 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 126 - 150 juta, biaya penanganannya adalah 2 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 151 - 175 juta, biaya penanganannya adalah 2,5 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 176 - 200 juta, biaya penanganannya adalah 3 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 201 - 225 juta, biaya penanganannya adalah 3 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 226 - 250 juta, biaya penanganannya adalah 3,5 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 251 - 275 juta, biaya penanganannya adalah 4 juta rupiah.</li>
                  <li>Untuk kendaraan seharga kurang dari 276 - 300 juta, biaya penanganannya adalah 4,5 juta rupiah.</li>
                  <li>Untuk kendaraan seharga lebih dari 300 juta, biaya penanganannya adalah 5 juta rupiah.</li>
                </ul> 
               </div>
               <p class="text-justify">6. Penawar bertanggung jawab atas semua biaya alih kepemilikan kendaraan (transportasi, derek, parkir, tol, alih kepemilikan dan lain-lain).</p>
               <p class="text-justify">Catatan : Panduan Marketplace ini merujuk pada perjanjian kerja sama antara AV Mobil dan Penawar. Jika terjadi pertentangan antara rincian dalam Panduan ini dan Perjanjian Kerjasama, yang terakhir akan berlaku. Silahkan hubungi Perwakilan Tim Bisnis AV dan jika anda memiliki pertanyaan terkait dengan Panduan Marketplace ini </p>
               <h1 class="text-xl my-4 font-bold">Pemahaman Dasar</h1>
               <div class="grid grid-cols-12">
                    <div class="col-span-8">
                      <p>1. Kode Lelang / Inspeksi ID</p> 
                      <p>2. tambah ke favorit ketika di klik</p>               
                      <p>3. Status Lelang</p>
                      <p>4. Jumlah tawaran yang ditempatkan</p>
                      <p>5. Jumlah total dealer yang Mengikuti Lelang mobil</p>
                      <p>6. Peringatan Mobil Bekas Tabrakan</p>
                      <p>7. Peringatan Mobil Bekas Banjir</p>
                      <p>8. label mobil Dealer TAV</p>
                      <p>9. Merek, Model dan Tipe Mobil</p>
                      <p>10. Menyalakan Notifikasi Lelang</p>
                      <p>11. Tahun, Jenis transmisi, jarak KM dan Lokasi Mobil</p>
                      <p>12. Harga Pembukaan Lelang</p>
                      <p>13. Tombol Penawaran</p>
                      <p>14. Hari, Tanggal, Tahun dan Waktu Sesi Lelang dilaksanakan</p>
                  </div>
                  <div class="col-span-4">
                      <img :src="card_car" />
                  </div>
               </div>
               <h1 class="text-xl my-4 font-bold">Label & Ikon</h1>
               <div class="grid grid-cols-12">
                <div class="col-span-8">
                  <p>1. Label TAV : Mobil milik TAV</p> 
                  <p>2. Label Mitra : Mobil milik Mitra TAV (Dealer dan Franchise)</p>
                  <p>3. Jumlah Tawaran Yang Ditempatkan</p>
                  <p>4. Jumlah Total Dealer Yang Menawar Mobil Ini</p>
                  <p>5. Peringatan Mobil Bekas Tabrakan</p>
                  <p>6. Peringatan Mobil Bekas Banjir</p>
                  <p>7. Label bahwa sedang dilaksanakan lelang pada mobil ini</p> 
                  <p>8. Label bahwa proses lelang akan dimulai pada sesi yang akan datang</p>
                  <p>9. Label Bahwa Anda Kalah Penawaran Lelang</p> 
                  <p>10. Label menandakan Penawaran harga anda ditolak</p> 
                  <p>11. Label menandakan mobil dalam proses inspeksi</p> 
                  <p>12. Label menandakan bahwa mobil anda telah siap diambil</p>
                  <p>13. Label menandakan bahwal mobil telah diambil oleh anda</p>
                  <p>14. Label menandakan Penawaran harga anda Diterima</p> 
                </div>
                <div class="col-span-4">
                    <img :src="label_icon" />
                </div>
               
               </div>
               <h1 class="text-xl my-4 font-bold">Bagaimana Cara Sistem Kerja Penawaran?</h1>
               <div class="grid grid-cols-12">
                <div class="col-span-8">
                  <p>1. Jumlah tawaran yang akan ditempatkan</p> 
                  <p>2. Tombol untuk mengurangi jumlah tawaran sesuai kelipatan</p>
                  <p>3. Tombol untuk menambah jumlah tawaran sesuai kelipatan</p>
                  <p>4. Tombol untuk memilih jumlah kelipatan tawaran sebesar Rp.500.000,</p>
                  <p>5. Tombol untuk memilih jumlah kelipatan tawaran sebesar Rp.1.000.000,-</p>
                  <p>6. Tombol untuk memulai tawaran</p>
                  <p>7. Pop up pesan konfirmasi jumlah tawaran yang anda masukkan</p> 
                  <p>8. Tombol Ya untuk setuju/konfirmasi jumlah tawaran</p>
                  <p>9. Tombol Tidak untuk kembali ke form Penawaran Lelang</p> 
                  <p>10. Pop up pesan penawaran telah berhasil</p> 
                </div>
                <div class="col-span-4">
                    <img :src="popup" />
                </div>
               </div>
               
          </div>
          <div v-else-if="menu === 'syarat'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
               <h1 class="text-xl mb-4 font-bold">Syarat Pengguna</h1>
               <p>TAV Mobil ingin mengucapkan terimakasih telah mempercayakan penjualan mobil Anda pada kami. Sebelum Anda mengirimkan data-data mobil Anda, kami ingin Anda membaca dan menyetujui syarat-syarat dan ketentuan-ketentuan dibawah ini : </p>
               <div>
                <p class="text-justify">1. Saya pengguna dengan ini setuju untuk memberikan pengelola dan atau pihak terkait lainnya ijin untuk menggunakan data-data saya seperti : nama, kontak, alamat, email, dan lain-lain dengan ketentuan yang akan disebutkan dibawah ini :</p>  
                 <ul class="list-disc px-8">
                  <li>a. Data pribadi akan digunakan oleh pengelola guna menghubungkan Pengguna dengan dealer-dealer mobil rekanan Pengelola melalui media komunikasi seperti : email, surat tercatat, SMS dan atau telepon.
                  </li>
                  <li>b. Tidak menutup kemungkinan Pengelola akan menggunakan Data Pribadi Milik para Pengguna tersebut. Perlu diketahui juga bahwa pihak ketiaga yang dimaksud wajib memenuhi peraturan yang telah dituangkan ke dalam kontrak dengan Pengelola dimana penggunaan Data Pribadi dari Pengguna tidak akan disalahgunakan untuk hal-hal lain selain yang tertuang di dalam kontrak tersebut. </li>
                 </ul>
               </div>
                <p class="text-justify">2. Pengguna mempunyai hak dan wewenang dari waktu ke waktu untuk :
                Mencabut ijin penggunaan Data Pribadi
                Meminta perubahan dan atau pengkinian atas Data Pribadi
                Menanyakan hal-hal sehubungan penggunaan Data Pribadi-nya dengan menghubungi pengelola.</p>
                <h1 class="text-xl my-4 font-bold">Kebijakan Pengguna</h1>
                <p class="text-justify">PEMBERITAHUAN PERLINDUNGAN DATA PRIBADI
                                        Para Pengguna dan Pengunjung yang Kami Hormati,
                                        Pemberitahuan Perlindungan Data Pribadi ini dikeluarkan bagi seluruh Pengguna dan Pengunjung TAV Mobil yang kami hormati sesuai dengan ketentuan peraturan perundang - undangan Republik Indonesia yang berlaku terkait Perlindungan Data Pribadi (“UU PDP”).</p>
                <p class="text-justify">1. Selama Anda berhubungan dengan kami, kami akan mengumpulkan dan memproses data pribadi Anda untuk tujuan berkomunikasi dengan Anda, menyediakan produk atau layanan kepada Anda, memberi tanggapan, terhadap pertanyaan Anda, memberikan Anda update terkini mengenai produk, layanan dan atau promosi yang ditawarkan oleh TAV Mobil serta tujuan - tujuan lain yang diperlukan untuk mengoperasikan dan mempertahankan usaha kami sepertimana yang tercantum pada Kebijakan Perlindungan Data Pribadi kami (secara bersama - sama disebut sebagai “Tujuan”)
                </p>
                <p class="text-justify">2. Kami berkomitmen untuk memastikan bahwa data pribadi Anda akan disimpan dengan aman. Anda berhak untuk meminta akses, meminta salinan, meminta untuk memperbarui atau memperbaiki data pribadi Anda yang disimpan oleh kami. Anda mempunyai hak setiap waktu untuk meminta kami membatasi pemrosesan dan penggunaan data pribadi Anda. Permintaan tertulis dapat Anda tujukan kepada Petugas Kepatuhan kami.</p>
          </div>
      </div>
  </div>
</template>
<style>
  .container-xl{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  /* SCROLL BAR */

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #bfbfbf; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray; 
}
</style>
<script setup lang="ts">
  import { ref } from 'vue'
  import card_car from '../../assets/images/card_car.png'
  import label_icon from '../../assets/images/label_icon.png'
  import popup from '../../assets/images/popup.png'
  const menu = ref('tentang');
</script>
<template>
  <div class="bg-biru_fb pb-12 relative -top-2">
    <div class="container-xl">
      <div class="grid grid-cols-12 sm:flex md:flex lg:flex xl:flex 2xl:flex sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          <div class="col-span-12 bg-blue-500 mt-6 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg sm:h-screen w-full sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
            <div class="flex sm:flex-col overflow-x-scroll sm:w-full sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible 2xl:overflow-visible">

              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'tentang'" :class="menu === 'tentang' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-xl font-bold">Tentang Lelang</button>
              </div>

              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                   <button @click="menu = 'syarat'" :class="menu === 'syarat' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-xl font-bold">Syarat & Kebijakan</button>
              </div>

            </div>
          </div>    
          <div v-if="menu === 'tentang'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">
               <div class="text-xl my-4 font-bold">PENDAFTARAN MITRA</div>
<p>1.	Mitra lelang sebelum memiliki akun username dan password wajib mengisi form pendaftaran dan pembayaran saldo di TAV Lelang</p>
<p>2.	Pengisian form dapat di isi via online melalui Google Form</p>
<p>3.	Setelah mengirim form pendaftaran, maka mitra wajib membayaran biaya pendaftaran sebesar Rp. 2.000.000, 00 (Dua Juta Rupiah) di transfer ke nomor rekening BCA xxxxxxx an PT. TAV Mobil Indonesia untuk menjadi saldo mitra sebagai jaminan menjadi peserta lelang</p>
<p>4.	Konfirmasi pendaftaran dan pembayaran kepada admin TAV yang mana masing-masing mitra memiliki pemandu lelang</p>
<p>5.	Setelah pembayaran dan pendaftaran terverifikasi maka mitra berhak mendapatkan akun username dan password untuk masuk ke web lelang.tavmobil.id</p>
<div class="text-xl my-4 font-bold">PROSES MENGIKUTI LELANG</div>

<p>1.	Mitra harus login ke web lelang.tavmobil.id</p>
<p>2.	Setelah berhasil login, mitra bisa melihat bursa mobil yang di lelangkan baik yang sedang menunggu atau sedang berlangung</p>
<p>3.	Mobil yang dilelangkan telah melewati inspeksi yang ketat oleh tim inspektur TAV</p>
<p>4.	Mitra berhak mengikuti lelang dengan cara klik tombol IKUTI LELANG dan menentukan nilai bidding</p>
<p>5.	Mitra berhak mengikuti dan memenangkan lelang lebih dari 1 mobil</p>
<p>6.	Jika sesi lelang telah berakhir, maka akan terdapat pertambahan waktu 20 detik setiap ada mitra masih melakukan klik tombol bidding dan terus berlanjut sampai tidak ada lagi yang klik bidding</p>
<p>7. Setelah dinyatakan menang, maka mitra wajib membayarkan 50% dari harga mobil kepada PT. TAV Mobil Indonesia via transfer dengan dibuktikan bukti transfer dan dikirimkan kepada pemandu lelang</p>
<p>8.	Setelah berhasil membayar 50% maka Tim TAV akan memfollowup unit dari penjual untuk diproses</p>
<p>9.	Setelah selesai diproses oleh tim TAV dari pihak penjual, maka mobil tersebut akan dibawa ke garasi TAV dan mitra bisa melihat serta melunasi mobil tersebut secara transfer ke PT. TAV Mobil Indonesia</p>
<div>10.	Biaya adminstrasi yang dibebankan kepada mitra diluar harga yang dimenangkan oleh mitra adalah sebagai berikut :
  <ul class="pl-4">
    <li>a.	Biaya Admin 1 jt : mobil dengan harga dibawah 100 jt</li>
    <li>b.	Biaya Admin 2 jt : mobil dengan harga  100 jt – 200 jt</li>
    <li>c.	Biaya Admin 3 jt : mobil dengan harga 200 jt – 400 jt</li>
    <li>d.	Biaya Admin 4 jt : mobil dengan harga 400 jt – 600 jt</li>
    <li>e.	Biaya Admin 5 jt : mobil dengan harga diatas 600 jt</li>
  </ul>
    Biaya admin tersebut tidak termasuk biaya parkir, toll, derek, akomodasi, pengalihan kepemilikan, dan lain sebagainya
</div>
<p>11.	Apabila mitra telah memenangkan mobil dan ternyata mobil yang dimenangkan tidak jadi di bayar 50%, maka secara otomatis saldo mitra di TAV Lelang berkurang 1 jt untuk 1 unit mobil yang telah dibatalkan </p>
<p>12.	Jika saldo mitra ternyata sudah habis karena 2x memenangkan mobil tetapi tidak melanjutkan pembayaran mobil tanpa alasan yang jelas dan bukti alasan yang nyata, maka otomatis saldo 2 jt berubah menjadi 0 dan mitra wajib membayar topup saldo ulang 3 jt jika ingin mengikuti lelang kembali dengan cara konfirmasi kepada pemandu lelang (tanpa registrasi ulang seperti di awal)</p>
<p>13.	Masa aktif akun mitra adalah 1 tahun sejak menerima akun username dan password</p>
<p>14.	Setelah masa aktif selesai, maka mitra wajib melakukan perpanjang senilai 1 jt yang dibayarkan kepada PT. TAV Mobil Indonesia, biaya tersebut tidak mengurangi / menambah saldo di akun mitra lelang</p>
<p>15.	Jika lebih dari 7 hari akun tidak diperpanjang maka secara otomatis saldo akun akan dikembalikan 100% kepada mitra lelang
</p>
<div class="text-xl my-4 font-bold">
  DISKLAIMER
</div>

<p>1.	Mitra wajib melihat mobil di platform dengan cermat</p>
<p>2.	Setelah memenangkan lelang, dan sebelum mobil tersebut di ambil serta tanda tangan serah terima mobil, mitra wajib mengecek ulang kondisi mobil secara langsung dan disesuaikan dengan yang ada di platform TAV</p>
<p>3.	Jika terdapat ketidak cocokan dengan tingkatan yang cukup fatal maka mitra berhak untuk mengembalikan menolak dan biaya yang sudah dibayarkan dikembalikan 100% kepada mitra</p>
<p>4.	Jika terdapat ketidak cocokan yang tidak begitu fatal, maka bisa di diskusikan lebih lanjut</p>
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
          <div v-else-if="menu === 'syarat'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">
               <h1 class="text-xl mb-4 font-bold">Syarat Pengguna</h1>
               <p>TAV Mobil ingin mengucapkan terimakasih telah mempercayakan penjualan mobil Anda pada kami. Sebelum Anda mengirimkan data-data mobil Anda, kami ingin Anda membaca dan menyetujui syarat-syarat dan ketentuan-ketentuan dibawah ini : </p>
               <div>
                <p class="text-justify">1. Saya pengguna dengan ini setuju untuk memberikan pengelola dan atau pihak terkait lainnya penulisan izin untuk menggunakan data-data saya seperti : nama, kontak, alamat, email, dan lain-lain dengan ketentuan yang akan disebutkan dibawah ini :</p>  
                 <ul class="list-disc px-8">
                  <li>a. Data pribadi akan digunakan oleh pengelola guna menghubungkan Pengguna dengan dealer-dealer mobil rekanan Pengelola melalui media komunikasi seperti : email, surat tercatat, SMS dan atau telepon.
                  </li>
                  <li>b. Tidak menutup kemungkinan Pengelola akan menggunakan Data Pribadi Milik para Pengguna tersebut. Perlu diketahui juga bahwa pihak ketiga yang dimaksud wajib memenuhi peraturan yang telah dituangkan ke dalam kontrak dengan Pengelola dimana penggunaan Data Pribadi dari Pengguna tidak akan disalah gunakan untuk hal-hal lain selain yang tertuang di dalam kontrak tersebut. </li>
                 </ul>
               </div>
                <p class="text-justify">2. Pengguna mempunyai hak dan wewenang dari waktu ke waktu untuk :
                Mencabut ijin penggunaan Data Pribadi
                Meminta perubahan atau pembaruan atas Data Pribadi
                Menanyakan hal-hal sehubungan penggunaan Data Pribadi-nya dengan menghubungi pengelola.</p>
                <h1 class="text-xl my-4 font-bold">Kebijakan Pengguna</h1>
                <p class="text-justify">PEMBERITAHUAN PERLINDUNGAN DATA PRIBADI
                                        Para Pengguna dan Pengunjung yang Kami Hormati,
                                        Pemberitahuan Perlindungan Data Pribadi ini dikeluarkan bagi seluruh Pengguna dan Pengunjung TAV Mobil yang kami hormati sesuai dengan ketentuan peraturan perundang - undangan Republik Indonesia yang berlaku terkait Perlindungan Data Pribadi (“UU PDP”).</p>
                <p class="text-justify">1. Selama Anda berhubungan dengan kami, kami akan mengumpulkan dan memproses data pribadi Anda untuk tujuan berkomunikasi dengan Anda, menyediakan produk atau layanan kepada Anda, memberi tanggapan, terhadap pertanyaan Anda, memberikan Anda update terkini mengenai produk, layanan dan atau promosi yang ditawarkan oleh TAV Mobil serta tujuan - tujuan lain yang diperlukan untuk mengoperasikan dan mempertahankan usaha kami seperti halnya yang tercantum pada Kebijakan Perlindungan Data Pribadi kami (secara bersama - sama disebut sebagai “Tujuan”)
                </p>
                <p class="text-justify">2. Kami berkomitmen untuk memastikan bahwa data pribadi Anda akan disimpan dengan aman. Anda berhak untuk meminta akses, meminta salinan, meminta untuk memperbarui atau memperbaiki data pribadi Anda yang disimpan oleh kami. Anda mempunyai hak setiap waktu untuk meminta kami membatasi pemrosesan dan penggunaan data pribadi Anda. Permintaan tertulis dapat Anda tujukan kepada Petugas Kepatuhan kami.</p>
          </div>
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
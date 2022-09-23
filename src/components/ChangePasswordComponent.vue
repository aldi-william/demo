<script setup lang="ts">
  import { ref } from 'vue';
  const emit = defineEmits(['showModal']);
  const event = ref('resetPassword');
  const detik = ref(180);
  const no_wa = ref('');
  const exit = () => {
      emit('showModal', false);
  }
  </script>
  <template>
    <div class="absolute left-0 right-0 top-12 text-center border rounded shadow-xl z-10 bg-white w-11/12 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12 p-8 mx-auto">
      <div class="flex flex-col">
        <h1 class="text-blue-500 text-2xl font-bold mb-4">Silahkan Masukan Password Baru</h1>
        <input placeholder="Password Baru" class="px-4 py-2 border border-gray rounded mb-4"/>
        <input placeholder="Ulangi Password" class="px-4 py-2 border border-gray rounded mb-4"/>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4" @click="exit">Simpan</button>
      </div>
    </div>
  </template>
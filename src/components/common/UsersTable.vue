<template>
  <div>
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto border-spacing-0 overflow-hidden rounded-lg">
        <thead class="rounded-t-lg bg-[#E3E8F3]">
          <tr>
            <th class="w-10 px-4 py-2 text-xs font-normal text-[#8391A5]"></th>
            <th class="w-20 px-4 py-2 text-xs font-normal text-[#8391A5]">Номер</th>
            <th class="w-[300px] px-4 py-2 text-xs font-normal text-[#8391A5]">Читатель</th>
            <th class="w-24 px-4 py-2 text-xs font-normal text-[#8391A5]">Дата регистрации</th>
            <th class="w-32 px-4 py-2 text-xs font-normal text-[#8391A5]">Книги в аренде</th>
            <th class="px-4 py-2 text-xs font-normal text-[#8391A5]">Штрафы</th>
            <th class="px-4 py-2 text-xs font-normal text-[#8391A5]">Статус</th>
            <th class="px-4 py-2 text-xs font-normal text-[#8391A5]"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in 5" :key="index" class="rounded-md bg-white hover:bg-gray-100">
            <td class="w-10 px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td class="w-20 px-4 py-2 text-center">{{ index }}</td>
            <td class="w-[300px] px-4 py-2">
              <div class="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Фото читателя"
                  class="h-10 w-10 rounded-full"
                />
                <div>
                  <div class="font-medium">Имя Фамилия</div>
                  <div class="text-gray-500">email@example.com</div>
                </div>
              </div>
            </td>
            <td class="w-24 px-4 py-2 text-center">01.01.2024</td>
            <td class="w-32 px-4 py-2 text-center">3</td>
            <td class="px-4 py-2 text-center">200 руб.</td>
            <td class="px-4 py-2 text-center">
              <span :class="statusClass('Активен')">Активен</span>
            </td>
            <td class="px-4 py-2 text-center">
              <button
                class="flex transform items-center justify-center rounded-md p-2 transition-transform hover:scale-110 hover:bg-gray-200 hover:text-gray-700"
              >
                <img src="../../assets/icons/DotsChange.svg" alt="Редактировать" class="h-5 w-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="setPage" />
  </div>
</template>

<script>
import Pagination from './Pagination.vue'

export default {
  name: 'UsersTable',
  components: {
    Pagination
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 10 // Задайте общее количество страниц
    }
  },
  methods: {
    statusClass(status) {
      return status === 'Активен'
        ? 'bg-green-200 text-green-800 px-2 py-1 rounded-lg'
        : 'bg-red-200 text-red-800 px-2 py-1 rounded-lg'
    },
    setPage(page) {
      this.currentPage = page
      // Загрузите данные для выбранной страницы здесь
    }
  }
}
</script>

<style scoped>
/* Tailwind handles the styling directly, so no additional scoped styles are needed */
</style>

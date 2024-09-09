<template>
  <button
    @click="handleAdd"
    class="flex h-[40px] w-auto min-w-[150px] items-center justify-center rounded-lg bg-blue-500 px-4 text-white"
  >
    <span class="text-sm">Добавить</span>
    <svg
      class="ml-2 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    handleAdd() {
      this.$emit('add-item')
    }
  }
}
</script>

<style scoped>
/* Стили для кнопки добавления */
button {
  background-color: #3b82f6; /* Синий фон кнопки */
}
</style>

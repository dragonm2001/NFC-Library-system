<template>
  <button
    @click="handleDelete"
    class="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-red-600 text-white"
    :class="{ 'bg-red-700': hasSelection }"
  >
    <img src="../../assets/icons/Delete.svg" alt="Delete" class="h-5 w-5" />
  </button>
</template>

<script>
export default {
  props: {
    hasSelection: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleDelete() {
      this.$emit('delete-selected')
    }
  }
}
</script>

<style scoped>
/* Стили для кнопки удаления */
button {
  background-color: #ef4444; /* Красный фон кнопки */
}
</style>

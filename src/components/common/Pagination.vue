<template>
  <div class="flex items-center justify-between py-4">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="mx-1 rounded-lg bg-[#EFF2F9] px-4 py-2 text-sm font-medium text-blue-600 hover:bg-white disabled:opacity-50"
    >
      &laquo; Назад
    </button>
    <span class="text-[12px] font-medium text-[#738499]">
      Показано {{ itemsStart }}–{{ itemsEnd }} из {{ totalItems }} | Страница {{ currentPage }} из
      {{ totalPages }}
    </span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="mx-1 rounded-lg bg-[#EFF2F9] px-4 py-2 text-sm font-medium text-blue-600 hover:bg-white disabled:opacity-50"
    >
      Вперёд &raquo;
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    itemsStart() {
      return (this.currentPage - 1) * this.itemsPerPage + 1
    },
    itemsEnd() {
      return Math.min(this.currentPage * this.itemsPerPage, this.totalItems)
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1)
      }
    }
  }
}
</script>

<template>
  <div class="relative w-[240px]">
    <!-- Фильтрная кнопка -->
    <button
      @click="toggleDropdown"
      class="relative h-[40px] w-full rounded-lg bg-white px-3 py-2 text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {{ selectedFilter || 'Фильтр' }}
      <svg
        :class="{ 'rotate-180': dropdownOpen, 'rotate-0': !dropdownOpen }"
        class="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500 transition-transform duration-200 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Выпадающее меню -->
    <div v-if="dropdownOpen" class="absolute z-10 mt-2 w-full rounded-lg bg-white shadow-lg">
      <ul class="p-2">
        <li
          v-for="filter in filters"
          :key="filter.value"
          @click="selectFilter(filter)"
          class="cursor-pointer rounded-lg px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {{ filter.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dropdownOpen: false,
      selectedFilter: this.modelValue
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    selectFilter(filter) {
      this.selectedFilter = filter.label
      this.dropdownOpen = false
      this.$emit('update:modelValue', filter.value)
      this.$emit('filter', filter.value)
    }
  },
  watch: {
    modelValue(newVal) {
      this.selectedFilter = newVal
    }
  }
}
</script>

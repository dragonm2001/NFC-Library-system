<template>
  <div class="relative w-[240px]">
    <input
      v-model="searchTerm"
      @input="emitSearch"
      type="text"
      placeholder="Поиск"
      class="h-[40px] w-full rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <svg
      class="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 4a7 7 0 017 7 7 7 0 01-7 7 7 7 0 010-14zm0 0l6 6"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchTerm: this.modelValue
    }
  },
  methods: {
    emitSearch() {
      this.$emit('update:modelValue', this.searchTerm)
      this.$emit('search', this.searchTerm)
    }
  },
  watch: {
    modelValue(newVal) {
      this.searchTerm = newVal
    }
  }
}
</script>

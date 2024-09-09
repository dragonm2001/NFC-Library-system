<template>
  <div class="flex h-screen">
    <!-- Сайдбар -->
    <Sidebar />

    <!-- Контент страницы -->
    <main class="flex-1 bg-[#EFF2F9] p-6">
      <!-- Поиск, фильтры и кнопки -->
      <div class="mb-6 flex items-center justify-between space-x-4">
        <!-- Поиск и фильтры -->
        <div class="flex items-center space-x-4">
          <!-- Компонент поиска -->
          <TableSearchInput v-model="searchTerm" @search="filterUsers" />
          <!-- Компонент фильтров -->
          <FilterComponent
            :filters="filterOptions"
            v-model="selectedFilter"
            @filter="filterUsers"
          />
        </div>

        <!-- Кнопки удаления и добавления -->
        <div class="flex items-center space-x-4">
          <!-- Кнопка удаления -->
          <DeleteButton
            :hasSelection="selectedUsers.length > 0"
            @delete-selected="deleteSelectedUsers"
          />
          <!-- Кнопка добавления -->
          <AddButton @add-item="addNewUser" />
        </div>
      </div>

      <!-- Список пользователей -->
      <div v-if="isLoading" class="text-center">Загрузка...</div>
      <div v-else-if="error" class="text-red-500">{{ error }}</div>
      <div v-else>
        <!-- Компонент таблицы пользователей -->
        <UsersTable
          :users="filteredUsers"
          @edit-user="editUser"
          @delete-user="deleteUser"
          v-model:selected-users="selectedUsers"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/common/MenuSidebar.vue'
import TableSearchInput from '../components/common/TableSearchInput.vue'
import FilterComponent from '../components/common/FilterComponent.vue'
import DeleteButton from '../components/common/DeleteSelectedButton.vue'
import AddButton from '../components/common/AddButton.vue'
import UsersTable from '../components/common/UsersTable.vue'

export default {
  name: 'UsersPage',
  components: {
    Sidebar,
    TableSearchInput,
    FilterComponent,
    DeleteButton,
    AddButton,
    UsersTable // Добавляем компонент в список компонентов
  },
  data() {
    return {
      users: [], // Пустой массив
      filteredUsers: [],
      isLoading: false,
      error: null,
      searchTerm: '',
      selectedFilter: '',
      filterOptions: [
        { label: 'Все', value: '' },
        { label: 'Активные', value: 'Активные' },
        { label: 'Неактивные', value: 'Неактивные' }
      ],
      selectedUsers: []
    }
  },
  methods: {
    filterUsers() {
      // Логика для фильтрации данных
    },
    deleteSelectedUsers() {
      // Логика для удаления пользователей
    },
    addNewUser() {
      // Логика для добавления нового пользователя
    },
    editUser(userId) {
      // Логика для редактирования пользователя
    },
    deleteUser(userId) {
      // Логика для удаления пользователя
    }
  },
  watch: {
    searchTerm() {
      this.filterUsers()
    },
    selectedFilter() {
      this.filterUsers()
    }
  }
}
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>

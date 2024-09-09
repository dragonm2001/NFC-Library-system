<template>
  <div
    :class="{
      'w-[200px]': isSidebarExpanded,
      'w-[85px]': !isSidebarExpanded
    }"
    class="flex h-screen flex-col border-r border-opacity-50 bg-[#EFF2F9] px-[20px] py-[20px] transition-all duration-300 ease-in-out"
  >
    <!-- Основное меню -->
    <nav class="flex-grow">
      <ul class="space-y-[20px]">
        <!-- Бургер-меню -->
        <li
          class="flex cursor-pointer items-center space-x-[10px] rounded-lg p-[10px] transition-all hover:bg-white"
          @click="toggleSidebar"
        >
          <img
            class="h-[24px] w-[24px] cursor-pointer"
            src="../../assets/icons/BurgerMenu.svg"
            alt="Burger Menu"
          />
          <transition name="fade" mode="out-in">
            <span v-if="isSidebarExpanded" class="text-base text-[#738499]">Меню</span>
          </transition>
        </li>

        <!-- Основные пункты меню -->
        <router-link to="/users" class="block">
          <li
            :class="{
              'bg-white': isActive('/users'),
              'text-blue-500': isActive('/users')
            }"
            class="flex cursor-pointer items-center space-x-[10px] rounded-lg p-[10px] transition-all hover:bg-white"
          >
            <img
              class="h-6 w-6"
              src="../../assets/icons/UserMenu.svg"
              alt="User Menu"
              :style="{
                filter: isActive('/users')
                  ? 'invert(34%) sepia(63%) saturate(5283%) hue-rotate(207deg) brightness(104%) contrast(101%)'
                  : ''
              }"
            />
            <transition name="fade" mode="out-in">
              <span
                v-if="isSidebarExpanded"
                :class="{
                  'text-blue-500': isActive('/users'),
                  'text-[#738499]': !isActive('/users')
                }"
                class="text-base"
              >
                Пользователи
              </span>
            </transition>
          </li>
        </router-link>

        <router-link to="/fines" class="block">
          <li
            :class="{
              'bg-white': isActive('/fines'),
              'text-blue-500': isActive('/fines')
            }"
            class="flex cursor-pointer items-center space-x-[10px] rounded-lg p-[10px] transition-all hover:bg-white"
          >
            <img
              class="h-6 w-6"
              src="../../assets/icons/FineMenu.svg"
              alt="Fine Menu"
              :style="{
                filter: isActive('/fines')
                  ? 'invert(34%) sepia(63%) saturate(5283%) hue-rotate(207deg) brightness(104%) contrast(101%)'
                  : ''
              }"
            />
            <transition name="fade" mode="out-in">
              <span
                v-if="isSidebarExpanded"
                :class="{
                  'text-blue-500': isActive('/fines'),
                  'text-[#738499]': !isActive('/fines')
                }"
                class="text-base"
              >
                Штрафы
              </span>
            </transition>
          </li>
        </router-link>

        <router-link to="/books" class="block">
          <li
            :class="{
              'bg-white': isActive('/books'),
              'text-blue-500': isActive('/books')
            }"
            class="flex cursor-pointer items-center space-x-[10px] rounded-lg p-[10px] transition-all hover:bg-white"
          >
            <img
              class="h-6 w-6"
              src="../../assets/icons/BookMenu.svg"
              alt="Book Menu"
              :style="{
                filter: isActive('/books')
                  ? 'invert(34%) sepia(63%) saturate(5283%) hue-rotate(207deg) brightness(104%) contrast(101%)'
                  : ''
              }"
            />
            <transition name="fade" mode="out-in">
              <span
                v-if="isSidebarExpanded"
                :class="{
                  'text-blue-500': isActive('/books'),
                  'text-[#738499]': !isActive('/books')
                }"
                class="text-base"
              >
                Книги
              </span>
            </transition>
          </li>
        </router-link>
      </ul>
    </nav>

    <!-- Контейнер для "Профиль" и "Настройки" -->
    <div class="mt-auto">
      <ul class="space-y-[20px]">
        <router-link to="/settings" class="block">
          <li
            :class="{
              'bg-white': isActive('/settings'),
              'text-blue-500': isActive('/settings')
            }"
            class="flex cursor-pointer items-center space-x-[10px] rounded-lg p-[10px] transition-all hover:bg-white"
          >
            <img
              class="h-6 w-6"
              src="../../assets/icons/LightThemeMenu.svg"
              alt="Light Theme Menu"
              :style="{
                filter: isActive('/settings')
                  ? 'invert(34%) sepia(63%) saturate(5283%) hue-rotate(207deg) brightness(104%) contrast(101%)'
                  : ''
              }"
            />
            <transition name="fade" mode="out-in">
              <span
                v-if="isSidebarExpanded"
                :class="{
                  'text-blue-500': isActive('/settings'),
                  'text-[#738499]': !isActive('/settings')
                }"
                class="text-base"
              >
                Настройки
              </span>
            </transition>
          </li>
        </router-link>
        <router-link to="/profile" class="block">
          <li
            :class="{
              'bg-white': isActive('/profile'),
              'text-blue-500': isActive('/profile')
            }"
            class="flex cursor-pointer items-center space-x-[10px] rounded-lg p-[10px] transition-all hover:bg-white"
          >
            <img
              class="h-6 w-6"
              src="../../assets/icons/ProfileMenu.svg"
              alt="Profile Menu"
              :style="{
                filter: isActive('/profile')
                  ? '' // Не применяем фильтр для иконки профиля
                  : ''
              }"
            />
            <transition name="fade" mode="out-in">
              <span
                v-if="isSidebarExpanded"
                :class="{
                  'text-blue-500': isActive('/profile'),
                  'text-[#738499]': !isActive('/profile')
                }"
                class="text-base"
              >
                Профиль
              </span>
            </transition>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: null, // Хранит текущий элемент под курсором
      isSidebarExpanded: false // Состояние сайдбара (свернут или развернут)
    }
  },
  methods: {
    isActive(route) {
      return this.$route.path === route
    },
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded
    }
  }
}
</script>

<style scoped>
/* Плавное появление/исчезновение текста */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Граница сайдбара */
.border-r {
  border-right-width: 0.5px;
}
</style>

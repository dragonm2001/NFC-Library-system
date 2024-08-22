<!-- src/pages/LoginPage.vue -->
<template>
  <!-- Обертка страницы с фоновым изображением -->
  <div
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    class="flex h-screen items-center justify-center bg-cover bg-center"
  >
    <!-- Контейнер формы входа -->
    <div class="h-[500px] w-[484px] rounded-[20px] bg-white px-[52px] pt-[40px]">
      <!-- Заголовок страницы входа -->
      <div class="flex items-center justify-center">
        <h1 class="mb-[31px] text-[32px] font-bold">Вход в аккаунт</h1>
      </div>
      <!-- Форма для входа -->
      <form @submit.prevent="login">
        <!-- Поле ввода имени пользователя -->
        <div class="flex flex-col">
          <label class="mb-[10px] text-[16px]" for="name">Имя пользователя</label>
          <input
            v-model="username"
            class="mb-[22px] h-[49px] w-[380px] rounded-[15px] border border-black p-4"
            type="text"
            id="name"
            placeholder="Введите имя пользователя"
          />
        </div>
        <!-- Поле ввода пароля -->
        <div class="flex flex-col">
          <label class="mb-[10px] text-[16px]" for="pswd">Пароль</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="mb-[22px] h-[49px] w-[380px] rounded-[15px] border border-black p-4"
            id="pswd"
            placeholder="Введите пароль"
            v-model="password"
          />
        </div>
        <!-- Чекбокс для отображения пароля и ссылка на восстановление пароля -->
        <div class="mb-[30px] flex items-center justify-between">
          <div class="flex items-center">
            <input
              class="mr-[10px] h-[20px] w-[20px] rounded-[5px] bg-black"
              id="show-password"
              type="checkbox"
              v-model="showPassword"
            />
            <label class="text-[16px]" for="show-password">Показать пароль</label>
          </div>
          <div>
            <a href="#">
              <p class="underline">Забыли пароль?</p>
            </a>
          </div>
        </div>
        <!-- Кнопка отправки формы и сообщение об ошибке -->
        <div class="flex flex-col items-center">
          <button
            class="h-[52px] w-[380px] rounded-[15px] bg-blue-600 text-[16px] font-bold text-white"
            type="submit"
          >
            ВОЙТИ
          </button>
          <!-- Сообщение об ошибке отображается только если errorMessage установлено -->
          <p v-if="errorMessage" class="mt-4 text-red-600">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import backgroundImage from '../assets/images/BackgroundLoginPage.png'

export default {
  name: 'LoginPage',
  data() {
    return {
      backgroundImage,
      showPassword: false, // Состояние для управления видимостью пароля
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      try {
        // Отправка данных на сервер
        const response = await this.$axios.post('/login', {
          username: this.username,
          password: this.password
        })

        // Обработка успешного ответа
        if (response.status === 200) {
          // Перенаправление пользователя на другую страницу или сохранение токена
          //
          // this.$router.push('/dashboard')???;
          //
        }
      } catch (error) {
        // Обработка ошибок
        if (error.response && error.response.status === 401) {
          this.errorMessage =
            'Введено неверное имя или пароль, попробуйте снова или обратитесь к администратору'
        } else {
          this.errorMessage = 'Произошла ошибка, попробуйте снова позже'
        }
      }
    }
  }
}
</script>

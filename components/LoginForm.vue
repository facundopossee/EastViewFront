<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Wellcome to EastView Citizen Controller APP
        </h1>
        <p class="leading-relaxed mt-4">Please login</p>
      </div>
      <div
        class="
          lg:w-2/6
          md:w-1/2
          bg-gray-100
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          mt-10
          md:mt-0
        "
      >
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-600"
            >Username</label
          >
          <input
            type="text"
            v-model="login.username"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-red-500
              focus:ring-2 focus:ring-red-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Password</label
          >
          <input
            type="password"
            v-model="login.password"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-red-500
              focus:ring-2 focus:ring-red-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <button
          class="
            text-white
            bg-red-500
            border-0
            py-2
            px-8
            focus:outline-none
            hover:bg-red-600
            rounded
            sm:rounded-lg
            text-lg
          "
          @click="userLogin"
        >
          Login
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Please be careful with the citizens, they may die
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    userLogin() {
      this.$router.push({
        path: '/schedule',
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>

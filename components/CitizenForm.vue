<template>
  <div class="flex items-center mt-10">
    <div class="max-w-md mx-auto my-10 bg-gray-50 p-5 rounded-md shadow-sm">
      <div class="text-center">
        <h1
          class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
        >
          New Citizen
        </h1>
        <p class="text-gray-400 dark:text-gray-400">
          Fill up the form below to add a new citizen.
        </p>
      </div>
      <div class="m-7">
        <input
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />
        <input type="checkbox" name="botcheck" id="" style="display: none" />

        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >Name</label
          >
          <input
            type="text"
            name="name"
            v-model="citizen.name"
            placeholder="John"
            required
            class="
              w-full
              px-3
              py-2
              placeholder-gray-300
              border border-gray-300
              rounded-md
              focus:outline-none
              focus:ring focus:ring-indigo-100
              focus:border-indigo-300
              dark:bg-gray-700
              dark:text-white
              dark:placeholder-gray-500
              dark:border-gray-600
              dark:focus:ring-gray-900
              dark:focus:border-gray-500
            "
          />
        </div>
        <div class="mb-6">
          <label
            for="lastName"
            class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >Last Name</label
          >
          <input
            type="text"
            name="lastName"
            v-model="citizen.lastName"
            placeholder="Doe"
            required
            class="
              w-full
              px-3
              py-2
              placeholder-gray-300
              border border-gray-300
              rounded-md
              focus:outline-none
              focus:ring focus:ring-indigo-100
              focus:border-indigo-300
              dark:bg-gray-700
              dark:text-white
              dark:placeholder-gray-500
              dark:border-gray-600
              dark:focus:ring-gray-900
              dark:focus:border-gray-500
            "
          />
        </div>
        <div class="mb-6">
          <button
            class="
              w-full
              px-3
              py-4
              text-white
              bg-red-600
              rounded-md
              focus:bg-red-900
              focus:outline-none
            "
            @click="createCitizen"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      citizen: {
        name: '',
        lastName: '',
      },
    }
  },
  computed: {
    ...mapState('citizens'),
  },
  methods: {
    createCitizen() {
      //   const action = 'citizens/' + (this.isUpdate() ? 'update' : 'create')
      this.$store
        .dispatch('citizens/create', this.citizen)
        .then((resp) => {
          this.$router.push('/citizens')
        })
        .catch((e) => {
          this.errorMessage = e
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>

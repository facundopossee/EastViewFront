<template>
  <div class="px-5 pt-5 mx-40">
    <button
      class="
        border-b
        sm:rounded-lg
        flex
        mt-16
        text-white
        bg-red-600
        border-0
        py-2
        px-8
        mb-6
        focus:outline-none
        hover:bg-red-900
        rounded
        text-lg
      "
      @click="goNew"
    >
      Add
    </button>

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                      text-center
                    "
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="item in list" :key="item.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ item.name + ' ' + item.lastName }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center whitespace-nowrap">
                    <span>
                      <!-- <a
                        @click="updateItem(item)"
                        class="text-gray-600 px-3 hover:text-red-900"
                        >Edit</a
                      > -->
                      <a
                        class="
                          text-gray-600
                          px-3
                          cursor-pointer
                          hover:text-red-900
                        "
                        @click="deleteItem(item.id)"
                        >Delete</a
                      >
                    </span>
                  </td>
                </tr>
                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'main',

  async fetch({ store }) {
    await store.dispatch('citizens/get')
  },

  computed: {
    ...mapState('citizens', {
      list: (state) => {
        return state.citizenslist
      },
    }),
  },
  methods: {
    deleteItem(id) {
      this.id = id
      this.$store
        .dispatch('citizens/delete', { id: this.id })
        .then(() => this.$store.dispatch('citizens/get'))
    },
    updateItem(item) {
      this.item = item
      this.$store
        .dispatch('citizens/update', { id: this.id })
        .then(() => this.$store.dispatch('citizens/get'))
    },
    goNew() {
      this.$router.push({
        path: '/citizens/new',
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>

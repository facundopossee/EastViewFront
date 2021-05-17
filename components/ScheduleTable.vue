<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
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
                  Citizen
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
                  "
                >
                  Task
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
                  "
                >
                  Description
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
                  "
                >
                  State
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-xs
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
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        <!-- Falta agregar el nombre -->
                        {{ item.citizenId }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ item.title }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ item.description }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ item.state == 1 ? 'Done' : 'Pending' }}
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
                      v-if="item.state == 0"
                      @click="doTask(item)"
                      class="
                        text-gray-600
                        px-3
                        cursor-pointer
                        hover:text-red-900
                      "
                      >DO</a
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
</template>

<script>
/* eslint-disable no-var */

export default {
  props: ['list'],
  methods: {
    doTask(item) {
      this.$store.dispatch('tasks/changeState', { ...item })
    },
  },
}
</script>

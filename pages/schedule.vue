<template>
  <div class="px-5 pt-5 mx-40">
    <div class="items-center mt-10">
      <div class="mx-auto my-10 bg-gray-50 p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Daily task organizer
          </h1>
          <div class="py-5 mb-4">
            <select v-model="selectedDay">
              <option v-for="(day, i) in daylist" :key="day" :value="i">
                {{ day }}
              </option>
            </select>
          </div>
          <div class="border-b-2 border-gray-100">
            <!-- <p class="pb-1">Citizen</p>
            <select v-model="selectedCitizen">
              <option v-for="i in citizenList" :key="i.id" :value="i.id">
                {{ i.name + ' ' + i.lastName }}
              </option>
            </select> -->
          </div>
          <schedule-table :list="taskList"></schedule-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-var */
import { days } from 'static/days'
import { mapState } from 'vuex'
import ScheduleTable from '~/components/ScheduleTable.vue'
export default {
  components: { ScheduleTable },
  layout: 'main',
  data() {
    return {
      daylist: days,
      selectedDay: new Date().getDay() - 1,
      selectedCitizen: '',
    }
  },
  async fetch({ store }) {
    await store.dispatch('tasks/get')
    await store.dispatch('tasks/filterTask', new Date().getDay() - 1)
    await store.dispatch('citizens/get')
  },
  computed: {
    ...mapState('citizens', {
      citizenList: (state) => {
        return state.citizenslist
      },
    }),
    ...mapState('tasks', {
      taskList: (state) => {
        return state.taskFiltered
      },
    }),
  },
  watch: {
    selectedDay() {
      this.filter()
      // this.$store.dispatch('tasks/filterTask', { day: this.selectedDay })
    },
    selectedCitizen() {
      this.filter()
      // this.$store.dispatch('tasks/filterTask', { id: this.selectedCitizen })
    },
  },
  methods: {
    update() {
      this.$fetch()
    },
    filter() {
      this.$store.dispatch('tasks/filterTask', this.selectedDay)
    },
  },
}
</script>

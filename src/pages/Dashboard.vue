<template>
  <div>
    <a-card title="Dashboard" :bordered="true" class="shadow-md !m-10">
      <a-typography-title>{{ message + ' ' + user }}</a-typography-title>
      <a-typography-title :level="3">{{ time }}</a-typography-title>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { getTime, getUser } from '@/utils/userAuth'
import { computed, ref } from 'vue'

const user = computed(() => getUser())
const time = computed(() => getTime())
const message = computed(() => dateTime())
// const message = ref('')

const dateTime = () => {
  var ndate = new Date()
  var hours = ndate.getHours()
  var message = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening'
  return message
}
</script>

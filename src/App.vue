<template>
  <Layout v-if="!!auth" @setAuth="setAuth" @setTheme="setTheme" :theme="theme" />
  <Login v-else @setAuth="setAuth" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import Layout from './layout/Layout.vue'
import Login from './layout/Login.vue'
import { getUser, getTheme } from './utils/userAuth'

const auth = ref<boolean>(false)
const theme = ref<string>('light')

const userAuth = computed(() => getUser())

const setAuth = (val: boolean) => {
  auth.value = val
}
const setTheme = () => {
  const currentTheme = getTheme()
  if (!!currentTheme) {
    theme.value = currentTheme
  }
}

onMounted(() => {
  setTheme()

  if (!!userAuth.value) {
    setAuth(true)
  } else {
    setAuth(false)
  }
})
</script>

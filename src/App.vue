<template>
  <Layout v-if="!!auth" />
  <Login v-else />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue'
import Layout from './layout/AppLayout.vue'
import Login from './layout/LoginPage.vue'
import { getUser, getTheme } from './utils/userAuth'
import { useTheme } from './composables/theme'

const auth = ref<boolean>(false)
const theme = ref<string>('light')

const userAuth = computed(() => getUser())

const setAuth = (val: boolean) => {
  if (!val) {
    localStorage.removeItem('user-info')
  }

  auth.value = val
}

const setMode = (mode: 'dark' | 'light' | string) => {

  theme.value = mode
  localStorage.setItem('mode-v-app', mode)
}

const bc: any = computed(() => {
  const { bc } = useTheme(theme.value)
  return bc
})
const color: any = computed(() => {
  const { color } = useTheme(theme.value)
  return color
})

provide('theme', { setMode, mode: theme, color, bc })
provide('auth', { setAuth, user: userAuth })
onMounted(() => {
  const currentTheme = getTheme()
  if (currentTheme) {
    setMode(currentTheme)
  }

  if (userAuth.value) {
    setAuth(true)
  } else {
    setAuth(false)
  }
})
</script>

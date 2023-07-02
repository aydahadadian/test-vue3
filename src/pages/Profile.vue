<template>
  <div>
    <a-card title="Profile" :bordered="true" class="shadow-md !m-10">
      <a-list>
        <a-list-item>
          <a-typography-title :level="5">Username :</a-typography-title>

          <a-typography-paragraph
            v-model:content="user"
            :editable="{ maxlength: 100, onChange: handleEdit }"
          >
          </a-typography-paragraph>
        </a-list-item>

        <a-list-item>
          <a-typography-title :level="5">Dark mode :</a-typography-title>
          <a-switch v-model:checked="check" @change="change" />
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { getTheme, getUser, setUser } from '../utils/userAuth'

const user = ref<any>('')

const handleEdit = () => {
  setUser(user.value)
}

const check = ref<boolean>(false)
const emit = defineEmits(['setTheme'])
const change = (value: boolean) => {
  if (!!value) {
    localStorage.setItem('mode-v-app', 'dark')
  } else {
    localStorage.setItem('mode-v-app', 'light')
  }
  emit('setTheme')
}

onMounted(() => {
  user.value = getUser()
  const currentTheme = getTheme()
  if (!!currentTheme && currentTheme === 'dark') {
    check.value = true
  }
})
</script>

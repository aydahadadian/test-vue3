<template>
  <a-layout style="min-height: 100vh">
    <a-layout-content
      :class="`${bc} ${color}`"
      style="min-height: 100%; justify-content: center; display: flex; align-items: center"
    >
      <Card
        class="flex flex-col justify-center !p-[8rem] bg-gray-200 border-radius-4 w-[50vw] h-[50vh] rounded-md"
      >
        <a-typography-title :level="3">Enter your name :</a-typography-title>
        <a-form
          class="w-[100%]"
          :model="formState"
          name="basic"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
            class="w-[100%]"
          >
            <a-input class="w-300" v-model:value="formState.username" />
          </a-form-item>
          <a-row>
            <a-col :span="24" style="text-align: right">
              <a-button type="primary" html-type="submit">Submit</a-button>
            </a-col>
          </a-row>
        </a-form>
      </Card>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import { setUser } from '@/utils/userAuth'

import { inject, reactive } from 'vue'
const { bc, color } = inject<any>('theme')
const { setAuth } = inject<any>('auth')

interface FormState {
  username: string
}

const emit = defineEmits(['setAuth'])

const formState = reactive<FormState>({
  username: ''
})
const onFinish = (values: any) => {
  if (!!values.username && values.username.trim() !== '') {
    setUser(values.username)
    setAuth(true)
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

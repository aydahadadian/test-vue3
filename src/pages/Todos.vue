<template>
  <div>
    <a-card title="Todos" :bordered="true" class="shadow-md !m-10">
      <div class="flex">
        <a-input v-model:value="item" show-count :maxlength="100" />
        <a-button type="primary" @click="addItem">Add</a-button>
      </div>

      <a-list :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <template #actions>
              <a-button v-if="!item.edit" type="link" success @click="handleEdit(item.key)"
                >edit</a-button
              >
              <a-button v-else type="link" success @click="handleEdit(item.key, 'end')"
                ><CheckOutlined
              /></a-button>

              <a-button type="link" danger @click="removeItem(item.key)">remove</a-button>

              <!-- <a key="list-loadmore-more">select</a> -->
            </template>

            <a-checkbox
              class="!flex !items-center"
              v-model:checked="item.checked"
              @change="onCheck"
            >
              <!-- <a-typography-text :delete="item.checked">{{ item.label }}</a-typography-text> -->

              <a-typography-paragraph
                class="!min-w-[60vw] !ml-7 flex mb-0"
                :delete="item.checked"
                v-model:content="item.label"
                :editable="{ editing: item.edit, maxlength: 100 }"
              >
                <template #editableIcon>
                  <!-- <a-button type="link" danger>edit</a-button -->
                </template>
              </a-typography-paragraph>
            </a-checkbox>
          </a-list-item>
        </template>
        <!-- <template #header>
          <div>Header</div>
        </template>
        <template #footer>
          <div>Footer</div>
        </template> -->
      </a-list>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { HighlightOutlined, SmileOutlined, SmileFilled, CheckOutlined } from '@ant-design/icons-vue'
import { onMounted, reactive, ref } from 'vue'
const item = ref()
const edit = ref()
const data = ref<{ checked: boolean; label: string; edit: boolean; key: number }[]>([])

const setTodos = () => {
  const formattedData = data.value.map((obj) => {
    return { ...obj, edit: false }
  })
  localStorage.setItem('todo-v-app', JSON.stringify(formattedData))
}
const removeItem = (index: number) => {
  console.log(index)
  const newItems = data.value.filter((item) => item.key !== index)
  data.value = newItems
  setTodos()
}

const handleEdit = (index: number, type?: 'end' | 'start') => {
  const newItems = data.value.map((item: any) =>
    item.key === index ? { ...item, edit: !item.edit } : item
  )
  data.value = newItems
  if (type === 'end') {
    setTodos()
  }
}
const addItem = () => {
  if (!!item.value && item.value.trim() !== '') {
    console.log('item.value')
    const itemIndex = Date.now()
    data.value = [...data.value, { checked: false, edit: false, label: item.value, key: itemIndex }]
    item.value = ''
    setTodos()
  }
}

const onCheck = () => setTodos()

onMounted(() => {
  const localData = localStorage.getItem('todo-v-app')
  if (!!localData) {
    data.value = JSON.parse(localData)
  }
})
</script>

<style scoped>
.ant-typography-edit-content textarea {
  margin: 0 !important;
}
.ant-typography {
  margin-bottom: 0 !important;
}
</style>

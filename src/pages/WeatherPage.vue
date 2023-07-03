<template>
  <div>
    <a-card
      class="shadow-md !m-10"
      title="Waether"
      :bordered="true"
      :bodyStyle="{ display: 'flex', flexDirection: 'column' }"
    >
      <a-auto-complete
        class="min-w-[700px] !mb-10"
        v-model:value="value"
        :options="cities"
        placeholder="input here"
        @select="onSelect"
        :filter-option="filterOption"
      />
      <a-space direction="vertical">
        <a-typography-title>{{ !!cityName ? cityName : '' }}</a-typography-title>
        <a-typography-title :level="3">{{
          !!weatherData ? weatherData.current_weather.temperature : ''
        }}</a-typography-title>
        <a-typography-title :level="3">{{ !!weatherKind ? weatherKind : '' }}</a-typography-title>
      </a-space>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import { cities } from '../service/CityData'
import { getWeather } from '../service/WeatherApi'
import { weatherInterpretation } from '../utils/weatherInterpretation'
import { onMounted, ref } from 'vue'

const value = ref<string>('Tehran')
const cityName = ref<string>('')
const weatherKind = ref<string>('')
const weatherData = ref<any>()

const filterOption = (input: string, option: { value: string }) => {
  return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0
}
const onSelect = async (val: any, option: any) => {
  const data: any = await getWeather(option.lat, option.lng)

  cityName.value = val
  if (data !== undefined) {
    weatherData.value = data
    weatherKind.value = weatherInterpretation(data.current_weather.weathercode)
  }
}

onMounted(() => {
  onSelect('Tehran', { lat: 35.7, lng: 51.4167 })
})
</script>

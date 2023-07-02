const key = 'user-info'
const themeKey = 'mode-v-app'

export const setUser = (value: string) => {
  window.localStorage.setItem(key, value)
}

export const getUser = () => {
  return window.localStorage.getItem(key)
}
export const getTheme = () => {
  return window.localStorage.getItem(themeKey)
}

export const getTime = () => {
  var currentTime = new Date()

  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()

  var formattedTime = hours + ':' + minutes + ':' + seconds
  return formattedTime
}

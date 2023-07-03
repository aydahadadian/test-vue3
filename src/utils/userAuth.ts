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
  const currentTime = new Date()

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  const formattedTime = hours + ':' + minutes + ':' + seconds
  return formattedTime
}

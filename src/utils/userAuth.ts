const key = 'user-info'

export const setUser = (value: string) => {
  window.localStorage.setItem(key, value)
}

export const getUser = () => {

  return window.localStorage.getItem(key)
}



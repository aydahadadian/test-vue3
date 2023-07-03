export function useTheme(theme: string) {


  let bc
  let color
  if (theme === 'dark') {
    bc = 'dark:bg-slate-800'
    color = 'dark:text-white'
  } else {
    bc = 'bg-white'
    color = 'text-slate-700'
  }

  return { bc, color }
}

// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useTheme(theme: string) {
  // state encapsulated and managed by the composable

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

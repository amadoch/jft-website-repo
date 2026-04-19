import { useSignal } from "@preact/signals"
import type { ComponentChildren } from "preact"
import { ChevronDownIcon } from 'lucide-preact'
import styles from './accordion.module.css'

interface Accordion {
  label: string
  children?: ComponentChildren
}

export const Accordion = ({label, children}: Accordion) => {
  const toggle = useSignal(false)
  const handlerToggle = () => { toggle.value = !toggle.value }

  return (
    <div>
      <button class={`flex-content-row-md justify-between ${styles['ac-element']} w-6/12`} onClick={handlerToggle}>
        <p class={`${styles['ac-title']}`}>{label}</p>
        <ChevronDownIcon font-size="20" />
      </button>
      {
        toggle.value ?
        <div class={`flex-content-row-md justify-between ${styles['ac-element']} w-6/12 h-fit`}>
          {children}
        </div>
        : null
      }
    </div>
  )
}

// export const ToggleContent = ({children, ...rest}: ToggleContent) => {
//   const { handlerToggle } = toggleSignal
//   return (
    
//   )
// }

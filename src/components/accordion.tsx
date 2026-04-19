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
      <button class={`flex-content-row-md justify-between ${styles['ac-element']} w-72 md:w-xl`} onClick={handlerToggle}>
        <p class={`${styles['ac-title']}`}>{label}</p>
        <ChevronDownIcon font-size="20" />
      </button>
      {
        toggle.value ?
        <div class={`flex-content-row-md justify-between ${styles['ac-element']} w-72 md:w-xl`}>
          {children}
        </div>
        : null
      }
    </div>
  )
}

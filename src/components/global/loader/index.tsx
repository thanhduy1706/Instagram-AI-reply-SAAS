import React from "react"
import { BarLoader } from "react-spinners"
import { cn } from "@/lib/utils"

type Props = {
  state: boolean
  className?: string
  children: React.ReactNode
  color?: string
}

const Loader = ({ state, className, children, color }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <BarLoader color={color} />
    </div>
  ) : (
    children
  )
}

export default Loader

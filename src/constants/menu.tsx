import { v4 as uuid } from "uuid"
import {
  PiHouseDuotone,
  PiLightningDuotone,
  PiRocketDuotone,
  PiGearFineDuotone,
} from "react-icons/pi"

type FieldProps = {
  label: string
  id: string
}
type SideBarProps = {
  icon: React.ReactNode
} & FieldProps
export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <PiHouseDuotone />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <PiLightningDuotone />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <PiRocketDuotone />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <PiGearFineDuotone />,
  },
]

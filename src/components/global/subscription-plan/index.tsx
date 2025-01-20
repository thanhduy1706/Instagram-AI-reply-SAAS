import { useQueryUser } from "@/hooks/user-queries"

type Props = {
  type: "FREE" | "PREMIUM"
  children: React.ReactNode
}

export const SubscriptionPlan = ({ children, type }: Props) => {
  //   const { data } = useQueryUser()

  return type && children
}

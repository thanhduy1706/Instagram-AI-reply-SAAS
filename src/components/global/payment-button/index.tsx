import { Button } from "@/components/ui/button"
import { useSubscription } from "@/hooks/use-subscription"
import { BarLoader } from "react-spinners"
import { PiCreditCardDuotone } from "react-icons/pi"
import React from "react"

type Props = {}

const PaymentButton = (props: Props) => {
  const { onSubscribe, isProcessing } = useSubscription()
  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="bg-gradient-to-br
     text-white rounded-full from-[#6d60a3] via-[#9434E6] font-bold to-[#CC3BD4]"
    >
      {isProcessing ? <BarLoader color="white" /> : <PiCreditCardDuotone />}
      Upgrade
    </Button>
  )
}

export default PaymentButton

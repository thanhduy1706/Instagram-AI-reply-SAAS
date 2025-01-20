"use client"

import React from "react"
import { usePaths } from "@/hooks/user-nav"
import { PAGE_BREAD_CRUMBS } from "@/constants/pages"
import { Sheet } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

type Props = {
  slug: string
}

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths()
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page === slug
  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet
              trigger={<Menu />}
              className="lg:hidden"
            />
          </span>
        </div>
      </div>
    )
  )
}

export default Navbar

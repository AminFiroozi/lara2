"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { categories } from "@/lib/mock-data"

const ALL_CATEGORIES = {
    value: "all",
    label: "همه دسته‌بندی‌ها",
}

const categoryOptions = [
    ALL_CATEGORIES,
    ...categories.map(c => ({ value: c.id, label: c.name }))
];


export function CategoryCombobox({ defaultValue }: { defaultValue: string }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(defaultValue || 'all')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSelect = (currentValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (currentValue && currentValue !== "all") {
      params.set("category", currentValue);
    } else {
      params.delete("category");
    }
    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`);
    setValue(currentValue)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between md:w-[200px]"
        >
          {value
            ? categoryOptions.find((category) => category.value === value)?.label
            : "انتخاب دسته‌بندی..."}
          <ChevronsUpDown className="ms-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="جستجوی دسته‌بندی..." />
          <CommandList>
            <CommandEmpty>دسته‌بندی یافت نشد.</CommandEmpty>
            <CommandGroup>
              {categoryOptions.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    handleSelect(currentValue === value ? "" : currentValue)
                  }}
                >
                  <Check
                    className={cn(
                      "me-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

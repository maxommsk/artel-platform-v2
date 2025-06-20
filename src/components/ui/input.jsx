import * as React from "react"
import { cn } from "../../lib/utils"
const Input = React.forwardRef(({ className, type, ...props },
ref) => {
return (
<input
type={type}
className={cn(
"flex h-10 w-full rounded-md border border-input bgbackground px-3 py-2 text-sm ring-offset-background
file:border-0 file:bg-transparent file:text-sm file:font-medium
placeholder:text-muted-foreground focus-visible:outline-none
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ringoffset-2 disabled:cursor-not-allowed disabled:opacity-50",
className
)}
ref={ref}
{...props}
/>
)
})
Input.displayName = "Input"
export { Input }
src/components/ui/label.jsx :
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
const labelVariants = cva(
"text-sm font-medium leading-none peer-disabled:cursor-notallowed peer-disabled:opacity-70"
)
const Label = React.forwardRef(({ className, ...props }, ref)
=> (
<LabelPrimitive.Root
ref={ref}
className={cn(labelVariants(), className)}
{...props}
/>
))
Label.displayName = LabelPrimitive.Root.displayName
export { Label }

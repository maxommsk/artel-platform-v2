import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "../../lib/utils";

// Определяем интерфейс для пропсов компонента Separator
export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {}

// Создаем компонент Separator с использованием React.forwardRef
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

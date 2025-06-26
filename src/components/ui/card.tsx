import * as React from "react";

import { cn } from "../../lib/utils";

// Определяем интерфейс для пропсов компонента Card
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// Создаем компонент Card с использованием React.forwardRef
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Определяем интерфейс для пропсов компонента CardHeader
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

// Создаем компонент CardHeader
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// Определяем интерфейс для пропсов компонента CardTitle
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

// Создаем компонент CardTitle
const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// Определяем интерфейс для пропсов компонента CardDescription
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

// Создаем компонент CardDescription
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// Определяем интерфейс для пропсов компонента CardContent
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

// Создаем компонент CardContent
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

// Определяем интерфейс для пропсов компонента CardFooter
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

// Создаем компонент CardFooter
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

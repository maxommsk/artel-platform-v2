import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Определяем тип для аргументов функции cn
type ClassNames = ClassValue[];

// Функция для объединения классов Tailwind CSS
export function cn(...inputs: ClassNames) {
  return twMerge(clsx(inputs));
}

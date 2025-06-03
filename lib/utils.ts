import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class name values into a single string, handling conditional and array values,
 * and merges Tailwind CSS classes intelligently to avoid duplicates or conflicting classes.
 *
 * @param {...ClassValue[]} inputs - The class values to combine. Can be strings, arrays, or objects.
 * @returns {string} The merged class name string.
 *
 * @example
 * ```typescript
 * cn('btn', { 'btn-active': isActive }, ['extra-class']);
 * // => "btn btn-active extra-class"
 * ```
 *
 * @remarks
 * This utility uses `clsx` to handle conditional and array-based class names,
 * and `twMerge` to intelligently merge Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const formatDateTime = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
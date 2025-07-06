import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  export  const formatDateTime = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    export function toProperCase(text: string): string {
      return text
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
    }

    export function toProperCaseWithDash(text: string): string {
  return text
    .toLowerCase()
    .replace(/\b[a-z]/g, char => char.toUpperCase())
    .replace(/[\s/]+/g, '-'); // replace all spaces (including multiple) with a dash
}

    /**
     * Converts a dash-separated string to Proper Case (each word capitalized and separated by spaces).
     *
     * @param text - The dash-separated string to convert.
     * @returns The converted string in Proper Case.
     *
     * @example
     * dashToProperCase('hello-world'); // returns 'Hello World'
     */
    export function dashToProperCase(text: string): string {
  return text
    .toLowerCase()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

   /**
     * Converts a Proper Case string (words separated by spaces) to dash-separated lowercase.
     *
     * @param text - The Proper Case string to convert.
     * @returns The converted string in dash-separated lowercase.
     *
     * @example
     * properCaseToDash('Hello World'); // returns 'hello-world'
     */
    export function properCaseToDash(text: string): string {
      return text
        .trim()
        .replace(/&/g, 'and') // replace ampersand with 'and'
        .replace(/[\s/]+/g, '-') // replace spaces and slashes with dash
        .toLowerCase();
    }
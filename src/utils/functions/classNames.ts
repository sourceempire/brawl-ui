/**
 * Generates a string of class names based on an object where the keys are class names and the values are booleans.
 * Only the class names with a value of `true` are included in the resulting string. 
 * This function is useful for conditionally applying class names in a React component.
 *
 * @param {Record<string, boolean>} classes - An object where the keys are class names and the values are booleans.
 * @returns {string} A string of class names separated by a space, including only the class names where the corresponding value in the object is `true`.
 * 
 * @example
 * // returns 'class1 class3'
 * classNames({ class1: true, class2: false, class3: true });
 */
export function classNames(classes: Record<string, boolean>): string {
    return Object.entries(classes)
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
      .join(" ");
  }
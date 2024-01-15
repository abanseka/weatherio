/**
 * Adds animation delay to specified elements.
 *
 * @param {string} el - The CSS selector for the elements to add animation delay to.
 * @param {number} [delay=0.2] - The delay in seconds between each element's animation.
 * @returns {void}
 *
 * @example
 * // Adds animation delay of 0.2 seconds to all elements with class "box"
 * addAnimationDelay('.box');
 *
 * @example
 * // Adds animation delay of 0.5 seconds to all elements with class "item"
 * addAnimationDelay('.item', 0.5);
 */

export const addAnimationDelay = (el, delay = 0.2) => {
  const element = document.querySelectorAll(el);
  element.forEach((element, index) => {
    element.style.animationDelay = `${index * delay}s`;
  });
};

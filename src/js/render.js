'use strict';

/**
 * Method to render HTML block from JSON
 *
 * @param data
 */

module.exports = function (data) {
  const elementClass = 'raw-plugin__input',
      placeholder = 'Enter HTML code';

  let element = document.createElement('TEXTAREA');

  if (data && data.raw) {
    element.value = data.raw;
  }

  element.classList.add(elementClass);
  element.setAttribute('data-placeholder', placeholder);

  return element;
};

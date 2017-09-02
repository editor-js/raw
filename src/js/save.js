'use strict';

/**
 * Method to extract JSON data from HTML block
 *
 * @param element
 */

module.exports = (element) => {
  let data = {
    raw: element.value
  };

  return data;
};

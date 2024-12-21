'use strict';

/**
 * @return {object}
 */
function makeCalculator(result = 0) {
  const calculate = {
    result,

    operate(action, value = 0) {
      this.result = action(value);

      return this.result;
    },

    add(value = 0) {
      this.result += value;

      return this;
    },

    subtract(value = 0) {
      this.result -= value;

      return this;
    },

    multiply(value = 0) {
      this.result *= value;

      return this;
    },

    divide(value = 0) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculate;
}

module.exports = makeCalculator;

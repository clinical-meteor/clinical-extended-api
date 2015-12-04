/**
 * @summary Replaces spaces in a string with underscores.
 * @locus Anywhere
 * @memberOf String
 * @name addUnderscores
 * @version 1.2.3
 * @example
 * ```js
 * var foo = "Quick brown fox".addUnderscores();
 * })
 * ```
 */
 String.prototype.addUnderscores = function (input){
  return input.replace(/ /g, "_");
};

Style = {};

/**
 * @summary Creates a new collaboration.
 * @locus Anywhere
 * @memberOf Style
 * @name parse
 * @version 1.2.3
 * @example
 * ```js
 * Template.foo.helpers({
 *    cardWidth: function () {
        return Style({
          left: "20%",
          width: "80%"
      })
 *    }
 * })
 * ```
 */
Style.parse = function (json) {
  var result = "";
  $.each(json, function (i, val) {
    result = result + i + ":" + val + " ";
  });
  return result;
};

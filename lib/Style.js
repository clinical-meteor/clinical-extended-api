Style = {};


/**
 * @summary Serializes a json object into a text string.
 * @locus Anywhere
 * @memberOf Style
 * @return {String}
 * @name parse
 * @example
 * Template.foo.helpers({
 *   getPageWidth: function(){
 *     return Style.parse({
 *       "width": "80%",
 *       "padding-left": "80%",
 *       "padding-right": "80%"
 *     });
 *   }
 * });
 */


Style.parse = function (json) {
  var result = "";
  $.each(json, function (key, val, index) {
    result = result + key + ":" + val;
    if (index !== 0) {
      result = result + ";";
    }
  });
  return result;
};

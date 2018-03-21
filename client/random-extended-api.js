/**
 * @summary Generate a random date.
 * @locus Anywhere
 * @memberOf Random
 * @name date
 * @example
 * ```js
 *   Random.date();
 *   Random.date("1975-01-01");
 *   Random.date("1975-01-01", "YYYY/MM/DD");
 *   Random.date(null, "YYYY/MM/DD");
 *   new Date(Random.date());
 * ```
 */

Random.date = function (maxDateAgo, dateFormat) {
  if(!maxDateAgo){
    maxDateAgo = '1950-01-01';
  }
  if(!dateFormat){
    dateFormat = "YYYY-MM-DD";
  }

  var momentAgo =  moment(maxDateAgo)
  var now = new moment();
  var duration = moment.duration(now.diff(momentAgo));    
  var years = duration._data.years;
  var months = duration._data.months;
  var days = duration._data.days;
  var totalDays = duration.as('days');
  var randomDays = parseInt(Random.fraction() * totalDays);
  var randomDate = now.subtract(randomDays, 'days');

  return randomDate.format(dateFormat);
};


/**
 * @summary Generate a random integer.  Zero based counting.
 * @locus Anywhere
 * @memberOf Random
 * @name date
 * @example
 * ```js
 *   Random.date();
 * ```
 */
Random.integer = function (max) {
  if (!max){
    max = Number.MAX_SAFE_INTEGER;
  }
  var randomInt = parseInt(Random.fraction() * max);
  return randomInt;
};



/**
 * @summary Generate a random cardinal integer.  Doesn't include zero.
 * @locus Anywhere
 * @memberOf Random
 * @name date
 * @example
 * ```js
 *   Random.cardinal(10);
 * ```
 */
Random.cardinal = function (max) {
  if (!max){
    max = Number.MAX_SAFE_INTEGER;
  }
  var randomInt = parseInt(Random.fraction() * max) + 1;
  return randomInt;
};



/**
 * @summary Generate a random number (float).  
 * @locus Anywhere
 * @memberOf Random
 * @name date
 * @example
 * ```js
 *   Random.number(10);  
 * ```
 */
Random.number = function (max) {
  if (!max){
    max = Number.MAX_SAFE_INTEGER;
  }
  if (!decimals){
    decimals = 2;
  }
  var randomInt = parseFloat((Random.fraction() * max));
  return randomInt;
};



/**
 * @summary Generate a random number with 2 decimals.  
 * @locus Anywhere
 * @memberOf Random
 * @name date
 * @example
 * ```js
 *   Random.decimal(10);
 * ```
 */
Random.decimal = function (max, decimals) {
  if (!max){
    max = Number.MAX_SAFE_INTEGER;
  }
  if (!decimals){
    decimals = 2;
  }
  var randomInt = parseFloat((Random.fraction() * max).toFixed(decimals));
  return randomInt;
};


//--------------------------------------------------------------------------
// VITAL MEASURES

// The following functions use a random walk, and are prone to drift.
// Should modify them to use normal distributions around empirical data.  

/**
 * @summary Generate a random weight (in lbs).
 * @locus Anywhere
 * @memberOf Random
 * @name date
 * @example
 * ```js
 *   Random.weight(150, 200);
 * ```
 */
Random.weight = function (lastWeight, variant) {
  if (!lastWeight){
    lastWeight = 150;
  }
  if (!variant){
    variant = 5;
  }

  var difference = variant * 2;
  var lowerLossBound = lastWeight - variant;  
  var randomWeightDiff = parseFloat(Random.fraction() * difference);
  var randomWeight = lowerLossBound + randomWeightDiff;
  
  return parseFloat(randomWeight.toFixed(1));
};



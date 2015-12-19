/**
 * @summary Toggles a boolean session variable true/false.
 * @locus Client
 * @memberOf Session
 * @name toggle
 * @version 1.2.3
 * @example
 * ```js
 *   Session.toggle('isSidebarVisible');
 * ```
 */

Session.toggle = function (session_variable) {
  if (Session.get(session_variable) === undefined) {
    Session.set(session_variable, undefined);
  } else if (Session.get(session_variable) === null) {
    Session.set(session_variable, null);
  } else if (Session.get(session_variable) === true) {
    Session.set(session_variable, false);
  } else if (Session.get(session_variable) === false) {
    Session.set(session_variable, true);
  }
  return true;
};

/**
 * @summary Clears a session variable.
 * @locus Client
 * @memberOf Session
 * @name clear
 * @version 1.2.3
 * @example
 * ```js
 *   Session.clear('activePatient');
 * ```
 */

Session.clear = function (session_variable) {
  Session.set(session_variable, null);
  return true;
};
Session.remove = function (session_variable) {
  Session.set(session_variable, undefined);
  return true;
};

Session.setAll = function (object) {
  console.log('object', object);

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key + " = " + object[key]);
      Session.set(key, object[key]);
    }
  }
  return true;
};

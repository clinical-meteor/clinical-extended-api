/**
 * @summary Toggles a boolean session variable true/false.
 * @locus Server
 * @memberOf Mongo.Collection
 * @name drop
 * @version 1.2.3
 * @example
 * ```js
 *   todos = new Mongo('todos');
 *   todo.insert({name: "Butter"})
 *   todo.insert({name: "Eggs"})
 *   todo.insert({name: "Kale"})
 *   todos.drop();
 * ```
 */

Mongo.Collection.prototype.drop = function (){
  console.log('Mongo.Collection.prototype.drop');
  var self = this;
  self._collection.remove({});
};



Mongo.Collection.prototype.onInitialization = function (callback){
  Mongo.Collection.prototype._initCommand = callback;
};
Mongo.Collection.prototype.init = function (){
  return Mongo.Collection.prototype._initCommand();
};
Mongo.Collection.prototype._initCommand;

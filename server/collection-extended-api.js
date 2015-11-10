
Mongo.Collection.prototype.drop = function (){
  console.log('Mongo.Collection.prototype.drop');
  var self = this;
  self._collection.remove({});
};

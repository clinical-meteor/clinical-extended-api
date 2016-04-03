
describe('clinical:extended-api', function () {
  describe('Collection - drop()', function () {
    it.server('clears collections on server', function () {

      var Foo = new Mongo.Collection(null);
      Foo.insert({text: "foo"});

      expect(Foo.find().count()).to.be.equal(1);

      Foo.drop();
      expect(Foo.find().count()).to.be.equal(0);

      Foo = null;
    });
  });
});

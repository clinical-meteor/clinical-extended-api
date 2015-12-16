
describe('clinical:extended-api', function () {
  var server = meteor();
  var client = browser(server);

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

  it('String should exist on the client', function () {
    return client.execute(function () {
      expect(String).to.exist;
    });
  });

  it('String should exist on the server', function () {
    return server.execute(function () {
      expect(String).to.exist;
    });
  });


  it('Style should exist on the client', function () {
    return client.execute(function () {
      expect(Style).to.exist;
    });
  });

  it('Style should exist on the server (for server-side-rendering)', function () {
    return server.execute(function () {
      expect(Style).to.exist;
    });
  });


  it('Session should exist on the client', function () {
    return client.execute(function () {
      expect(Session).to.exist;
    });
  });

  it('Session should NOT exist on the server', function () {
    return server.execute(function () {
      expect(typeof Session).to.equal("undefined");
    });
  });
});

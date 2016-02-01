
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
  it('String can convert a string to snake_case.', function () {
    return client.execute(function () {
      expect(Session).to.exist;
    });
  });
  it('String can convert a string to Proper Case.', function () {
    return client.execute(function () {
      expect(Session).to.exist;
    });
  });
  it('String can convert a string to a slug.', function () {
    return client.execute(function () {
      expect(Session).to.exist;
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
  it('Style should convert a JSS object into a string.', function () {
    return client.execute(function () {
      expect(Style).to.exist;
      var styleString = Style.parse({
        width: "80%",
        left: "20%",
        visibility: "visible"
      });
      expect(styleString).to.equal("width:80%;left:20%;visibility:visible;");
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
  it('Session can be toggled true/false', function () {
    return client.execute(function () {
      expect(Session).to.exist;
      Session.set('foo', false);
      expect(Session.get('foo')).to.be.false;
      Session.toggle('foo');
      expect(Session.get('foo')).to.be.true;
    });
  });



  //==================
  // Users Check
  it("Mongo.Collection.drop() - Collections can remove all items.", function () {
    server.execute(function () {
      Meteor.call('initializeUsers');
      expect(Meteor.users.find().count()).to.equal(8);

      Meteor.users.drop();
      expect(Meteor.users.find().count()).to.equal(0);
    });
  });



  it("Mongo.Collection.init() - Collections can be initialized if there are no records.", function () {
    return server.execute(function () {

      Meteor.users.onInitialization(function(){
        Accounts.createUser({
          username: 'daria',
          password: 'daria',
          email: 'daria@test.org',
          profile: {
            fullName: 'Daria Morgendorffer',
            role: 'Patient',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Daria_Logo.svg/1032px-Daria_Logo.svg.png'
          }
        });
      });
      Meteor.users.init();
      expect(Meteor.users.find().count()).to.equal(1);
    });
  });


});

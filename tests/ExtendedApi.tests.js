import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { assert } from 'meteor/practicalmeteor:chai';
import { chai } from 'meteor/practicalmeteor:chai';
import { expect } from 'meteor/practicalmeteor:chai';

describe('clinical:extended-api', function () {
  beforeEach(function () {
    //console.log('beforeEach');
  });
  afterEach(function () {
    //console.log('afterEach');
  });
  if (Meteor.isClient) {
    it('Session.toggle()', function () {
        Session.setDefault('foo', false)
        expect(Session.get('foo')).to.be.true;
        Session.toggle('foo')
        expect(Session.get('foo')).to.be.false;
    });
  }
});
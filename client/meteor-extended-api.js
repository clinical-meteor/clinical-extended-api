Meteor.isLandscape = function () {
    if(Session.get('appWidth') > Session.get('appHeight')){
        return true;
    } else {
        return false;
    }
};
  
Meteor.isPortrait = function () {
    if(Session.get('appHeight') > Session.get('appWidth')){
        return true;
    } else {
        return false;
    }
};
  
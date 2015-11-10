// does this even work?
api.addComponent = function (name){
  api.addFiles('components/' + name + '/' + name + '.html', 'client');
  api.addFiles('components/' + name + '/' + name + '.js', 'client');
  api.addFiles('components/' + name + '/' + name + '.styl', 'client');
};

module.exports = function(OrgModel) {
  OrgModel.disableRemoteMethod("login", true);
  OrgModel.disableRemoteMethod("logout", true);
  OrgModel.disableRemoteMethod("confirm", true);
  OrgModel.disableRemoteMethod("resetPassword", true);

  OrgModel.disableRemoteMethod('__get__accessTokens', false);
  OrgModel.disableRemoteMethod('__create__accessTokens', false);
  OrgModel.disableRemoteMethod('__delete__accessTokens', false);

  OrgModel.disableRemoteMethod('__findById__accessTokens', false);
  OrgModel.disableRemoteMethod('__destroyById__accessTokens', false);
  OrgModel.disableRemoteMethod('__updateById__accessTokens', false);

  OrgModel.disableRemoteMethod('__count__accessTokens', false);
  //OrgModel.disableRemoteMethod('__exists__accessTokens', false);

  OrgModel.on('dataSourceAttached', function() {
    console.log('OrgModel', 'on.dataSourceAttached()');
    delete OrgModel.validations.email; //delete OrgModel.app.models.User.validations.email;
    delete OrgModel.validations.username; //delete OrgModel.app.models.User.validations.username;
  });
};

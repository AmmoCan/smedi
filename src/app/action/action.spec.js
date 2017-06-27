describe('action component', function () {
  beforeEach(module('smedi', function ($provide) {
    $provide.factory('action', function () {
      return {
        templateUrl: 'app/action/action.template.html'
      };
    });
  }));
  it('should have applied template', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<action></action>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).not.toEqual(undefined);
    expect(element.html()).not.toEqual(null);
    expect(element.html()).not.toEqual('');
  }));

  it('should have default label when no label attr is defined', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<action></action>')($rootScope);
    $rootScope.$digest();
    expect(element.find('a').html()).toEqual('Unknown');
  }));

  it('should have label test when label attr is test', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<action label="test"></action>')($rootScope);
    $rootScope.$digest();
    expect(element.find('a').html()).toEqual('test');
  }));

  it('should emit default action when no action attr is defined', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<action></action>')($rootScope);
    $rootScope.$digest();
  }));
});

describe('menu component', function () {
  beforeEach(module('smedi', function ($provide) {
    $provide.factory('menu', function () {
      return {
        templateUrl: 'app/menu/menu.template.html'
      };
    });
  }));
  it('should have applied template', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<menu></menu>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).not.toEqual(undefined);
    expect(element.html()).not.toEqual(null);
    expect(element.html()).not.toEqual('');
  }));

  it('should have a nav element', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<menu></menu>')($rootScope);
    $rootScope.$digest();
    expect(element.find('nav').html()).not.toEqual('');
  }));
});

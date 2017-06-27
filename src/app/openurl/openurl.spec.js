describe('openurl component', function () {
  beforeEach(module('smedi', function ($provide) {
    $provide.factory('openurl', function () {
      return {
        templateUrl: 'app/openurl/openurl.template.html'
      };
    });
  }));
  it('should have applied template', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<openurl></openurl>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).not.toEqual(undefined);
    expect(element.html()).not.toEqual(null);
    expect(element.html()).not.toEqual('');
  }));

  it('should call openURL() when clicked', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<openurl></openurl>')($rootScope);
    $rootScope.$digest();
  }));
});

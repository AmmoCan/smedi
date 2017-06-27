angular
  .module('smedi')
  .component('openurl', {
    templateUrl: 'app/openurl/openurl.template.html',
    bindings: {
      isShown: '<',
      onOpen: '&'
    },
    controller:
    function () {
      this.$onInit = function () {
        this.openURL = function () {
          var myWindow = $window.open(this.url, 'sitemapWindow');
          this.onOpen();
        };
      };
    }
  });

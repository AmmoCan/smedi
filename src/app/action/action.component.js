angular
  .module('smedi')
  .component('action', {
    templateUrl: 'app/action/action.template.html',
    bindings: {
      action: '@',
      label: '@'
    },
    controller:
    ['$scope', function ($scope) {
      this.$onInit = function () {
        if (angular.isUndefined(this.action) ||
          this.action === null ||
          this.action === '') {
          this.action = 'Unknown';
        }
        if (angular.isUndefined(this.label) ||
          this.label === null ||
          this.label === '') {
          this.label = 'Unknown';
        }
        this.callAction = function () {
          $scope.$emit('action' + this.label);
        };
      };
    }]
  });

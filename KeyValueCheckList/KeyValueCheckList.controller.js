angular.module("umbraco").controller("KeyValueCheckListController", function ($scope, $filter) {

    let checkForCheck = function (key) {
        for (let i = 0; i < $scope.model.value.length; i++) {
            if ($scope.model.value[i].key === key) {
                return true;
            }
        }
        return false;
    }

    var keyValues = $scope.model.config.names.split('\n');
    var keyValueList = _.map(keyValues, function (keyValue) {
        var keyValue = keyValue.split(':');
        return { key: keyValue[0], value: keyValue[1], checked: checkForCheck(keyValue[0])};
    });
    $scope.keyValueCheckList = keyValueList;

    $scope.changeSelections = function () {
        $scope.model.value = $filter('filter')($scope.keyValueCheckList, { checked: true });
    }  
});
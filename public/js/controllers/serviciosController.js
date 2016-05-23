app.controller('serviciosController', ['$scope', function($scope) {
	$scope.boxes = true;
	$scope.description = false;

	$scope.toggleShow = function() {
		$scope.boxes = !$scope.boxes;
		$scope.description = !$scope.description;
	}
}]);



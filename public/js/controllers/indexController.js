myApp.controller('indexController', ['$scope', '$http', function($scope, $http){
	
	angular.element(document).ready(function () {		
			$http({
				headers: {
					'Content-Type': 'application/json' 
				},
				url: baseUrl, 
				method: "POST",
				data: {
					text: ""
				}			
			}).then(function successCallback(response){
				$scope.items = response['data'];											

			}, function errorCallback(data, status, headers) {
				console.log(data, status, headers);
				alert("Error");
			});
		
	});

	////Add item ///
	angular.extend($scope, {
		insertItem: function(){
			$http({
				headers: {
					'Content-Type': 'application/json' 
				},
				url: baseUrl + 'add',
				method: "POST",
				data: {
					item: $scope.itemText					
				}
			}).then(function successCallback(response){
				if(response['data'] == 1){
					alert("Done!");										
				}				

			}, function errorCallback(data, status, headers) {
				console.log(data, status, headers);
				alert("Error!");
			});			
		}		
	});
}]);



	
	

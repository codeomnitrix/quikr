var quikrApp = angular.module("auction",["ngRoute", "ngMaterial", "ngMessages"]);

//Routing information
quikrApp.config(['$routeProvider', function($routeProvider){
  //Promises to be resolved first.
  $routeProvider.when("/", {
    templateUrl: "templates/viewAll.html"
  }).when("/add", {
    templateUrl: "templates/addNew.html"
  }).when("/details:id", {
    templateUrl: "templates/adView.html"
  }).otherwise({
    redirectTo: "/"
  });

}]);

// function resolveController($q, path){
//   var deferred = $q.defer();
//   var script = document.createElement('script');
//   script.src = path;
//   script.onload = function() {
//       deferred.resolve();
//   };
//   document.body.appendChild(script);
//   return deferred.promise;
// };

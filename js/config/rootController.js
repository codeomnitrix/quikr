quikrApp.controller("rootController", ['$scope', '$location', function($scope, $location){
  $scope.go = function ( path ) {
    console.log(path);
    $location.path( path );
  };
}]);

quikrApp.controller("viewAdController", ['$scope', function($scope){
  $scope.allImages = ["assets/dummy/1.jpg", "assets/dummy/1.jpg", "assets/dummy/1.jpg",
                      "assets/dummy/1.jpg", "assets/dummy/1.jpg", "assets/dummy/1.jpg"];
  $scope.bigImgSrc = $scope.allImages[0];
  $scope.showInBig = function(ind){
    $scope.bigImgSrc = $scope.allImages[ind];
  }
}]);

quikrApp.controller("viewAllController", ['$scope', '$http', function($scope, $http){
  $http.get("backend.php?q=allAuctions").success(function(data){
    $scope.allCarsData = data.AdsByCategoryResponse.AdsByCategoryData.docs;
    $scope.myArray = $scope.allCarsData;
    console.log($scope.myArray);
    $scope.rowFilter = function (data) {
       var rows = [];
       var slices = [4, 4, 4, 4];
       slices.forEach(function (s) {
         rows.push(data.splice(0,s));
       });
       console.log(rows);
       return rows;
     };
     $scope.advArray = $scope.rowFilter($scope.myArray);
  }).error(function(data, status){
    console.log(data);
  });
}]);

quikrApp.filter("col", function() {
  return function(value) {
    return ['col-xs-','col-sm-', 'col-md-'].map( function (c) { return c + value} ).join(' ');
  }
});

quikrApp.controller("filterController", ['$scope', function($scope){
  var self = this;

    // list of `state` value/display objects
    self.brands = loadBrands();
    self.models = null;
    self.selectedBrand  = null;
    self.searchBrand    = null;
    self.searchModel = null;
    self.selectedModel = null;
    self.querySearch   = querySearch;
    self.brandSelection = brandSelection;
    self.years = ('2010 2011 2012 2013 2014 2015').split(' ').map(function (year)
                                              { return { abbrev: year }; });
    self.prices = ('below 1 lac, 1 - 3 lac, 3 - 6 lac, 6 - 10 lac, above 10 lac').split(/, +/g).map(function(price){
      return {abbrev: price};
    });
    function querySearch (query, context) {
      var results;
      switch (context) {
        case "brand":
          results = query ? self.brands.filter( createFilterFor(query) ) : self.brands;
          break;
        case "model":
          results = query ? self.models.filter( createFilterFor(query) ) : self.models;
          break;
        default:

      }
      return results;
    }
    function brandSelection(item){
      var ind;
      if(item == undefined){
        self.models = null;
        return;
      }
      switch (item.value) {
        case "hyundai":
          ind = 0;
          break;
        case "honda":
          ind = 1;
          break;
        case "audi":
          ind = 2;
          break;
        case "toyota":
          ind = 3;
          break;
        case "tata":
          ind = 4;
          break;
        default:
          ind = 0;
      }
      function loadModels(ind){
        var models = [
          'Accent, Elantra, Eon, Getz, i10, i20, Verna, Xcent',
          'Accord, Amaze, Brio, City, Civic, Jazz',
          'A3, A4, A6, A8, Q3, Q4, Q7',
          'Altis, Camry, Corolla, Etios, Fortuner',
          'Aria, Bolt, Indica, Indigo, Manza, Sumo'
        ];
        return models[ind].split(/, +/g).map( function (model) {
          return {
            value: model.toLowerCase(),
            display: model
          }
        });
      }
      console.log(loadModels(ind));
      self.models = loadModels(ind)
      console.log(self.models);
    }
    function loadBrands() {
      var allBrands = 'Hyundai, Honda, Audi, Toyota, Tata';
      return allBrands.split(/, +/g).map( function (brand) {
        return {
          value: brand.toLowerCase(),
          display: brand
        };
      });
    }
    function loadModels(brand){

    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(brand) {
        return (brand.value.indexOf(lowercaseQuery) === 0);
      };

    }
}]);

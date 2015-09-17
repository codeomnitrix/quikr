quikrApp.controller("createAuctionController", ['$scope', function($scope){
  //Condition: "Used"













  /*
   * Data
   */
   $scope.brands=[
     {"brandName": "Honda",
      "models": [
        "Accord",
        "Amaze",
        "Brio",
        "City"
      ]},
      {
        "brandName": "Hyundai",
        "models": [
          "i10",
          "i20",
          "Xcent"
        ]
      }
   ];
   $scope.places = [
     {"city": "Bangalore",
      "id": 1,
     "locality": [
       "Nal",
       "Nandini Layout",
       "Nandi Durg Road",
       "Niketan"
     ]},
     {
       "city": "Chandigarh",
       "id": 2,
       "locality": [
         "Sector 1",
         "Sector 10",
         "Sector 12",
         "Sector 14"
       ]
     }
   ];
   $scope.years=[
     "2015",
     "2014",
     "2013",
     "2012",
     "2011",
     "2010",
     "2009"
   ];
   $scope.localities = $scope.places[0].locality;
   $scope.models = $scope.brands[0].models;
}]);

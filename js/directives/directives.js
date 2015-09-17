quikrApp.directive('quikrad', function(){
  return{
    restrict: "E",
    templateUrl: "templates/quikrAd.html",
    scope: {
      details: '=',
      price: '=',
      titleImg: '=',
      adTitle: '=',
      adLocality: '=',
      adBrand: '=',
      adModel: '=',
      kmsDriven: '=',
      makeYear: '=',
    },
    controller: function($scope){

    }
  }
});

quikrApp.directive("qnewad", function(){
  return{
    restrict: "E",
    templateUrl: "templates/postAd.html"
  }
});

quikrApp.directive("qviewad", function(){
  return{
    restrict: "E",
    templateUrl: "templates/viewAd.html"
  }
});

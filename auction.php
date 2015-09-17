<html>
<head>
<title>Auction - Quikr Hackathon</title>
<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/angular-material/0.11.0/angular-material.min.css'>
<link rel='stylesheet' href='http://ajax.googleapis.com/ajax/libs/angular_material/0.6/angular-material.css'>
<link rel="stylesheet" href="css/bootstrap.min.css" media="screen" charset="utf-8">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="css/master.css" media="screen" charset="utf-8">
<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js'></script>
<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-animate.min.js'></script>
<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.min.js'></script>
<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-aria.min.js'></script>
<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-messages.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/angular-material/0.11.0/angular-material.min.js'></script>
<script type="text/javascript" src="js/config/routing.js"></script>
<script type="text/javascript" src="js/config/rootController.js"></script>
<script type="text/javascript" src="js/directives/directives.js"></script>
</head>
<body ng-app="auction" ng-controller="rootController">
  <div id="mainContainer">
    <md-toolbar class="md-white-bg">
      <div class="md-toolbar-tools" layout="row" layout-sm="column">
        <div flex="20">
          <img src="assets/quikr.png" alt="Quikr Logo" />
        </div>
        <div flex="45">

        </div>
        <div flex="19" layout="row" layout-align="end start">
          <md-button class="md-flat md-primary">Sign In</md-button>
          <md-button class="md-flat md-warn">Register</md-button>
        </div>
      </div>
      <br/>
      <md-divider></md-divider>
      <div class="filters" layout-sm="column" layout="row" ng-controller="filterController as ctrl">
        <span flex="5"></span>
        <md-autocomplete flex="15" md-input-name="brand"
          md-min-length="0"
          md-no-cache="ctrl.noCache" md-selected-item="ctrl.selectedBrand"
          md-search-text="ctrl.searchBrand"
          md-items="item in ctrl.querySearch(ctrl.searchBrand, 'brand')"
          md-item-text="item.display" md-floating-label="Brand"
          md-selected-item-change="ctrl.brandSelection(item)">
          <md-item-template>
            <span md-highlight-text="ctrl.searchText">{{item.display}}</span>
          </md-item-template>
          <md-not-found>
            No matches found for "{{ctrl.searchText}}".
          </md-not-found>
        </md-autocomplete>
        <md-autocomplete flex="15" md-input-name="model"
          md-min-length="0"
          md-no-cache="ctrl.noCache" md-selected-item="ctrl.selectedModel"
          md-search-text="ctrl.searchModel"
          md-items="item in ctrl.querySearch(ctrl.searchModel, 'model')"
          md-item-text="item.display" md-floating-label="Model"
          >
          <md-item-template>
            <span md-highlight-text="ctrl.searchText">{{item.display}}</span>
          </md-item-template>
          <md-not-found>
            No matches found for "{{ctrl.searchText}}".
          </md-not-found>
        </md-autocomplete>
        <md-input-container flex="15">
          <label style="font-weight: bold">Year</label>
          <md-select ng-model="ctrl.year">
            <md-option ng-repeat="year in ctrl.years" value="{{year.abbrev}}">{{year.abbrev}}</md-option>
          </md-select>
        </md-input-container>
        <md-input-container flex="15">
          <label style="font-weight: bold">Price</label>
          <md-select ng-model="ctrl.price">
            <md-option ng-repeat="price in ctrl.prices" value="{{price.abbrev}}">{{price.abbrev}}</md-option>
          </md-select>
        </md-input-container>
        <span flex="5"></span>
        <div flex="10" layout="row" layout-align="center center">
          <md-button class="md-raised md-primary">Filter</md-button>
        </div>
        <div flex="10" layout="row" layout-align="start center">
          <md-button class="md-raised md-hue-2 md-warn">Reset</md-button>
        </div>
      </div>
    </md-toolbar>
    <div class="container" ng-view autoscroll="true">

    </div>
    <md-button class="md-fab md-warn fixed-point" aria-label="Post Ad" ng-click="go('add')">
        <i class="material-icons" style="font-size: 1.4em;">add</i>
    </md-button>
  </div>
</body>
</html>

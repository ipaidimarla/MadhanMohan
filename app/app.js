/**
 * Created by Happy on 26/08/17.
 */
/* IIFE*/
(function(){

    var app = angular.module('app', []);

    app.controller('mainAppCtrl',['$scope', function($scope){

        $scope.bshowHome = true;
        $scope.bshowContact = false;
        $scope.bshowEducation = false;
        $scope.bshowExperience = false;



        $scope.showEducation = function()
        {
            $scope.bshowEducation = true;
            $scope.bshowHome =  $scope.bshowContact = $scope.bshowExperience  = false;

        }

        $scope.showContact = function(){
            $scope.bshowContact = true;
            $scope.bshowHome =  $scope.bshowExperience = $scope.bshowEducation  = false;
        }

        $scope.showExperience = function(){
            $scope.bshowExperience = true;
            $scope.bshowHome =  $scope.bshowContact = $scope.bshowEducation  = false;

        }
        $scope.showHome = function(){
            $scope.bshowHome = true;
            $scope.bshowEducation =  $scope.bshowContact = $scope.bshowExperience  = false;

        }




    }]);

    app.directive('contactInfo', function(){
        return{
            templateUrl :'./partials/contact.html'
        }

    });

    app.directive('educationInfo', function(){
        return{
            templateUrl :'./partials/education.html'
        }

    });

    app.directive('experienceInfo', function(){
        return{
            templateUrl :'./partials/experience.html'
        }

    });



})();
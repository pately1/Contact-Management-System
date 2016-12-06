/**
 * Created by Yash on 12/6/2016.
 */
(function () {
    'use strict';

    angular.module('myContacts')
        .controller('MyContactsCtrl',['$scope','$firebaseArray', function ($scope, $firebaseArray) {
            var ref = firebase.database().ref().child('contacts');
            $scope.contacts = $firebaseArray(ref);
            console.log($scope.contacts);
            $scope.msg = '';
            $scope.data = {};
            $scope.showAddForm = function () {
                $scope.addFormShow = true;
            };

            $scope.hide = function () {
                $scope.addFormShow = false;
            };

            $scope.showEditForm = function (contact) {

            };

            $scope.removeContact = function (contact) {

            };

            $scope.submitMe = function () {
                ref.push($scope.data);
                clearFields();
                $scope.addFormShow = false;
                $scope.msg = "Contact Added ..."
            };

            function clearFields() {
                $scope.data = {};
            };

        }]);
})();
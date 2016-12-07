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
                $scope.contactShow = false;
            };

            $scope.showContact = function (contact) {
                $scope.contactShow = true;
                console.log(contact.phone);
                $scope.name = contact.name;
                $scope.email 			= contact.email;
                $scope.company 			= contact.company;
                $scope.work_phone 		= contact.phone.work_phone;
                $scope.home_phone 		= contact.phone.home_phone;
                $scope.mobile_phone 	= contact.phone.mobile_phone;
                $scope.street_address 	= contact.address.street_address;
                $scope.city 			= contact.address.city;
                $scope.state 			= contact.address.state;
                $scope.zipcode 			= contact.address.zipcode;
            };

            $scope.showEditForm = function(contact){
                $scope.editFormShow = true;
                $scope.id= contact.$id;
                $scope.data.name = contact.name;
                $scope.data.email = contact.email;
                $scope.data.company = contact.company;
                $scope.data.phone = {};
                $scope.data.phone.work_phone = contact.phone.work_phone;
                $scope.data.phone.home_phone = contact.phone.home_phone;
                $scope.data.phone.mobile_phone = contact.phone.mobile_phone;
                $scope.data.address = {};
                $scope.data.address.street_address = contact.address.street_address;
                $scope.data.address.city = contact.address.city;
                $scope.data.address.state = contact.address.state;
                $scope.data.address.zipcode = contact.address.zipcode;

            };

            $scope.editMe = function () {
                var refe = ref.child($scope.id);
                // var id = $scope.id;
                // var record = $scope.contacts.$getRecord(id);
                // record.name 					= $scope.data.name;
                // record.email 					= $scope.data.email;
                // record.company 					= $scope.data.company;
                // record.phone.work 				= $scope.data.phone.work_phone;
                // record.phone.home 				= $scope.data.phone.home_phone;
                // record.phone.mobile 			= $scope.data.phone.mobile_phone;
                // record.address.street_address 	= $scope.data.address.street_address;
                // record.address.city 			= $scope.data.address.city;
                // record.address.state 			= $scope.data.address.state;
                // record.address.zipcode 			= $scope.data.address.zipcode;
                // console.log(record);
                refe.update($scope.data);
                $scope.editFormShow = false;
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
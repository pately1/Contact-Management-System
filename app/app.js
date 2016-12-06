/**
 * Created by Yash on 12/6/2016.
 */
(function () {
    'use strict';

    angular.module('myContacts', ['ngRoute', 'firebase'])
        .run(function () {
            var config = {
                apiKey: "AIzaSyCZPC0XQ-FpRIkD43vqcwIsXeDw_OduoZg",
                authDomain: "mycontacts-2d026.firebaseapp.com",
                databaseURL: "https://mycontacts-2d026.firebaseio.com/"
            };
            firebase.initializeApp(config);
        })
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/contacts', {
                    templateUrl: './Controllers/contacts/contacts.html',
                    controller: 'MyContactsCtrl'
                })
                .otherwise({redirectTo:'/contacts'});
        }]);
})();
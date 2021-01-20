angular.module("classApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home.html",
                controller: "homeController"
            })
            .when("/todays-class", {
                templateUrl: "todays-class.html",
                controller: "todaysClassController"
            })
            .when("/prev-tracks", {
                templateUrl: "prev-tracks.html",
                controller: "prevTracksController"
            })
            .when("/submit-a-song", {
                templateUrl: "submit-a-song.html",
                controller: "submitASongController"
            })
            .otherwise({
                template: "<hr/><h1>Uh Oh it's gone done wrong</h1><hr/>"
            });
    })

    .controller("homeController",
        function ($scope) {

        })

    .controller("todaysClassController",
        function ($scope, $http) {
            $http.get('json-files/todays-class.json')
                .then(function (res) {
                    $scope.todays_class = res.data;
                });
        })

    .controller("prevTracksController",
        function ($scope, $http) {
            $http.get('json-files/prev-tracks.json')
                .then(function (tracks) {
                    $scope.prev_tracks = tracks.data;
                });
            $scope.trackName = "";
            $scope.orderBy = "";
        })

    .controller("submitASongController",
        function ($scope) {
            $scope.savedSuggestedTrackJson = "";
            $scope.showSubmitted = false;

            $scope.suggestedTrackForm = function () {
                var tempInstruction = "";
                if ($scope.suggestedTrack.instruction == "") {
                    tempInstruction = "No suggested instructions provided"
                } else {
                    tempInstruction = $scope.suggestedTrack.instruction
                }
                savedSuggestedTrackJson = {
                    "Track": $scope.suggestedTrack.trackName,
                    "Instructions": tempInstruction
                };
                alert("Submitted:\nTrack: " + savedSuggestedTrackJson.Track + "\nInstructions: " + savedSuggestedTrackJson.Instructions);
                showSubmitted = true;
            };
        });
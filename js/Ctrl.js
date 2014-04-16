//so what if you want to share data between controllers.
//this is where you do it

var sharedControllerApp = angular.module('sharedCtrlApp', []);
sharedControllerApp.controller('IntroController', function($scope, Content){
//    this is where all the content for our paragraphs get injected
    $scope.content = Content;

});

sharedControllerApp.controller('IntroSecondController', function($scope, Content){
    $scope.content = Content;
});

sharedControllerApp.factory("Content", function(){
    return {
        firstParagraph: "this is the shared data",
        secondParagraph: "this is the second shared"
    }
});

//function IntroController($scope, Content){
////    this is where all the content for our paragraphs get injected
//    $scope.content = Content;
//
//}
//
//function IntroSecondController($scope, Content){
//    $scope.content = Content;
//}

//Use this for first example
//this is our first controller. This will control the content
//inside the HTML div element with the ng-controller of IntroController
//function IntroController($scope){
////    this is where all the content for our paragraphs get injected
//    $scope.content =
//    {
//        firstParagraph: "This is my content for First paragraph",
//        secondParagraph: "This is my second paragraph content"
//    };
//    $scope.data =
//    {
//        example: "Yep just an example",
//        style: "panel radius"
//    }
//
//}
//
//function IntroSecondController($scope){
//    $scope.content =
//    {
//        firstParagraph: "This is my content in second controller for First paragraph",
//        secondParagraph: "This is my second paragraph content in second controller"
//    };
//    $scope.data =
//    {
//        example: "Yep just an example second controller",
//        style: "panel"
//    }
//}
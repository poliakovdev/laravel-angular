<!doctype html>
<html ng-app="myApp">
    <head>
      <title>Gallery</title> 
      <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}"></script> 
      <script>var baseUrl = "{{ url('/') }}/";</script>
    </head>
<body> 
   
      <div class="container">
      	<div ng-view></div>
      </div>

      <script type="text/javascript" src="{{ asset('bower_components/angular/angular.min.js') }}"></script> 
      <script type="text/javascript" src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script> 
      <script type="text/javascript" src="{{ asset('bower_components/angular-cookies/angular-cookies.min.js') }}"></script> 
      <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
      <script type="text/javascript" src="{{ asset('js/controllers/indexController.js') }}"></script>       
      <script type="text/javascript" src="{{ asset('js/script.js') }}"></script>
</body>
</html>

//login controller defination
FOSapp.controller('loginController',function($scope,$location,$window)
{
   $scope.submit=function()
   {
       
       if($scope.username=='demo' && $scope.password=='demo@123')
           {
              
               $location.path('Home');
           }
       else
       {
          $window.alert('Please enter valid username and password');
            
       }
   }
    
   $scope.pay=function()
   {
       
       
       $window.alert('Thanks! we will reach you soon');
       $location.path('Home');
   }
   
   
   
});

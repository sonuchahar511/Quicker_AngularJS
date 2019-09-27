while changing bootstrap and angular minified files with 
uncompressed files,hash-bang issues arises. 
To resolve this $routeProvider Service need to 
configure your angular application 
to mention ! should be replaced with empty string.
Or use #! for routing with angular.



Reference:
    https://github.com/angular/angular.js/commit/aa077e81129c740041438688dff2e8d20c3d7b52
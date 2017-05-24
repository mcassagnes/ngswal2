# ngswal2
AngularJS wrapper for SweetAlert2

### Installation
```
yarn add ngswal2
```

### Usage

```
import ngswal2 from 'ngswal2'

// inject it as a dependency in your app
angular.module(..., [ngswal2])

// inject the factory
.factory(..., ['Swal', function (Swal, ...) {
  // user the factory as you would use the regular SweetAlert2
  
  Swal({
    title: 'My title',
    text: 'Hello World!'
  }).then(() => {
    
  }).catch((error) => {
    
  })
}])
```

### Don't forget to import SweetAlert2's CSS
Using SCSS
```
@import "~sweetalert2/dist/sweetalert2.css";
```

You can also reference SweetAlert2's cdn in your HTML.


### Limitations
All methods that return a value (getters ie `isVisible`), and methods that return a promise (ie `queue`) are not supported.


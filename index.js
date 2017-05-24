import angular from 'angular'
import swal from 'sweetalert2'

const ngSwalModule = angular.module('ngSwal2', [])

.factory('Swal', ['$q', '$rootScope', function ($q, $rootScope) {
  function NgSwal (options) {
    return $q((resolve, reject) => {
      swal(options).then(resolve).catch(reject)
    })
  }
  return NgSwal
}])

.name

export default ngSwalModule

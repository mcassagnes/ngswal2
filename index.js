import angular from 'angular'
import swal from 'sweetalert2'

const ngSwalModule = angular.module('ngSwal2', [])

.factory('Swal', ['$q', '$rootScope', function ($q, $rootScope) {
  const NgSwal = (options) => {
    return $q((resolve, reject) => {
      swal(options).then(resolve).catch(reject)
    })
  }

  for (let k in swal) {
    NgSwal[k] = function () {
      const args = arguments
      $rootScope.$evalAsync(() => {
        swal[k].apply(this, args)
      })
    }
  }

  return NgSwal
}])

.name

export default ngSwalModule

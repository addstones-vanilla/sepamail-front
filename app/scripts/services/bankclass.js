'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.bankClass
 * @description
 * # bankClass
 * Factory in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('bankClass', function () {

    function Bank() {
      this.acceptable = [
        {name: 'lcl', cssClass: 'lcl-back-class', imgClass: 'lcl-img-class'},
        {name: 'fortuneo', cssClass: 'fortuneo-back-class', imgClass: 'fortuneo-img-class'},
        {name: 'socgen', cssClass: 'sg-back-class', imgClass: 'sg-img-class'},
        {name: 'cmb', cssClass: 'cmb-back-class', imgClass: 'cmb-img-class'}];
    }

    Bank.prototype.testIsAcceptable = function (bankClass) {
      for (var i = 0; i < this.acceptable.length; i++) {
        if (bankClass === this.acceptable[i].name) {
          return i;
        }
      }
      return false;
    };

    Bank.prototype.setBank = function (choosenBank) {
      this.choosenBank= choosenBank;
      var index = this.testIsAcceptable(this.choosenBank);
      this.actualBank = this.acceptable[index] || 'this bank is wrong';
      console.log(this.actualBank);
      return this.actualBank;
    };

    Bank.prototype.getClass = function () {
      return this.actualBank.cssClass;
    };

    Bank.prototype.getImgClass = function () {
      return this.actualBank.imgClass;
    };

    return new Bank();

  });

'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.testBankFact
 * @description
 * # testBankFact
 * Factory in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('testBankFact', function () {

    function Bank() {
      this.acceptable = [
        {name: 'lcl', cssClass: 'lcl-main-class'},
        {name: 'fortuneo', cssClass: 'fortuneo-main-class'},
        {name: 'SG', cssClass: 'sg-main-class'}];
    }

    Bank.prototype.testIsAcceptable = function (bankToTest) {
      for (var i = 0; i < this.acceptable.length; i++) {
        if (bankToTest === this.acceptable[i].name) {
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

    return new Bank();

  });

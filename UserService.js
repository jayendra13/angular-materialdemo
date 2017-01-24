'use strict';

angular.module('users')
  .service('userService', UserService);

function UserService($q) {
  var service = this;
  var users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-1',
      content: 'Lorem ipsum dolor sit amet, rationibus constituto incorrupte quo cu. Id veri menandri sed, epicuri partiendo scriptorem nam ex, per ut nullam vituperatoribus. An epicuri mentitum iracundia has, et prompta comprehensam ius. His ad menandri perpetua definiebas, cu vis elit vivendum. Aliquid philosophia in vix, nec ne vidisse disputando, adversarium repudiandae usu ad. Inermis hendrerit est no.'
    },
    {
      name: 'George Duke',
      avatar: 'svg-2',
      content: 'Vis propriae euripidis cu. Eum te natum ferri percipit, sed id sale aliquip. No vitae antiopam imperdiet mei. At per tollit diceret mnesarchum, iusto vidisse reprehendunt duo cu. Aliquip imperdiet et vel, eu laudem vivendo scriptorem cum.'
    },
    {
      name: 'Gener Delosreyes',
      avatar: 'svg-3',
      content: 'Eam at nemore latine aeterno, no vim dolorem similique. Nisl epicuri cu eam. Vim elit magna falli ex, ne qui conceptam necessitatibus. Ea pri primis dolores. Mea ceteros indoctum elaboraret an, recteque deseruisse reformidans ut ius, commune salutatus gloriatur est ei.'
    },
    {
      name: 'Lawrence Ray',
      avatar: 'svg-4',
      content: 'Sed te elit atqui iudico. Ei vim liber iusto feugait, probo viris imperdiet id qui. Laudem euismod senserit mea ex. Ludus fuisset efficiantur pri ad, mel habeo persequeris reformidans an. At veri tantas pri, vitae omittam adversarium no his. Ius et audiam discere facilis, falli graeci apeirian ea vis. Ludus animal interpretaris vim no, enim harum ornatus per ei. Cum melius lobortis eu. Mei ad exerci inciderint disputationi, duo antiopam efficiendi at.'
    },
  ];

  service.loadAllUsers = function() {
    /*return $q(function(resolve, reject) {
        resolve(users);
    });*/
    return $q.when(users);
  }
}

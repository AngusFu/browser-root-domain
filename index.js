var KEY = '__rT_dM__' + (+new Date());
var R = new RegExp('(^|;)\\s*' + KEY + '=1');
var Y1970 = (new Date(0)).toUTCString();

module.exports = function getRootDomain() {
  var domain = document.domain || location.hostname;
  var list = domain.split('.');
  var len = list.length;
  var temp = '';
  var temp2 = '';

  while (len--) {
    temp = list.slice(len).join('.');
    temp2 = KEY + '=1;domain=.' + temp;

    // try to set cookie
    document.cookie = temp2;
  
    if (R.test(document.cookie)) {
      // clear
      document.cookie = temp2 + ';expires=' + Y1970;
      return temp;
    }
  }
};


var flags = {};
var environment;
var baseUrl;

function initialize(env, options) {

}

function variation(key) {
  if(key==='true')
  {
      return true;
  }
  return false;
}

module.exports = {
  initialize: initialize
  
};

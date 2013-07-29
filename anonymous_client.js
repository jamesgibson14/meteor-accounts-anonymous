(function() {
  Meteor.loginAnonymously = function(fn) {
    Meteor.call('login', {anonymous: true}, function(err, result) {
    	if(!err) {
    		//console.log(result)
     		Accounts._makeClientLoggedIn(result.id, result.token);
	    	fn && fn(err,result);
      	}
    });
  }
})();
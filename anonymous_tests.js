
// if(Meteor.isServer) {
// 	Meteor.methods({
// 		'test/method': function() {
// 			return true;
// 		}
// 	})
// }

//if(Meteor.isClient) {
testAsyncMulti('anonymous-accounts -  Test account creation', [
	function(test, expect) {
		Meteor.loginAnonymously(expect(function(err, res) {
			test.isTrue((res.token && res.id))
		}));
	}
]);
//}
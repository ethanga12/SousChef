var SpoonacularApi = require('spoonacular_api');


var api = new SpoonacularApi.DefaultApi()
var username = 'dsky'; // {String} The username.
var hash = '4b5v4398573406'; // {String} The private hash for the username.
var inlineObject9 = new SpoonacularApi.InlineObject9(); // {InlineObject9}
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addToMealPlan(username, hash, inlineObject9, callback);

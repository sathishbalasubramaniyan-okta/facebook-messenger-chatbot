var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
var nonce=randomString(10);
var authorizeUrl="https://sathishb.okta.com/oauth2/default/v1/authorize?client_id=0oa17aqhu8F6wxeDl2p7&scope=openid profile email&response_type=code&redirect_uri=https://sathishbalasubramaniyan-eval-test.apigee.net/chatbot-feeder/callback&prompt=consent&consent_method=REQUIRED&state="+context.getVariable("psid")+"&nonce="+nonce;
context.setVariable("AuthorizeUrl",authorizeUrl);
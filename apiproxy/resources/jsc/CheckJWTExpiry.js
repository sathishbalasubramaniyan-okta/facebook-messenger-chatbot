var d = new Date();
var seconds = Math.round(d.getTime() / 1000);
var jwtExpirySeconds = Number(context.getVariable("expiry"));
if (seconds > jwtExpirySeconds) {
    context.setVariable("jwtexpired", true);
}
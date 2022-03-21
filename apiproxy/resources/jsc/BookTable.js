var user = JSON.parse(context.getVariable("getUserResponse.content"));
var seatingPreference = user.profile.seatingPreference;

function getTableNumber() {
    return Math.floor(Math.random()*100) + 1;
}

var message = {};
var messages = [];
if (seatingPreference) {
    message.text="We noticed your seating preference is " + seatingPreference;
    messages.push(message);
    message={};
}
message.text='Your table booking on '+context.getVariable("request.formparam.date")+' at ' + context.getVariable("request.formparam.time") + ' for ' + context.getVariable("request.formparam.count") + ' people is confirmed. Your table number is '+ getTableNumber();
messages.push(message);

var root={};
root.messages=messages;
response.headers['Content-Type']="application/json";
response.content=JSON.stringify(root);
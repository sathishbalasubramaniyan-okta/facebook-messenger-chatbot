var listOfFactors=JSON.parse(context.getVariable("getFactorsResponse.content"));

function checkSMSFactor(factor) {
    return factor.factorType === "sms";
}

var smsFactor = listOfFactors.find(checkSMSFactor);
var smsFactorId = smsFactor.id;

context.setVariable("smsFactorId", smsFactorId);
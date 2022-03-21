var user = JSON.parse(context.getVariable("getUserResponse.content"));
var dietRestriction = user.profile.dietRestriction;
var payload={};
payload.template_type="generic";
payload.image_aspect_ratio="square";
var elements = [];
var element = {};
var messages=[];
var message={};
if (!dietRestriction || (dietRestriction.toString() === null) || (dietRestriction.toString().trim().length === 0) || (dietRestriction.toString() === "None")) {
    element.title="Roasted Chicken";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gDl4KWSzSiQokUpmKos3T2w22I42abgQalkTI0ytGqXeyutWWA";
    element.subtitle="$3.50";
    elements.push(element);
    
    element={};
    element.title="Roasted Pork";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfosmSBbalkX5b8nzHYImixnTzW7Qw59bFsrVEpdhbplQIOm3";
    element.subtitle="$5.50";
    elements.push(element);
    
    element={};
    element.title="Pepperoni Pizza";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYwKp1UlQC14ArbDqPOEUsHrXc_WfRYpaPzbOm5I5FmYsO5i5";
    element.subtitle="$4.50";
    elements.push(element);
    
    element={};
    element.title="Fried Fish";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAb7V1ixInuBe68YPoVMLjMnWeetbc0VyEy3LTu1q0sgFgp6e";
    element.subtitle="$5.50";
    elements.push(element);
    
    element={};
    element.title="Hot Dogs";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXOJUgNNUkI8WgW6DFmlTmRo3BM3F343U56te7f_JNFU6Xr3lIA";
    element.subtitle="$6.00";
    elements.push(element);
} else if (dietRestriction.toString() === "Vegetarian" || dietRestriction.toString() === "vegetarian") {
    element.title="Vegetarian Cheese Roll";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0bkEphnoad0SsV8QVFJbGlz351Tux0XUG9lm_3QiprvA8idDgQ";
    element.subtitle="$3.50";
    elements.push(element);
    
    element={};
    element.title="Buttered Corn";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRdIbDkK1OiD8WCCmqgLJ-f4FdMcLuf6iS-CbBUOMdiJkF1MV-A";
    element.subtitle="$5.50";
    elements.push(element);
    
    element={};
    element.title="Corn Cheese Rolls";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZVZIcxGZCQCOpejla7UnU2KuEVnqDkiZSmn9-z-yWWVTSqoQ";
    element.subtitle="$4.50";
    elements.push(element);
    
    element={};
    element.title="Buttered Zuchini Corn";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtE9JaadiYUD7mHSHKCOy1j0JrwcIzdxxSnMccZWKLApFVZ0kTGA";
    element.subtitle="$5.50";
    elements.push(element);
    
    element={};
    element.title="Veggie Cheese Burger";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMkXabaG4ADjUJGsGmlfNSxnL3L46lIkJXA0b-5gf9deG__gj8g";
    element.subtitle="$6.00";
    elements.push(element);
    
    message.text="We noticed you are a vegetarian! Here is today's vegetarian menu";
    messages.push(message);
} else if (dietRestriction.toString() === "Vegan" || dietRestriction.toString() === "vegan") {
    element.title="Vegan hot dog";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdIPXlBqntT-4R_l2J3MgKfYOPFmCDSm4qOORzvKJVqKuHAAg";
    element.subtitle="$3.50";
    elements.push(element);
    
    element={};
    element.title="Vegan Salad";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToHdicHNj4nB6sRR8niELkOoZ0FIDPw71UybPYIU6PEFFrJKz";
    element.subtitle="$5.50";
    elements.push(element);
    
    element={};
    element.title="Vegan Burger";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp98tqcfhQ8UohX0S0eFK2qAntCScGlB60K_oVckV8eSf3zbh4";
    element.subtitle="$4.50";
    elements.push(element);
    
    element={};
    element.title="Vegan Tacos";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSHJosjSaKxLCJPiQfEV9LoMAZMwiwldhmK1Iy7_FllWakjnk";
    element.subtitle="$5.50";
    elements.push(element);
    
    element={};
    element.title="Grilled Beans";
    element.image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYp1wnjLl183KZkpjG-e6EAiCmPfPNAhmOr6HU1VyH4ZXp69fh0Q";
    element.subtitle="$6.00";
    elements.push(element);
    
    message.text="We noticed you are a vegan! Here is today's vegan menu";
    messages.push(message);
}
payload.elements=elements;
var attachment={};
attachment.type="template";
attachment.payload=payload;
message={};
message.attachment=attachment;
messages.push(message);

var kids=user.profile.kids;
var payload2={};
payload2.template_type="button";
var buttons=[];
var button={};
if ((kids) && (kids === "true")) {
    button.type="show_block";
    var block_names=[];
    block_names.push("Get Kids Menu");
    button.block_names=block_names;
    button.title="Get Kids Menu";
    buttons.push(button);
    payload2.text="We noticed you have kids. Would you like to see the kids menu or book a table?";
} else {
    payload2.text="Would you like to book a table?";
}
button={};
button.type="show_block";
var block_names=[];
block_names.push("Challenge MFA");
button.block_names=block_names;
button.title="Book a table";
buttons.push(button);
payload2.buttons=buttons;
var attachment2={};
attachment2.type="template";
attachment2.payload=payload2;
message={};
message.attachment=attachment2;
messages.push(message);
var root={};
root.messages=messages;
response.headers['Content-Type']="application/json";
response.content=JSON.stringify(root);



var user = JSON.parse(context.getVariable("getUserResponse.content"));
var kidsAllergies = user.profile.kidsAllergies;
var kidsMenu = [{"name":"Butterfly crackers with Orange slice-Lactose & Nut free","price":"$4.50","gluten":true,"lactose":false,"nuts":false,"imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVErbIog6qwDbBxYdvJtJMmWqVtBozjre_KvjVJfrdE5ytDN8o"},
{"name":"Fruit platter-Gluten, Lactose & Nut free","price":"$3.50","gluten":false,"lactose":false,"nuts":false,"imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwm-5-gQNulrsfxTzCdbRTkfs4BRS1JVS_M3NigytGBMM-56u"},
{"name":"Kids Pasta-Gluten & Nut free","price":"$5.50","gluten":false,"lactose":true,"nuts":false,"imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJqDGBupg6WR9XNtN-h8ER1DZTx5TrsParxMZpDsBmpIs-Akosw"},
{"name":"Egg Pasta Salad-Gluten & Lactose free","price":"$6.50","gluten":false,"lactose":false,"nuts":true,"imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYlVd_IJuL3FDOx1_YkkInIc1TbO4uwZB9ys3S2uNpnVI5CB2-g"},
{"name":"Kids Pizza-Lactose & Nut free","price":"$4.50","gluten":true,"lactose":false,"nuts":false,"imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRhcXnnTvkEQtL30u-DvORi5ynP1EXvIGBfEDnw0rfbVsVZTVrg"}];
var payload={};
payload.template_type="generic";
payload.image_aspect_ratio="square";
var elements = [];
var element = {};
var messages=[];
var message={};

function filterKidsMenu(menuItem) {
	var include=true;
	if ((kidsAllergies) && (kidsAllergies.length > 0)) {
		for (var i=0;i<kidsAllergies.length;i++) {
			var kidsAllergy=kidsAllergies[i];
			include = include && (!(menuItem[kidsAllergy.toLowerCase()]));
			if (!include) {
				return false;
			}
		}		
	}
	return true;
}

var kidsMenuFiltered = kidsMenu.filter(filterKidsMenu);

for (var i=0;i<kidsMenuFiltered.length;i++) {
	var menuItem=kidsMenuFiltered[i];
	element.title=menuItem.name;
    element.image_url=menuItem.imgUrl;
    element.subtitle=menuItem.price;
    elements.push(element);
    element={};
}
if ((kidsAllergies) && (kidsAllergies.length > 0)) {
    message.text="We noticed your kids are allergic to "+kidsAllergies.join()+". Here is today's kids menu without these ingredients";
    messages.push(message);
    message={};
} 

payload.elements=elements;
var attachment={};
attachment.type="template";
attachment.payload=payload;
message={};
message.attachment=attachment;
messages.push(message);

var payload2={};
payload2.template_type="button";
var buttons=[];
var button={};
button.type="show_block";
var block_names=[];
block_names.push("Challenge MFA");
button.block_names=block_names;
button.title="Book a table";
buttons.push(button);
payload2.text="Would you like to book a table?";
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
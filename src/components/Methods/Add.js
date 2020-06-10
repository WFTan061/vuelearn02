export function addLinkHelper(link,linkArray){
	//create new date and add to link. then add link to the link data of main app (app.vue).
	let newLink = link;
	newLink.dateCreated = new Date().toString();
	linkArray.push(newLink);
}
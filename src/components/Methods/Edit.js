export function editLinkHelper(link,links){
	let editedLink = {
		linkName:link.linkName,
		linkAddress:link.linkAddress,
		linkIcon:link.linkIcon,
		dateCreated:link.dateCreated,
	}
	let key;
	let keys = Object.keys(editedLink);
	for(key in keys){
		console.log(key);
	links[link.index][keys[key]] = editedLink[keys[key]];}
	console.log(link.index)
	console.log(editedLink)
	console.log(links);
	// console.log("editing link" + editedLink + links);
}
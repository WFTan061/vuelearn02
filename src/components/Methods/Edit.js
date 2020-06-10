export function editLinkHelper(link,links){
	//create variable key for iteration
	let key;
	//for iteration of object properties.
	let keys = Object.keys(link);
	//edit the corresponding link in the main link array to be same as edited data.
	for(key in keys){
		if(keys[key]!=='index'){
			links[link.index][keys[key]] = link[keys[key]];
		}
	}

	// console.log("editing link" + editedLink + links);
}
<template>
	<!-- table has index, link name, link path, link icon, edit button, delete button-->
	
	<div class = "container">
		<b-table :fields = "tableFields" :items = "links" responsive = "lg">
				<template v-slot:cell(index) = "data">
					{{data.index}} 
				</template>

				<template v-slot:cell(name) = "data">
					{{data.item.linkName}}
				</template>

				<template v-slot:cell(icon) = "data">
					<a v-bind:href = "data.item.linkAddress">
						<b-img thumbnail-fluid v-bind:src = "data.item.linkIcon"></b-img>
					</a>
				</template>	

				<template v-slot:cell(date) = "data">
					{{data.item.dateCreated}}
				</template>

				<template v-slot:cell(actions) = "data">
					<button @click="$emit('editLink',data.item)"><b-icon icon = "pencil"></b-icon></button>
					<button @click="$emit('deleteLink',data.index)"><b-icon icon = "trash"></b-icon></button>
				</template>
		</b-table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				tableFields:['index',{key:'name',label:'Name of Link'},{key:'icon',label:'Link'},{key:'date',label:'Date Created'},{key:'actions',label:'actions'}],
			}
		},
		props:['links'],
	}
</script>
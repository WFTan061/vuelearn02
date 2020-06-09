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
					<b-button v-b-modal="'linkModalEdit' + data.index" @click="toEdit(data.item)"><b-icon icon = "pencil"></b-icon></b-button>
					<b-modal v-bind:id = "'linkModalEdit' + data.index"
					>
						<b-form @submit.prevent>
							<b-form-group
								id="name"
								label = "Link Name"
								label-for = "linkname"
							>
								<b-form-input
								id="linkname"
								v-model = "editItem.linkName"
								type = "text"
								required
								placeholder = "Enter link name">
								</b-form-input>
							</b-form-group>
							<b-form-group
								id="address"
								label = "Link address"
								label-for = "linkaddress"
							>
								<b-form-input
								id="linkaddress"
								v-model = "editItem.linkAddress"
								type = "text"
								required
								placeholder = "Enter link address">
								</b-form-input>
							</b-form-group>
							<b-form-group
								id="name"
								label = "Link Icon"
								label-for = "linkicon"
							>
								<b-form-input
								id="linkicon"
								v-model = "editItem.linkIcon"
								type = "text"
								required
								placeholder = "Enter link icon path">
								</b-form-input>
							</b-form-group>
						</b-form>			
					</b-modal>
					<!--
						1) edit button to pull up modal
						2) bring up information into modal (Editable info.)
						3) 
					-->
					<b-button @click="$emit('deleteLink',data.index)"><b-icon icon = "trash"></b-icon></b-button>
				</template>

		</b-table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				tableFields:['index',{key:'name',label:'Name of Link'},{key:'icon',label:'Link'},{key:'date',label:'Date Created'},{key:'actions',label:'actions'}],
				editItem:{
					index:-1, //item to edit
					linkName:'', //name given to the link
					linkAddress:'', //address to be led to when link is clicked
					linkIcon:'',  //icon for the link.
					dateCreated:'',
				}
			}
		},
		props:['links'],
		methods:{
			toEdit(item){
				this.editItem = item;
			}
		}
	}
</script>
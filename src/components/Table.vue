<template>
	<!-- table has index, link name, link path, link icon, edit button, delete button-->
	
	<div class = "container">
		<b-table :fields = "tableFields" :items = "links" responsive = "lg">
				<!-- row data-->
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
				

				<!-- Action column contains 2 buttons leading to 2 functions, edit and delete.-->
				<template v-slot:cell(actions) = "data">
					<!-- 2 buttons-->
					<b-button v-b-modal="'linkModalEdit' + data.index" @click="toEdit(data.item,data.index)"><b-icon icon = "pencil"></b-icon></b-button>
					<b-button @click="$emit('deleteLink',data.index)"><b-icon icon = "trash"></b-icon></b-button>

					<!-- modal for edit form, change ok actions and reset modal every time hidden.-->
					<b-modal v-bind:id = "'linkModalEdit' + data.index"
					@ok="handleOk"
					@hidden="resetModal"
					>
						<b-form @submit.prevent>
							<b-form-group
								id="name"
								label = "index"
								label-for = "linkIndex"
							>
								<b-form-input
								id="linkIndex"
								v-model = "editItem.index"
								type = "text"
								readOnly
								>
								</b-form-input>
							</b-form-group>
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
								label-for = "linkAddress"
							>
								<b-form-input
								id="linkAddress"
								v-model = "editItem.linkAddress"
								type = "text"
								required
								placeholder = "Enter link address">
								</b-form-input>
							</b-form-group>
							<b-form-group
								id="icon"
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
							<b-form-group
								id="creation"
								label = "dateCreated"
								label-for = "creation"
							>
								<b-form-input
								id="creation"
								v-model = "editItem.dateCreated"
								type = "text"
								readOnly
								>
								</b-form-input>
							</b-form-group>
						</b-form>			
					</b-modal>
				</template>

		</b-table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				//table fields
				tableFields:['index',{key:'name',label:'Name of Link'},{key:'icon',label:'Link'},{key:'date',label:'Date Created'},{key:'actions',label:'actions'}],
				//data for edit form
				editItem:{
					index:-1, //item to edit
					linkName:'', //name given to the link
					linkAddress:'', //address to be led to when link is clicked
					linkIcon:'',  //icon for the link.	
					dateCreated:'',
				}
			}
		},
		//receive links from main app.
		props:['links'],
		methods:{
			//move row info into edit modal.
			toEdit(item,index){
				let keys = Object.keys(item);
				let key;
				for (key in keys){
					this.editItem[keys[key]] = item[keys[key]];
				}
				this.editItem.index = index;
			},
			//stop ok from performing normal function.
			handleOk(bvModalEvt){
				bvModalEvt.preventDefault();
				this.handleSubmit();
			},
			//reset modal when hiding modal (cancel/exit)
			resetModal(){
				this.editItem = {
					index:-1, //item to edit
					linkName:'', //name given to the link
					linkAddress:'', //address to be led to when link is clicked
					linkIcon:'',  //icon for the link.
					dateCreated:'',
				}
			},
			//custom function for modal, should edit item then hide the modal.
			handleSubmit(){
				this.$emit('editLink',this.editItem);
				this.$nextTick(function(){
					this.$bvModal.hide('linkModalEdit' + this.editItem.index);
				})
			}
		}
	}
</script>
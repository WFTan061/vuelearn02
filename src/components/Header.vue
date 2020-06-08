<template>
	<div>
		<b-button v-b-modal = "'modal-1'">Add</b-button>
		
		<b-modal id ="modal-1" title = "Add link">
			<b-form @submit.prevent>
				<b-form-group
					id="name"
					label = "Link Name"
					label-for = "linkname"
				>
					<b-form-input
					id="linkname"
					v-model = "form.linkName"
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
					v-model = "form.linkAddress"
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
					v-model = "form.linkIcon"
					type = "text"
					required
					placeholder = "Enter link icon path">
					</b-form-input>
				</b-form-group>
			</b-form>
		</b-modal>
	</div>
</template>
<script>
	export default{
		props:['testing',],
		data(){
			return{
				form:{
					linkName:'',
					linkAddress:'',
					linkIcon:'',
				}
			}
		}
	}
</script>
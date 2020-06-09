<template>
	<div>
		<b-button v-b-modal = "'modal-add'"	>Add</b-button>
		
		<b-modal id ="modal-add" title = "Add link" ref = "modal-add"
			@ok="handleOk"
			@hidden="resetModal"
			@show="resetModal"
			>
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
		data: function(){
			return{
				form:{
					linkName:'',
					linkAddress:'',
					linkIcon:'',
				}
			}
		},
		methods:{
			handleOk(bvModalEvt){
				bvModalEvt.preventDefault();
				this.handleSubmit();

			},
			handleSubmit(){
				console.log(this.form.linkName + " " + this.form.linkAddress + " " + this.form.linkIcon);
				this.$emit('addLink',this.form);
				this.$nextTick(function(){
					this.$bvModal.hide('modal-add');
				})
			},
			resetModal(){
				this.form = {
					linkName:'',
					linkAddress:'',
					linkIcon:'',
				}
			},
		}
	}
</script>
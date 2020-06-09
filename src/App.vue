<template>
  <div id="app">
    <Header
      @addLink="addLink"/>
    <Table
      v-bind:links="links"
      @editLink = "editLink"
      @deleteLink = "deleteLink"/>
  </div>
</template>

<script>
//vue components import
import Header from './components/Header.vue'
import Table from './components/Table.vue'
//methods import
import {addLinkHelper} from './components/Methods/Add.js';
import {deleteLinkHelper} from './components/Methods/Delete.js';
import {editLinkHelper} from './components/Methods/Edit.js';

export default {
  name: 'App',
    data:function(){
      return{
        links:[
        {
          linkName:'Google',
          linkAddress:'http://localhost:8080',
          linkIcon:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
          dateCreated:'10/10/2009'
        },
        {
          linkName:'Google',
          linkAddress:'http://localhost:8080',
          linkIcon:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
          dateCreated:'10/10/2009'
        }
        ],
      }
    },
  components: {
    Header,
    Table
  },
  methods:{
    addLinkHelper,
    editLinkHelper,
    deleteLinkHelper,
    addLink(link){
      addLinkHelper(link,this.links);
    },
    deleteLink(link){
      deleteLinkHelper(link,this.links);
    },
    editLink(link){
      editLinkHelper(link,this.links);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<!-- methods here??-->

<!--


-->
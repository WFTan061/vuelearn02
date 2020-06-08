<template>
  <div id="app">
    <Header testing = "1234"/>
    <Table/>
  </div>
</template>

<script>
//vue components import
import Header from './components/Header.vue'
import Table from './components/Table.vue'
//methods import
import {addLink} from './components/methods/Add.js';
import {deleteLink} from './components/methods/Delete.js';
import {editLink} from './components/methods/Edit.js';

export default {
  name: 'App',
  components: {
    Header,
    Table
  },
  methods:{
    addLink,
    deleteLink,
    editLink,
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
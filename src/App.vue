<template>
  <div id="app">
    <AddVocab/>
    <VocabList />
  </div>
</template>

<script>
import VocabList from './components/VocabList.vue'
import AddVocab from './components/AddVocab.vue'
export default {
  components:{
    VocabList,
    AddVocab,
  },

}
</script>

<style>
</style>

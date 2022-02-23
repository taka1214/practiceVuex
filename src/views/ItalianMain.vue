<template>
<div>
  <AddVocab/>
  <VocabList/>
</div>
</template>

<script>
import VocabList from '../components/ItalianVocabList.vue'
import AddVocab from '../components/ItalianAddVocab.vue'
export default {
  components:{
    VocabList,
    AddVocab,
  }
}
</script>

<style>

</style>
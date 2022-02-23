<template>
<div>
  <AddVocab/>
  <VocabList/>
</div>
</template>

<script>
import VocabList from '../components/EnglishVocabList.vue'
import AddVocab from '../components/EnglishAddVocab.vue'
export default {
  components:{
    VocabList,
    AddVocab,
  }
}
</script>

<style>

</style>
<template>
    <div class="wrapper">
    <tbody>
      <tr v-for="(vocab, index) in vocabs" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ vocab.english }}</td>
        <td>{{ vocab.japanese }}</td>
        <td @click="fetch(index)">
          <Textarea 
            :english="vocab.english" 
            @en="english = $event"
            :enChange="enModified"

            :japanese="vocab.japanese"
            @ja="japanese = $event"
            :jaChange="jaModified"
          />
        </td>
        <td><button @click="del(index)">削除</button></td>
      </tr>
    </tbody>
  </div>
</template>

<script>
import Textarea from './Textarea.vue'
export default {
  components:{
    Textarea,
  },
  data(){
    return{
      vocabs: "",
      enText: '',
      jaText: '',
      index: '',
    }
  },
  async mounted() {
    const res = await this.$axios.get('/english/show');
    this.vocabs = res.data
	},

  methods:{
    getText(text){
      console.log(text);
    },
    fetch(index){
      this.index = index
      return this.index;
    },
    enModified(event){
      const index = this.index
      let targetValue = this.vocabs[index];
      const modifiedValue = event.target.value; 
      
      this.$axios.put('/english/update/english', {
        modifiedEnglish: modifiedValue,
        targetEnglish: targetValue.english,
      }).then(res => targetValue.unshift(res.data))
      .catch(error => console.log(error))
    },
    jaModified(event){
      const index = this.index
      let targetValue = this.vocabs[index];
      const modifiedValue = event.target.value; 
      
      this.$axios.put('/english/update/japanese', {
        modifiedJapanese: modifiedValue,
        targetJapanese: targetValue.japanese,
      }).then(res => targetValue.unshift(res.data))
      .catch(error => console.log(error))
    },

    del(index){
      const targetVocab = this.vocabs[index];
      this.$axios
      .delete('/english/delete', {data: targetVocab})
      .then(() => {
        this.$router.push({path: '/delete'})
      })
      .then(() => {
        this.$router.go({path: '/show', force: true})
      })
      .catch(error => {
        console.log(error)
      })
    }
    
    
  },
}
</script>

<style>

</style>
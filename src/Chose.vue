<template>
  <div>
      <ul class="grade">
          <li v-for="(grade,index) in gradelist" :key="index" @click="chosen(index)" v-bind:class="grade.classObject">{{grade.grade}}</li>
      </ul>
      <ul class="discipline">
          <li>数学</li>
          <li>英语</li>
          <li>语文</li>
      </ul>
      <ul class="tescher">
          <li>张老师</li>
          <li>周老师</li>
          <li>王老师</li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{        
        gradelist:[
            {
                grade:'一年级',
                classObject:{
                    active: true,
                    noActive:false
                }
            },{
                grade:'二年级',
                classObject:{
                    active: false,
                    noActive:true
                }
            },{
                grade:'三年级',
                classObject:{
                    active: false,
                    noActive:true
                }
            }
        ]
      }		
    },
  methods:{
     chosen(index){
         if(this.gradelist[index].classObject.active==false&&this.gradelist[index].classObject.noActive){    
             this.gradelist[index].classObject.active=false;
             this.gradelist[index].classObject.noActive = true;      
             this.gradelist[index].classObject.active=true;
             this.gradelist[index].classObject.noActive = false;
             console.log(0)
         }else{
             this.gradelist[index].classObject.active=true;
             this.gradelist[index].classObject.noActive = false; 
             this.gradelist[index].classObject.active=false;
             this.gradelist[index].classObject.noActive = true;
             console.log(1)
         };
        
     }
     
  }
}
</script>
<style>
ul,li{list-style: none;}
ul{overflow: hidden}
li{float: left;padding: 10px;height: 24px;line-height: 24px;border-radius: 20%;}
li.active{background: lightskyblue;}
li.noActive{background:none;}
</style>

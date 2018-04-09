<template>
  <div>
      <ul class="grade">
          <li v-for="(grade,index) in gradelist" :key="index" @click="chose01(index)" v-bind:class="{active:gradelist[index].isActive}">{{grade.grade}}</li>
      </ul>
      <ul class="discipline">
          <li v-for="(discipline,index) in disciplinelist" :key="index" @click="chose02(index)" v-bind:class="{active:disciplinelist[index].isActive}">{{discipline.discipline}}</li>
      </ul>
      <ul class="tescher">
          <li>张老师</li>
          <li>周老师</li>
          <li>王老师</li>
      </ul>
      <!-- <yx-select title="选择学段：" :title-length="5" :data="select.period" :default-choose-index="periodIndex" @change="choosePeriod"></yx-select> -->
  </div>
</template>
<script>
import YxSelect from '@/components/YxSelect'
export default {
  data(){
      return{      
        gradelist:[
            {
                grade:'一年级',
                isActive: true,
            },{
                grade:'二年级',
                isActive: false,
            },{
                grade:'三年级',
                isActive: false,
            }
        ],
        disciplinelist:[
            {
                discipline:'数学',
                isActive: true,
            },{
                discipline:'英语',
                isActive: false,
            },{
                discipline:'语文',
                isActive: false,
            }
        ]
      }		
    },
  methods:{
     chose01(index){
         if(this.gradelist[index].isActive){   
             this.gradelist[index].isActive=false;
         }else{
             for(let i = 0;i<this.gradelist.length;i++){
                this.gradelist[i].isActive=false; 
             }    
             this.gradelist[index].isActive=true;
         };       
     },
     chose02(index){
         if(this.disciplinelist[index].isActive){   
             this.disciplinelist[index].isActive=false;
         }else{
             for(let i = 0;i<this.disciplinelist.length;i++){
                this.disciplinelist[i].isActive=false; 
             }    
             this.disciplinelist[index].isActive=true;
         };       
     } ,

  }  
}
</script>
<style>
ul,li{list-style: none;}
ul{overflow: hidden}
li{float: left;padding: 10px;height: 24px;line-height: 24px;border-radius: 20%;}
li.active{background: lightskyblue;}
</style>

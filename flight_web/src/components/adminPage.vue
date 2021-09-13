<template>
<div id="adminPage">
  <div class="heading">
    <h2>Admin UI</h2>
  </div>

  <div id="menu_bar" class="menu_bar">
    <div id="menu_box1" class="menu_box div_display icon"
         :class="panelState===1?'menu_box_select':''"
         @click="changePanel(1)">
        <span>userInfo</span>
    </div>
    <div id="menu_box2" class="menu_box div_display icon" style="left: 100px"
         :class="panelState===2?'menu_box_select':''"
         @click="changePanel(2)">
        <span>airport</span>
    </div>
  </div>

  <div id="user_panel" class="default_panel" v-show="panelState===1">
    <div id="u1_label" class="default_label div_display">
      <span>user name</span>
    </div>
    <div id="u2_label" class="default_label div_display">
      <span>phone number</span>
    </div>

    <div id="user_for"
         v-for="(userInfo,userIndex) in userInfoList">
      <div id="u1" class="default_item div_display item_first">
        <span>{{userInfo.userName}}</span>
      </div>
      <div id="u2" class="default_item div_display item_second">
        <span>{{userInfo.userPhoneNum}}</span>
      </div>
    </div>

  </div>

  <div id="airport_panel" class="default_panel" v-show="panelState===2">
    <div id="a1_label" class="default_label div_display">
      <span>Airport Name</span>
    </div>
    <div id="a2_label" class="default_label div_display">
      <span>Airport Location</span>
    </div>

    <div id="airport_for"
         v-for="(apInfo,apIndex) in airportInfoList">
      <div id="a1" class="default_item div_display item_first">
        <span>{{apInfo.airportName}}</span>
      </div>
      <div id="a2" class="default_item div_display item_second">
        <span>{{apInfo.airportLocation}}</span>
      </div>
    </div>

    <div class="item_first">
      <input v-model="airportNameInput" placeholder="Name">
    </div>
    <div class="item_second" style="height: 25px">
      <input v-model="airportLocInput" placeholder="Location">
    </div>

    <div id="airportButton" @click="addAirportLoc">
      <button>Add Location</button>
    </div>
  </div>

  <div class="bottom_button">
    <button @click="gotoCompany">Company UI</button>
  </div>
</div>
</template>

<script>
import "@/assets/css/adminStyle.css";
export default {
  name: "adminPage",
  data(){
    return{
      //panel state:1-userinfo 2-airport
      panelState:1,
      //user info
      userInfoList:[{
        userName:'11111',
        userPhoneNum:'1111'
      },{
        userName:'11111',
        userPhoneNum:'1111'
      },{
        userName:'11111',
        userPhoneNum:'1111'
      }],
      //airport info
      airportInfoList:[{
        airportName:'aaaaa',
        airportLocation:'bbbbbbbbb'
      },{
        airportName:'aaaaa',
        airportLocation:'bbbbbbbbb'
      }],
      //input
      airportNameInput:null,
      airportLocInput:null
    }
  },
  methods:{
    changePanel(panelState){
      this.panelState=panelState
    },
    addAirportLoc(){
      this.airportInfoList.push({
        airportName: this.airportNameInput,
        airportLocation: this.airportLocInput
      })
      this.airportNameInput=null
      this.airportLocInput=null
    },
    gotoCompany(){
      this.$router.push('/companyPage')
    }

  }
}
</script>

<style scoped>

</style>

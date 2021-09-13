<template>
<div id="companyPage">
  <div class="heading">
    <h2>Company UI</h2>
  </div>

  <div id="menu_bar" class="menu_bar">
    <div id="menu_box1" class="menu_box div_display icon"
         :class="panelState===1?'menu_box_select':''"
         @click="changePanel(1)">
      <span>routeInfo</span>
    </div>
    <div id="menu_box2" class="menu_box div_display icon" style="left: 100px"
         :class="panelState===2?'menu_box_select':''"
         @click="changePanel(2)">
      <span>userBought</span>
    </div>
  </div>

  <div id="route_panel" class="default_panel" style="border-width: 0px"
       v-show="panelState===1">
    <table cellspacing="0" align="center">
      <thead>
      <td width="15%">routeId</td>
      <td width="20%">start</td>
      <td width="30%">interval</td>
      <td width="20%">end</td>
      <td width="15%">take off</td>
      </thead>
      <tbody>
      <tr v-for="(route,rIndex) in routeList">
        <td>{{route.routeId}}</td>
        <td>{{route.startLoc}}</td>
        <td>{{route.intervalLoc}}</td>
        <td>{{route.endLoc}}</td>
        <td>{{route.takeOffTime}}</td>
      </tr>
      </tbody>
    </table>

    <div id="routeOption" class="add_panel">

      <input id="route1" v-model="routeIdInput">

      <select id="route2" class="route_input" v-model="startInput">
        <option></option>
        <option v-for="(loc,locIndex) in locationList">{{loc.airportLocation}}</option>
      </select>

      <select id="route3" class="route_input" v-model="intervalInput">
        <option></option>
        <option v-for="(loc,locIndex) in locationList">{{loc.airportLocation}}</option>
      </select>

      <select id="route4" class="route_input" v-model="endInput">
        <option></option>
        <option v-for="(loc,locIndex) in locationList">{{loc.airportLocation}}</option>
      </select>

      <input id="route5" v-model="takeOffInput">
    </div>

    <div id="route_button" >
      <button @click="createRoute">create new route</button>
    </div>
  </div>

  <div id="bought_panel" class="default_panel" v-show="panelState===2">
    <table cellspacing="0" align="center">
      <thead>
      <td width="20%">routeId</td>
      <td width="30%">userName</td>
      <td width="50%">phone number</td>
      </thead>
      <tbody>
      <tr v-for="(user,uIndex) in userBoughtList">
        <td>{{user.routeId}}</td>
        <td>{{user.userName}}</td>
        <td>{{user.userPhoneNum}}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <div class="bottom_button">
    <button @click="gotoAdmin">Admin UI</button>
  </div>

  <div class="bottom_button">
    <button @click="gotoUser">User UI</button>
  </div>

</div>
</template>

<script>
import "@/assets/css/companyStyle.css"
export default {
  name: "companyPage",
  data(){
    return{
      //1-route 2-bought
      panelState:1,
      //route object
      routeList:[{
        routeId:111,
        startLoc:222,
        intervalLoc:333,
        endLoc:444,
        takeOffTime:'21/9/10'
      }],
      routeIdInput:null,
      startInput:null,
      intervalInput:null,
      endInput:null,
      takeOffInput:null,

      locationList:[{
        airportName:'111',
        airportLocation:'aaa'
      },{
        airportName:'222',
        airportLocation:'bbb'
      },{
        airportName:'333',
        airportLocation:'ccc'
      }],

      //user bought object
      userBoughtList:[{
        userName:'111',
        userPhoneNum:'111',
        routeId:'111'
      },{
        userName:'222',
        userPhoneNum:'222',
        routeId:'222'
      },{
        userName:'333',
        userPhoneNum:'333',
        routeId:'333'
        }]
    }
  },
  methods:{
    changePanel(panelState) {
      this.panelState=panelState
    },
    createRoute(){
      this.routeList.push({
        routeId:this.routeIdInput,
        startLoc:this.startInput,
        intervalLoc:this.intervalInput,
        endLoc:this.endInput,
        takeOffTime: this.takeOffInput
      })
      this.routeIdInput=null
      this.startInput=null
      this. intervalInput=null
      this.endInput=null
      this.takeOffInput=null
    },
    gotoAdmin(){
      this.$router.push('/adminPage')
    },
    gotoUser(){
      this.$router.push('/userPage')
    }
  }
}
</script>

<style scoped>

</style>

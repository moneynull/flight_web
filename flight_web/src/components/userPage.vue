<template>
  <div id="userPage">
    <div class="heading">
      <h2>User Order UI</h2>
    </div>

    <div id="search_bar" class="search_bar">
      <div id="input_bar">
        <div id="search1">
          <input class="search_input" placeholder="departure">
        </div>
        <div id="search2">
          <input class="search_input" placeholder="destination">
        </div>
        <div id="search3">
          <input class="search_input" placeholder="take off time">
        </div>
      </div>

      <div id="search_button">
        <button>search route</button>
      </div>
    </div>

    <div id="flight_panel" class="flight_panel">
      <table cellspacing="0" align="center">
        <thead>
        <td>FlightId</td>
        <td>Departure</td>
        <td>Destination</td>
        <td>OffTime</td>
        <td>Price</td>
        </thead>
        <tbody>
        <tr v-for="(flight,fIndex) in flightInfoList"
            @click="selectFlight(fIndex)"
            :style="{'background-color':flightSelectIndex===fIndex?'rgba(133,133,133,0.5)':''}">
          <td>{{flight.flightId}}</td>
          <td>{{flight.departure}}</td>
          <td>{{flight.destination}}</td>
          <td>{{flight.offTime}}</td>
          <td>{{flight.price}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="bottom_button" style="top:250px">
      <button @click="gotoCompany">Company UI</button>
    </div>
  </div>
</template>

<script>
import '@/assets/css/userStyle.css'
export default {
  name: "userPage",
  data(){
    return{
      flightInfoList:[{
        flightId:'111',
        departure:'111',
        destination:'111',
        offTime:'21-9-10',
        price:111,
      },{
        flightId:'222',
        departure:'222',
        destination:'222',
        offTime:'21-4-20',
        price:222,
      }],
      flightSelectIndex:null,
    }
  },
  methods:{
    selectFlight(index){
        this.flightSelectIndex=
          this.flightSelectIndex===index?null:index
    },
    gotoCompany(){
      this.$router.push('/companyPage')
    }
  }
}
</script>

<style scoped>

</style>

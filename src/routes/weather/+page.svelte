<script lang="ts">
    import axios from "axios"
    import { onMount } from "svelte";

    let weather : {
        air_temperature :number;
        wind_speed : number;
        relative_humidity: number;

    }
    let releasedTime= "";
    const fetchData = async () => {

            navigator.geolocation.getCurrentPosition(async (position) => {
            const p=position.coords;
            const lat= p.latitude;
            const lon= p.longitude;
        
            const response = await axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`);
            weather = response.data.result;

            let today = new Date();
            let month = today.getMonth() +1;
            let date = today.getDate();
            let hours = today.getHours();

            let timeseries: [] = response.data.properties?.timeseries

            for(var i=0; i<timeseries.length; i++){
                const getTimeValue = timeseries[i].time;
                let koreaTime = new Date(getTimeValue);
                let koreaDate = koreaTime.getDate();
                let koreaHour = koreaTime.getHours();
    
            if(date == koreaDate){
                if(koreaHour == hours){
                    weather = timeseries[i].data.instant.details;
                }
            }

    }
            
        })
        
    }

    onMount(() => {
        fetchData();
    });


</script>
온도 : {weather?.air_temperature}
습도 : {weather?.relative_humidity}
바람 세기 : {weather?.wind_speed}
<style>

</style>
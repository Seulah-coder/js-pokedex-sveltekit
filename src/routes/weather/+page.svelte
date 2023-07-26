<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    import type { PageData } from "../$types";

    export let dbData : PageData;
    console.log(dbData);
    // $:({tutorials} = dbData);

    // dbData.tutorials.forEach((item: any) => {
    //     console.log('>>>>' +item.name);
    // });


    let weather : {
        air_temperature :number;
        wind_speed : number;
        relative_humidity: number;
        precipitation_amount: number;
    }

    let rainYn : string;
    let releasedTime= "";
    let location = "" || "현재";

    let lat: number;
    let lon: number;
    const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(async (position) => {
            const p=position.coords;
            lat= p.latitude;
            lon= p.longitude;
        
            getWeatherInfo(lat, lon, 0)
            
        });
    }

    const getWeatherInfo = async(lat: number, lon: number, time: number) => {
        const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`);
            let responseToJson =await response.json();

            let today = new Date();
            let month = today.getMonth() +1;
            let date = today.getDate(); 
            let hours = today.getHours();
            if(time > 0){
                    location = "출근";
                    if(hours < 23){
                        hours = hours + time;
                        console.log(hours);
                    }
            }

            let timeseries: any[] = responseToJson.properties?.timeseries
            releasedTime = responseToJson.properties?.meta.updated_at;

                for(var i=0; i<timeseries.length; i++){
                    const getTimeValue = timeseries[i].time;
                
                    let koreaNewDate = new Date(getTimeValue); //utc
                    let koreaDate = koreaNewDate.getDate();
                    let koreaHour = koreaNewDate.getHours();
                    
        
                    if(date == koreaDate){
                        if(koreaHour == hours){
                            console.log(koreaHour);
                            console.log(hours);
                            console.log(timeseries[i]);
                            weather = timeseries[i].data.instant.details;
                            rainYn = timeseries[i].data.next_1_hours.summary.symbol_code;
                        }
                    }
                } 
                
    }

    let form = {
        searchString : '',
        commuteTime: 0,
    };
    let searchString = '';
    let commuteTime = 0;

    const submitSearch= (e:Event) => {
        searchString = form.searchString //지역 정보
        //TODO 지역 정보로 좌표 가져오기

        commuteTime = form.commuteTime

        console.log(searchString, commuteTime);
        
        //일단 예시로 강남역 좌표
        const commutelat = 37.496486063;
        const commutelon = 127.028361548;
        getWeatherInfo(commutelat, commutelon, commuteTime);
    }

    const home = () =>{
        //form 리셋 후 현재 날씨 다시 불러오기
        //fetchData();
            location = "현재";
            if(form){
                console.log(location);
                form.commuteTime= 0;
                form.searchString = "";
                commuteTime = 0;
                getWeatherInfo(lat, lon, commuteTime);
                
            }
    }

    onMount(() => {
        fetchData();
    });


</script>

<div class="weather">



{#if weather}

    <p class="location">{location} 지역</p>
        온도 : {weather?.air_temperature || 0}
        습도 : {weather?.relative_humidity|| 0}
        바람 세기 : {weather?.wind_speed|| 0}
        비: {rainYn || "강수량 없음"}
        날씨 관측 시간 : {releasedTime}

{:else}

    <p>loading...</p>

{/if}

</div>


<form class="search-form" on:submit|preventDefault={submitSearch}>
    출근 지역:  <input class="search-field" type="text" bind:value={form.searchString} placeholder="commute place"/>
    <input type="radio" bind:group={form.commuteTime} value={1}>1시간
    <input type="radio" bind:group={form.commuteTime} value={2}>2시간
    <input type="radio" bind:group={form.commuteTime} value={3}>3시간
    <input type="submit" value="Search" />
</form>

<button on:click={() => home()}>현재 날씨</button>

<style>

</style>
import type { PageLoad } from "./$types"

// export type exportWeatherData = {
//     temp: number
//     windSpeed: number
//     humidity : number
//   }
// let weatherValueTest : exportWeatherData;
// let weatherData;

// async function getWeatherInfo(lat:number , lon:number) {
//     //2.가져온 lat, lon을 기준으로 해당 지역 날씨 정보 가져오기
//     const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`)
//     const json = await response.json()
//     weatherData = json;

//     console.log(weatherData.properties.meta.updated_at) // 업데이트 된 시간

//     //3. 현재 한국 시간 가져오기
//     let today = new Date();
//     let month = today.getMonth() +1;
//     let date = today.getDate();
//     let hours = today.getHours();

//     console.log(today, month, date, hours);

//     //4. 한국 시간에서 노르웨이 -7시간 빼기(시차계산)
//     let koreaTime;
    
//     let changedDate;
//     let changeHours
//     if(hours < 7){
//         changedDate = date -1;
//         changeHours = 24 - (7 - hours);// 7- lefthour = 결과 값을 24시간에서 빼기``  

//     } else {
//         changeHours = hours -7;
//     }

//     //5.time series에서 현재 계산한 시간과 비슷한거 가져오기(30분 전이면 이전거 30분 이후면 이후)instant
//     //시간 계산 다시 필요할 것 같음 korea time norway time다름

//     let timeseries:[] = weatherData.properties.timeseries;


//     let i :number;

//     for(i=0; i<timeseries.length; i++){
//         const getTimeValue = timeseries[i].time;
//         koreaTime = new Date(getTimeValue);
//         let koreaDate = koreaTime.getDate();
//         let koreaHour = koreaTime.getHours();
    
//         if(date == koreaDate){
//             if(koreaHour == hours){
//                 console.log(timeseries[i]);
//                 weatherValueTest  = {
//                     temp: timeseries[i].data.instant.details.air_temperature,
//                     windSpeed: timeseries[i].data.instant.details.wind_speed,
//                     humidity: timeseries[i].data.instant.details.relative_humidity
//                 }

//                 console.log(weatherValueTest);
                
                
//             }
//         }

//     }

//     return {
//         weatherValueTest:weatherValueTest
//     }
// }

// async function getLocationInfo() {
//     let weatherData;
//     //1.현재 지역 정보 가져오기
//     navigator.geolocation.getCurrentPosition(async (position) => {
//         const p=position.coords;
//         const lat= p.latitude;
//         const lon= p.longitude;

//         weatherData = await getWeatherInfo(lat, lon);
//         console.log(weatherData);

//     })
// }

// export const load = (async ({ fetch, url }) => {
//     console.log(typeof window);

//     if(typeof window !== 'undefined'){

//        const test = await getLocationInfo();
//        console.log(test);

//         return {
//             weatherValueTest:weatherValueTest
//         }
//     }
    
//   }) satisfies PageLoad
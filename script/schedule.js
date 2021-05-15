
// JSON Follows  Specfic Format
//   "Schedule": [
//       {
//           "time":"(Time can be any format)",
//           "date":"(Must be month / date ex:"12/6)"",
//          "Station: "(Station can be an format)""
 //       }, //!When adding more than one value add a comma
//          ...
//         ]
//
//
//
//

// *********************************    Only Edit JSON Below this Line  ***************************************************
const json_data={ 
       
    
  "Schedule" : [
      
      {
      "time":"2-3pm",
      "date":"06-10",
      "station":"KZSU"
  },
  {
      "time":"2-3pm",
      "date":"06-08",
      "station":"KZSU"
  },
  {
      "time":"4-5pm",
      "date":"06-9",
      "station":"NY"
  },
  {
      "time":"4-8pm",
      "date":"04-11",
      "station":"TEST"
  }


]
 }

// *********************************    Only Edit JSON Edit this Line  ***************************************************************

//Select DOM Elements
const table = document.querySelector("#table");
const tableHeading=document.querySelector('#table-heading-text')
//Accesing array of times
var raw_arr=json_data.Schedule
console.log(raw_arr)

//Filtering out times before the current Date

function filterArray(arr){
    const month=moment().get('month')+1
    const day=moment().get('date')
    
    const filtered_arr=arr.filter((schedule)=>{
        const day=moment(schedule.date, "MM-DD");
        
        return day.isAfter()
        if (day.isBefore()){
            console.log('Before')
        }else if(day.isAfter()){
            console.log('Is after')
        }
    })
    return filtered_arr
}
function sortArray(arr){
    const filtered_arr=arr.sort((firstSchedule,secondSchedule)=>{
        const firstMoment=moment(firstSchedule.date)
        const secondMoment=moment(secondSchedule.date)
        console.log(firstMoment)
        console.log(secondMoment)
        if(moment(firstMoment).isBefore(moment(secondMoment))){
            return -1
        }else{
            return 1
        }
    })
    return filtered_arr
}
function replaceArrayDateDash(arr){
    console.log(arr)
    arr=arr.forEach(element => {
        console.log(element.date)
        
    });
    return arr
}

function treatArray(raw_arr)
{
    var arr;
arr=filterArray(raw_arr)

return arr
}

const arr=treatArray(raw_arr)

console.log(arr)

let html=""
for (index in arr){
  const str=`
  <tr >
          <th >${arr[index].date}</th>
          <th>${arr[index].time} ${arr[index].station}</th>
          
     </tr>
  `
  html=html+str;
}
table.innerHTML=html



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
      "date":"05/10",
      "station":"KZSU"
  },
  {
      "time":"2-3pm",
      "date":"05/8",
      "station":"KZSU"
  },
  {
      "time":"4-5pm",
      "date":"05/9",
      "station":"NY"
  },
  {
      "time":"4-8pm",
      "date":"06/11",
      "station":"TEST"
  }


]
 }

// *********************************    Only Edit JSON Edit this Line  ***************************************************************

//Select DOM Elements
const table = document.querySelector("#table");
const tableHeading=document.querySelector('#table-heading-text')
//Accesing array of times
const arr=json_data.Schedule
console.log(arr)

//Filtering out times before the current Date
const month=moment().get('month')+1
const day=moment().get('date')
arr.filter((schedule)=>{
    const day=moment(schedule.date,"MM DD")
    console.log(day)
    if (moment(day).isBefore()){
        console.log('Before')
    }
})

let html=""
for (index in json_data.Schedule){
  const str=`
  <tr >
          <th >${arr[index].date}</th>
          <th>${arr[index].time} ${arr[index].station}</th>
          
     </tr>
  `
  html=html+str;
}


table.innerHTML=html


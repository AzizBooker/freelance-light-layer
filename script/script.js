/*
const pathText = document.querySelector("#myPath-text");
console.log(pathText);

pathText.textContent = `Jaco Pastorius - Portrait of Tracy / SWV - Rain / Sharon - Revoal Reaching for Our Star / Tirzah - Holding
    On / Taeko Unuki - Dare no Tame ni / DAngelo - Betray My Heart / Jason Ayala - Obscura / The Internet -
    Wanna Be / Erykah Badu - Bag Lady (Radio Edit) / Curtis Mayfield - No Thing on Me (Cocaine Song) / Freddie
    Mcgregor - Natural Collie / MF DOOM / Angelika / 4ize - Guinesses feat. Angelika / 4ize / Les Sins - Bellow
    / Wilma Archer - Scarecrow / Princess Nokia - Saggy Denim / King Krule - Biscuit Town / Parquet Courts -
    Human Performance
    
    
    
    `;
*/

const json_data={ 
       
    
  "Schedule" : [
      
      {
      "time":"2-3pm",
      "date":"5/8",
      "station":"KZSU"
  },
  {
      "time":"2-3pm",
      "date":"5/8",
      "station":"KZSU"
  },
  {
      "time":"4-5pm",
      "date":"5/9",
      "station":"NY"
  },
  {
      "time":"4-8pm",
      "date":"6/11",
      "station":"TEST"
  }


]
 }




const table = document.querySelector("#table");
const tableHeading=document.querySelector('#table-heading-text')

const arr=json_data.Schedule
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

console.log(html)

table.innerHTML=html
/*
const data = fetch("../Schedule.json")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    return response.Schedule;
  })
  .then((response) => {
    const html=response.map((schedule) => {
      return `
        <tr >
          <th >${schedule.date}</th>
          <th>${schedule.time} ${schedule.station}</th>
          
        </tr>
        `;
    });
    
    table.innerHTML=html.join("")
  });

  */

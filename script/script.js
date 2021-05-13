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
const table = document.querySelector("#table");
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
          <th >${schedule.time}</th>
          <th>${schedule.date}</th>
          <th>${schedule.station}</th>
        </tr>
        `;
    });
    
    table.innerHTML=html.join("")
  });

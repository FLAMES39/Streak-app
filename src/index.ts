interface ihabits{
  name : string,
  stopdate:string,
  icons:string
}

class StreakApp{
  //get data from dbjson
  async getStreaks () {
    //get data
    const response = await fetch("http://localhost:3000/habits")
    //convert data to json
    const streaks = await response.json() as ihabits[]
    //get the target container
    const signsContainer = document.querySelector("#signs") as HTMLDivElement
    //displlay habits html
    let html =""
    for (let i=0; i<streaks.length; i++){
      //if true display habits
      if(streaks[i]){
        //display each habit
        html += ` 
        <div class="sign1" style="border: 2px solid blue;">
                      <img src="${streaks[i].icons}" alt="" >
                      <p>${streaks[i].stopdate}</p>
                      <p>${streaks[i].name}</p>
        </div>`
      }
    }
    //add into the main container
    signsContainer.innerHTML=html

  }
}
//initialising our class
new StreakApp().getStreaks()

  
  
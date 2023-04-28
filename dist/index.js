"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StreakApp {
    //get data from dbjson
    getStreaks() {
        return __awaiter(this, void 0, void 0, function* () {
            //get data
            const response = yield fetch("http://localhost:3000/habits");
            //convert data to json
            const streaks = yield response.json();
            //get the target container
            const signsContainer = document.querySelector("#signs");
            //displlay habits html
            let html = "";
            for (let i = 0; i < streaks.length; i++) {
                //if true display habits
                if (streaks[i]) {
                    //display each habit
                    html += ` 
        <div class="sign1" style="border: 2px solid blue;">
                      <img src="${streaks[i].icons}" alt="" >
                      <p>${streaks[i].stopdate}</p>
                      <p>${streaks[i].name}</p>
        </div>`;
                }
            }
            //add into the main container
            signsContainer.innerHTML = html;
        });
    }
}
//initialising our class
new StreakApp().getStreaks();

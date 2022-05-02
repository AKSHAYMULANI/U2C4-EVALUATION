// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",addMatch)

function addMatch(){
    event.preventDefault()
    var scheduleArr = JSON.parse(localStorage.getItem("schedule"))|| []

    var matchObj = {
        MatchNumber: masaiForm.matchNum.value,
        TeamA: masaiForm.teamA.value,
        TeamB: masaiForm.teamB.value,
        Date: masaiForm.date.value,
        Venue: masaiForm.venue.value
    }

    scheduleArr.push(matchObj)
    console.log(scheduleArr)
    localStorage.setItem("schedule",JSON.stringify(scheduleArr))
}


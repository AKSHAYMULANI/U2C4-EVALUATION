// write js code here corresponding to matches.html

scheduleArr = JSON.parse(localStorage.getItem("schedule"))

display(scheduleArr)

function display(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(ele){
        var tr = document.createElement("tr")

        var td1= document.createElement("td")
        td1.innerText = ele.MatchNumber

        var td2= document.createElement("td")
        td2.innerText = ele.TeamA

        var td3= document.createElement("td")
        td3.innerText = ele.TeamB

        var td4= document.createElement("td")
        td4.innerText = ele.Date

        var td5= document.createElement("td")
        td5.innerText = ele.Venue

        var td6= document.createElement("td")
        td6.innerText = "Add Favourite"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function(){
            addFavourite(ele)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    });
}

function filterVenue(){
    var selected = document.querySelector("#filterVenue").value
    var filteredList = scheduleArr.filter(function(elem){
        
        return elem.Venue == selected
    })
    if(selected=="none"){
        display(scheduleArr)
    }
    else{
        display(filteredList)
    }
   
}

function addFavourite(ele){
    var FavouriteArr = JSON.parse(localStorage.getItem("favourites")) || []
    FavouriteArr.push(ele)

    localStorage.setItem("favourites", JSON.stringify(FavouriteArr))

    console.log(FavouriteArr)
}
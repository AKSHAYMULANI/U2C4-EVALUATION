// write js code here corresponding to favourites.html

var FavouriteArr = JSON.parse(localStorage.getItem("favourites"))

display(FavouriteArr)

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
        td6.innerText = "Delete"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function(){
            DeleteArr(ele)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    });
}

function DeleteArr(ele,index){
    FavouriteArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(FavouriteArr))
    window.location.reload()
}
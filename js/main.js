var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")

var siteList = []
var currentindex 
if(localStorage.getItem("datalist")!=null){
    siteList = JSON.parse(localStorage.getItem("datalist"))
    displayData()
}
function addSite() {
    if((checkName()==true) && (checkUrl()== true)){
    var count = 0
    var site = {
        name: siteName.value,
        urll: siteUrl.value,  
    }
    for(var i=0;i<siteList.length;i++){
        if(siteList[i].name==site.name){
            count=1
        }
        else count =0
    }
    if (count == 0){
    siteList.push(site)
    localStorage.setItem("datalist",JSON.stringify(siteList))
    displayData()
    document.getElementById("siteName").value=""
    document.getElementById("siteUrl").value=""
}
}
else {
    document.getElementById("alertbookm").style.display="flex";
}
}
function displayData() {
    var temp = ""
    console.log("displat=")
    for (var i = 0; i < siteList.length; i++) {
        temp += `<tr>
        <td>` + i + `</td>
        <td>`+ siteList[i].name + `</td>
        <td>
        <a onclick="visitsite(` + i + `)" href=`+ siteList[i].urll +` target="_blank" class="btn btnvisit text-decoration-none"> <i class="fa-regular fa-eye"></i> Visit</a>
        </td>
        <td>
        <button onclick="deletesite(` + i + `)" class="btn btndelete"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp
}
function deletesite(index){
    siteList.splice(index,1);
    localStorage.setItem("datalist",JSON.stringify(siteList))
    displayData();
}

function checkName(){
    var regexName = /^[A-Za-z]{3,10}[0-9]{0,}$/
    resultName = regexName.test(siteName.value)
    console.log(resultName)
    if (resultName == true){
        document.getElementById("correct").style.display="inline-block"
        document.getElementById("alertName").style.display="none"
           
        return true;
    }
    else{

        document.getElementById("correct").style.display="none"
        document.getElementById("alertName").style.display="inline-block"
      
        return false;

    }
}
function checkUrl(){
    var regexUrl = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
    resultUrl = regexUrl.test(siteUrl.value)
    console.log(resultUrl)
    if (resultUrl == true){
        document.getElementById("correctUrl").style.display="inline-block"
        document.getElementById("alertUrl").style.display="none"
        return true;

    }
    else{
        document.getElementById("correctUrl").style.display="none"
        document.getElementById("alertUrl").style.display="inline-block"
        return false;
    }
}
closeEl.addEventListener("click",closeFun)
function closeFun(){
    alertbookm.style.display="none";
}

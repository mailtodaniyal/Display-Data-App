function OutlineData() {
    var name = document.getElementById("name").value;
    var fathername = document.getElementById("fathername").value;
    var hobby = document.getElementById("hobby").value;
    var date = document.getElementById("date").value;
    var UserData = "<b>Name :<b>" + name + "<br><b>Father Name :<b>" + fathername + "<br><b>Hobby :<b>" + hobby + "<br><b>date :<b>" + date;
    return UserData;
}

function CheckData() {
    UserData = OutlineData();
    document.getElementById("result").innerHTML = UserData;
    document.getElementById("result").style.border = "1px solid blue";
    document.getElementById("result").style.padding = "10px";
}
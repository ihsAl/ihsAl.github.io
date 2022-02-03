
//var click = document.getElementById('submit');
//click.addEventListener('click', addData);

var arr = new Array();

function addData(){
    DeleteData();
    getData();
    
    arr.push({
        
        date:document.getElementById('date').value
        
    });

        localStorage.setItem("localData", JSON.stringify(arr));
}

function getData(){
    var str = localStorage.getItem("localData");
    if (str!= null)
        arr = JSON.parse(str);
}

function DeleteData(){
localStorage.clear();
}

function showData(){

  var arr1 = new Array();
  arr1 = JSON.parse(localStorage.getItem("localData"));

 

  var tbl = document.getElementById('animal');

  //for(i = 0; i < arr1.length; i++){
    
      var r = tbl.insertRow();
      
      var cell4 = r.insertCell();
     

      
      cell4.innerHTML = arr1[arr1.length-1].date;
     
  //}

}
var arr2 =new Array();
arr2 = JSON.parse(localStorage.getItem("localData"));
var notification = arr2[arr2.length-1].date;






/*var $status = document.getElementById('status');

if ('Notification' in window) {
  $status.innerText = Notification.permission;
}

function requestPermission() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }
  
  Notification.requestPermission(function (result) {
    $status.innerText = result;
  });
}*/

function nonPersistentNotification() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }
  
  try {
    var notification = new Notification("Hi there - non-persistent!");
  } catch (err) {
    alert('Notification API error: ' + err);
  }
}

function persistentNotification() {
  if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
    alert('Persistent Notification API not supported!');
    return;
  }
  
  try {
    navigator.serviceWorker.getRegistration()
      .then((reg) => reg.showNotification("Nächster Termin am:"+ notification))
      .catch((err) => alert('Service Worker registration error: ' + err));
  } catch (err) {
    alert('Notification API error: ' + err);
  }
}


if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(regEvent => console.log("Service worker registered!"))
      .catch(err => console.log("Service worker not registered"));
  });
}






    
    
    
  
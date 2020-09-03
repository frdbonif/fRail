// Station link lookup

var xmlhttp = new XMLHttpRequest();
XMLHttpRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var linksObj = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "/js/links.json", true);
xmlhttp.send();

console.log(linksObj)

function stnLink(crs) {
  console.log(`Looking up Arr/Dep link for ${crs}`);
}

function mapLink(crs) {
  console.log(`Looking up map link for ${crs}`)
}
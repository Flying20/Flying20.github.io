// Toggles between light and dark mode
function toggleDarkMode(e) {
  if (e.checked) {
    document.documentElement.style.setProperty("color-scheme", "dark");
    document.getElementById("darkmode2").innerHTML = "&#x2600&#xFE0F";
  }
  else {
    document.documentElement.style.setProperty("color-scheme", "light");
    document.getElementById("darkmode2").innerHTML = "&#x1F319";
  }
}

// Initialize dark mode toggle
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.getElementById("darkmode").checked = true;
  document.getElementById("darkmode2").innerHTML = "&#x2600&#xFE0F";
}

// Update the time every second
function updateTime() {
  postMessage(Date());
  setTimeout(updateTime, 1000);
}

/*
Chrome and Firefox does not allow running web workers from a local file.
The following workaround is found at https://stackoverflow.com/a/33432215/607407
*/

var worker = new Worker(URL.createObjectURL(new Blob(["("+updateTime.toString()+")()"], {type: "text/javascript"})));
worker.onmessage = function(event) {
  document.getElementById("time").innerHTML = event.data;
};

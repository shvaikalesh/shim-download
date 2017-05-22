(function() {
  "use strict"

  if ("function" != typeof navigator.msSaveBlob) return

  document.addEventListener("click", function(event) {
    var link = event.target
    if (!link || !link.hasAttribute("download")) return

    var name =
      link.getAttribute("download").trim() ||
      link.pathname.split("/").pop()

    var req = new XMLHttpRequest
    req.open("GET", link.href)
    req.send()

    req.responseType = "blob"
    req.onload = function() {
      if (req.status == 200)
        navigator.msSaveBlob(req.response, name)
    }

    event.preventDefault()
  })
})()
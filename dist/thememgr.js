const Enum = {
    LIGHT: 1,
    DARK : 2
}
let theme = localStorage.getItem("Theme")
changetheme(theme)
function changetheme(theme, set) {
    let html = document.getElementById("html")
    if (set) {
        localStorage.setItem("Theme", theme)
    }
    // It's fine to do it this way since the html element has no other classes
    if (theme == Enum.LIGHT) {
        html.className = ""
        theme = Enum.LIGHT
    } else {
        html.className = "dark"
        theme = Enum.DARK
    }
}
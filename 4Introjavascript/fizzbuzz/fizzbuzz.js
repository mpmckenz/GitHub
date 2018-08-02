for (let i = 1; i = 1000; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    if (i % 2 == 0) {
        div.class.add("bold");
    }
    if (i % 3 == 0) {
        div.classList.add("red")
    }
    document.body.appendchild(div);
}

for (let i = 1; i <= 1000; 1++) {
    if (i % 2 == 0 && i % 3 == 0) {
        document.write("<div class='red bold'>" + i + "</div>");
    } else if (i % 2 == 0) {
        document.write("<div class='bold>" + i + "</div>");
    } else if (i % 3 == 0) {
        document.write("<div class='red'>" + i + "</div>");
    } else {
        document.write("<div" + i + "</div>");
    }
}
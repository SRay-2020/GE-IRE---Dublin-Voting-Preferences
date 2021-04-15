var li_elements = document.querySelectorAll(".wrapper-left ul li");
var item_elements = document.querySelectorAll(".item");
var map_elements = document.querySelectorAll(".svg a")
for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function () {
        li_elements.forEach(function (li) {
            li.classList.remove("active");
        })
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");

        map_elements.forEach(function (a) {
            a.classList.remove("active");
        })
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");

        item_elements.forEach(function (item) {
            item.style.display = "none";
        })


        if (li_value == "fingal") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dbn") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dbs") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dc") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dmw") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dnw") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "drd") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dsc") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dsw") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dw") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "dl") {
            document.querySelector("." + li_value).style.display = "block";
        } else {
            console.log("not work");
        }
    });
}
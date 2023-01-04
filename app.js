document.addEventListener("DOMContentLoaded", function () {
    let backBtn = document.querySelector("#btn-back"),
        forwBtn = document.querySelector("#btn-forw"),
        homeBtn = document.querySelector("#btn-home"),
        inputAddress = document.querySelector("#input-address"),
        searchBtn = document.querySelector("#search-btn"),
        cvBtn = document.querySelector("#cv-btn"),
        fccBtn = document.querySelector("#fcc-btn"),
        gitBtn = document.querySelector("#git-btn"),
        facebookBtn = document.querySelector("#f-btn"),
        stackIstoric = document.querySelector("#stack-istoric"),
        stackBackup = document.querySelector("#stack-backup"),
        navTitle = document.querySelector("#nav-title"),
        stack = [], stack2 = [], current = "";

    let addStackRow = (where, what) => {
        let row = document.createElement("div");
        row.classList.add("stack-row");
        row.innerText = what;
        where.insertAdjacentElement('afterbegin', row);
    }

    let removeStackRow = (where) => {
        where.removeChild(where.firstElementChild);
    }

    let add = (click) => {
        inputAddress.value = click;
        if (current.length == 0) {
            current = click;
            navTitle.style.display = "block";
            navTitle.innerText = click;
        } else {
            stack.push(current);
            addStackRow(stackIstoric, current);
            current = click;
            navTitle.innerText = click;
        }
    }

    backBtn.addEventListener("click", function () {
        if (stack.length > 0 && current.length > 0) {
            stack2.push(current);
            addStackRow(stackBackup, current);
            let x = stack.pop();
            current = x;
            navTitle.innerHTML = x;
            removeStackRow(stackIstoric);
            inputAddress.value = x;
        }
    });

    forwBtn.addEventListener("click", function () {
        if (stack2.length > 0 && current.length > 0) {
            stack.push(current);
            addStackRow(stackIstoric, current);
            let x = stack2.pop();
            current = x;
            removeStackRow(stackBackup);
            navTitle.innerHTML = x;
            inputAddress.value = x;
        }

    });

    searchBtn.addEventListener("click", function () {
        let s = inputAddress.value;
        if (s.length > 0) {
            add(s);
        }
    })

    homeBtn.addEventListener("click", function () {
        add("htttps://www.google.ro");
    });

    cvBtn.addEventListener("click", function () {
        add("https://cv.upt.ro");
    });

    fccBtn.addEventListener("click", function () {
        add("https://www.freecodecamp.org");
    });

    gitBtn.addEventListener("click", function () {
        add("https://www.github.com/");
    });

    facebookBtn.addEventListener("click", function () {
        add("https://www.facebook.com");
    });


});
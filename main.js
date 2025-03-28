document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("bg1"); 

    var typed = new Typed("#typed-text", {
        strings: ["TEXT GRADIENTS", "Make your headlines stand out", "Create Stunning Effects!"],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500,
        backDelay: 2000,
        loop: true,
        onStringTyped: function (arrayPos, self) {
            document.body.className = ""; 
            if (arrayPos === 0) {
                document.body.classList.add("bg1");
            } else if (arrayPos === 1) {
                document.body.classList.add("bg2");
            } else if (arrayPos === 2) {
                document.body.classList.add("bg3");
            }
        }
    });
});

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".timeline-el").forEach(function(move){
        let moving_value = move.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX*moving_value)/10000;
        let y = (window.innerHeight - e.pageY*moving_value)/10000;

        move.style.transform = `translateX(${x}em) translateY(${y}em)`;

    })
}

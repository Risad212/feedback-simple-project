let starts = document.getElementsByClassName('fas')
let emoji = document.getElementById('emoji')

starts[0].onclick = function(){
    starts[0].style.color = "#ffd93b"
    starts[1].style.color = "#e4e4e4"
    starts[2].style.color = "#e4e4e4"
    starts[3].style.color = "#e4e4e4"
    starts[4].style.color = "#e4e4e4"
    emoji.style.transform = 'translateX(0)';
}

starts[1].onclick = function(){
    starts[0].style.color = "#ffd93b"
    starts[1].style.color = "#ffd93b"
    starts[2].style.color = "#e4e4e4"
    starts[3].style.color = "#e4e4e4"
    starts[4].style.color = "#e4e4e4"
    emoji.style.transform = 'translateX(-100px)';
}

starts[2].onclick = function(){
    starts[0].style.color = "#ffd93b"
    starts[1].style.color = "#ffd93b"
    starts[2].style.color = "#ffd93b"
    starts[3].style.color = "#e4e4e4"
    starts[4].style.color = "#e4e4e4"
    emoji.style.transform = 'translateX(-200px)';
}

starts[3].onclick = function(){
    starts[0].style.color = "#ffd93b"
    starts[1].style.color = "#ffd93b"
    starts[2].style.color = "#ffd93b"
    starts[3].style.color = "#ffd93b"
    starts[4].style.color = "#e4e4e4"
    emoji.style.transform = 'translateX(-300px)';
}

starts[4].onclick = function(){
    starts[0].style.color = "#ffd93b"
    starts[1].style.color = "#ffd93b"
    starts[2].style.color = "#ffd93b"
    starts[3].style.color = "#ffd93b"
    starts[4].style.color = "#ffd93b"
    emoji.style.transform = 'translateX(-400px)';
}
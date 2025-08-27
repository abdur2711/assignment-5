
function heartIncrements(id) {
    const heartCount = parseInt(document.getElementById(id).innerText);
    parseInt(document.getElementById(id).innerText = heartCount + 1);
    return heartCount;
}

// heart count by clicking heart icons
document.getElementById('heart-1').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-2').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-3').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-4').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-5').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-6').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-7').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-8').addEventListener('click', function(){
    heartIncrements('heart-count');
});
document.getElementById('heart-9').addEventListener('click', function(){
    heartIncrements('heart-count');
});




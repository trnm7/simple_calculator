let first;
let second;
document.getElementById('calc').addEventListener('submit', function(event){
    event.preventDefault();
    first = parseInt(document.getElementById("fno").value);
    second = parseInt(document.getElementById("sno").value);
})
answer = function() {
    document.getElementById('answer').innerText = "The answer is " + (first + second);
}


// reset or clear
function resetPage(){
    document.getElementById("odata").remove("innerHTML");
    location.reload();

}

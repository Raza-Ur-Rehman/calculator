function setnumber(num){
    var input = document.getElementById("number")
    input.value += num
}
function ans(num){
    var input = document.getElementById("number")
    var output = eval(input.value)
    input.value = output
}
function allclear(){
    var input = document.getElementById("number")
    input.value = ""
}
 function del() {
    var input = document.getElementById("number")
     var inputValue = input.value
     // console.log(input.value.slice(0, -1))
     input.value = inputValue.slice(0, -1)
 }
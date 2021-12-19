var a = +prompt('введите первое число')
var b = +prompt('введите второе число')
var v = +prompt('введите третье число')


if(a>b&&b>v){
    alert(b+' эт среднее число');
}else if(a>v&&v>b){
    alert(v+' эт среднее число');
}else if(b>a&&a>v){
    alert(a+' эт среднее число');
}else if(b>v&&v>a){
    alert(v+' эт среднее число');
}else if(v>b&&b>a){    
    alert(b+' эт среднее число')
}else if(v>a&&a>b){
    alert(a+' эт среднее число');
}else{
    alert('математики')
}
    
    
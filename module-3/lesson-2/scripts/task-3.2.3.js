function get_full_name (first_name, last_name){
  let full_name = first_name + ' ' + last_name;
  return full_name;
}

var f_name ='Laura';
var l_name ='Baines';

var f_name2 ='Simon';
var l_name2 ='Baines';


var full_name1 = get_full_name(f_name, l_name);
console.log(full_name1);
var full_name2 = get_full_name(f_name2, l_name2);
console.log(full_name2);
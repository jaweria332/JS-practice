var scope = "Global Scope";

function check_scope() {
var scope = "Local Scope";
function f() {
return scope; }
return f(); 
}

check_scope();
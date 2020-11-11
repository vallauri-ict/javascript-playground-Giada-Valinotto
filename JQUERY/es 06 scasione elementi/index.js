'use strict'
let _wrapper;
//le funz. rihiamate da html vanno fuori
function evidenzia(selector){
_wrapper.children(selector).ccs({"backgroundColor":"#FF0"})
}
$(document).ready(function() {
_wrapper=$("#wrapper");
});
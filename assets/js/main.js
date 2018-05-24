
window.onload = function () {
        $('#year').html(whatYearIsIt());
    };


function whatYearIsIt(){
    var d = new Date();
    var n = d.getFullYear();
    return n;
}

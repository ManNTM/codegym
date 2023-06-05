Array.prototype.map2 = function(myCallBack){ 
    var arrLength = this.length; 
    for(var i =0 ; i<arrLength; i++) { 
        myCallBack(this[i], i); } 
} 
var courses = [ 
    'Javascript', 'PHP', 'Ruby' 
]; 

function myCallBack(course, index){ 
    console.log(index, course) 
} courses.map2(myCallBack); 
// var htmls = courses.map2(function(course){ // return <h2>${course}</h2>

var promise = new Promise(
    function(resolve, reject) {

    }
);

promise
    .then(function() {
        console.log('Succes')
    })
    .catch(function() {
        console.log('Fail')
    })
    .finally(function() {
        console.log('Done')
    });
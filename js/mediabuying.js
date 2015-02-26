
 
var pathObj = {
    "draw": {
        "strokepath": [
            {
                "path": "M 23.019,46.1 L 123.79,46.13   123.79,105.998 23.019,105.998 23.019,56.169 ",
                "duration": 600
            },
            {
                "path": "M 134.202,105.81 L 134.202,35.532   12.606,35.532 12.606,116.596 134.202,116.596 ",
                "duration": 600
            },
            {
                "path": "M93.159,76.064  c0,10.908-8.845,19.755-19.755,19.755c-10.911,0-19.755-8.847-19.755-19.755c0-10.913,8.844-19.756,19.755-19.756  C84.314,56.309,93.159,65.151,93.159,76.064z",
                "duration": 600
            },
            {
                "path": "M 63.364,65.60 L 63.364,65.605   83.444,76.482 63.364,86.522 63.364,76.482 ",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 147,
            "height": 153
        }
    }
}; 
 
 
 

 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){
   
 
 $('#draw').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "blue"
}).lazylinepainter('paint'); 



$( "#draw" ).hover(
function(){
                $('#draw').lazylinepainter('erase').lazylinepainter('paint');
}
    );
 });

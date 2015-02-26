var pathObj = {
    "technology": {
        "strokepath": [
            {
                "path": "M 50.448,52.78 L 27.171,76.064   50.342,99.232 ",
                "duration": 600
            },
            {
                "path": "M 61.979 110.659 L 84.83 41.469",
                "duration": 600
            },
            {
                "path": "M 96.574,52.78 L 119.638,75.85   96.414,99.072 ",
                "duration": 600
            },
            {
                "path": "M 26.851,29.93 L 15.319,29.938   15.319,122.191 26.851,122.191 ",
                "duration": 600
            },
            {
                "path": "M 119.317,122.19 L 131.489,122.191   131.489,29.938 119.317,29.938 ",
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
   
 
 $('#technology').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#007BE1"
}).lazylinepainter('paint'); 



$( "#technology" ).hover(
function(){
                $('#technology').lazylinepainter('erase').lazylinepainter('paint');
}
    );
 });

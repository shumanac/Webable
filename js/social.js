
 
var pathObj = {
    "draw": {
        "strokepath": [
             {
                "path": "M 93.389,97.46 L 93.389,111.812   107.479,97.718 135.404,97.718 135.404,28.289 38.05,28.289 38.05,96.95 79.553,96.95 ",
                "duration": 600
            },
            {
                "path": "M 38.05,41.34 L 11.404,41.346   11.404,110.519 38.05,110.519 51.37,123.839 51.37,110.519 79.553,110.519 ",
                "duration": 600
            },
            {
                "path": "M 52.396 46.513 L 79.553 46.513",
                "duration": 600
            },
            {
                "path": "M 52.396 59.834 L 121.521 59.834",
                "duration": 600
            },
            {
                "path": "M 52.396 73.925 L 121.521 73.925",
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
    "strokeColor": "#007BE1"
}).lazylinepainter('paint'); 



$( "#draw" ).hover(
function(){
                $('#draw').lazylinepainter('erase').lazylinepainter('paint');
}
    );
 });

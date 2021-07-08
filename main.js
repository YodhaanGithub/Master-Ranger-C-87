var canvas= new fabric.Canvas('myCanvas');
 red_image_width= 200;
 red_image_height= 400;

 red_x=50;
 red_y=0;

 green_x=250;
 yellow_x=350;
 pink_x=600;
 blue_x=650;
var player_object="";
 
 var block_object="";

 function new_redimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object= Img;
         
    block_object.scaleToWidth(red_image_width);
        block_object.scaleToHeight(red_image_height);
        block_object.set({
       top:red_y,
       left:red_x
    });
        canvas.add(block_object);
       });  
}
function new_greenimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object= Img;
         
    block_object.scaleToWidth(red_image_width);
        block_object.scaleToHeight(red_image_height);
        block_object.set({
       top:red_y,
       left:green_x
    });
        canvas.add(block_object);
       });  
}
function new_yellowimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object= Img;
         
    block_object.scaleToWidth(red_image_width);
        block_object.scaleToHeight(red_image_height);
        block_object.set({
       top:red_y,
       left:yellow_x
    });
        canvas.add(block_object);
       });  
}
function new_pinkimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object= Img;
         
    block_object.scaleToWidth(red_image_width);
        block_object.scaleToHeight(red_image_height);
        block_object.set({
       top:red_y,
       left:pink_x
    });
        canvas.add(block_object);
       });  
}
function new_blueimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object= Img;
         
    block_object.scaleToWidth(red_image_width);
        block_object.scaleToHeight(red_image_height);
        block_object.set({
       top:red_y,
       left:blue_x
    });
        canvas.add(block_object);
       });  
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
        key_values= e.keyCode;
        console.log(key_values);

    if(key_values == '82'){
        new_redimage('rr1.png');
        console.log("r is being pressed");
    }
    if(key_values == '71'){
        new_greenimage('gr.png');
        console.log("g is being pressed");
    }
    if(key_values == '89'){
        new_yellowimage('yr.png');
        console.log("y is being pressed");
    }
    if(key_values == '80'){
        new_pinkimage('pr.png');
        console.log("p is being pressed");
    }
    if(key_values == '66'){
        new_blueimage('br.png');
        console.log("b is being pressed");
    }
}   
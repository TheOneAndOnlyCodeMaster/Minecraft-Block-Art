canvas = new fabric.Canvas('myCanvas');

block_width_img = 30;
block_height_img = 30;

player_pos_x = 10;
player_pos_y = 10;

var player_object = "";
function load_the_imag_player(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_pos_y,
            left:player_pos_x
        });
        canvas.add(player_object);
    })
}

var block_object="";

function load_the_imag_block(get_image){
    fabric.Image.fromURL(get_image, function(img){
        block_object = img;
        block_object.scaleToWidth(block_width_img);
        block_object.scaleToHeight(block_height_img);    
        block_object.set({
            top:player_pos_y,
            left:player_pos_x
        });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPress = e.keyCode;
console.log(keyPress);

if(e.shiftKey && keyPress == '77'){
console.log("shift and m are pressed together");
block_height_img = block_height_img - 10;
block_width_img = block_width_img - 10;
document.getElementById("current_height").innerHTML = block_height_img;
document.getElementById("current_width").innerHTML = block_width_img;
}
if(e.shiftKey && keyPress == '80'){
    console.log("shift and p are pressed together");
    block_height_img = block_height_img + 10;
    block_width_img = block_width_img + 10;
    document.getElementById("current_height").innerHTML =block_height_img;
    document.getElementById("current_width").innerHTML = block_width_img;
}
if(keyPress == '84'){
    console.log("t is being pressed");
    load_the_imag_block('trunk.jpg');
}
if(keyPress == '68'){
    console.log("d is being pressed");
    load_the_imag_block('dark_green.png');
}
if(keyPress == '76'){
    console.log("l is being pressed");
    load_the_imag_block('light_green.png');
}
if(keyPress == '71'){
    console.log("g is being pressed");
    load_the_imag_block('ground.png');
}
if(keyPress == '87'){
    console.log("w is being pressed");
    load_the_imag_block('wall.jpg');
}
if(keyPress == '89'){
    console.log("y is being pressed");
    load_the_imag_block('yellow_wall.png');
}
if(keyPress == '82'){
    console.log("r is being pressed");
    load_the_imag_block('roof.jpg');
}
if(keyPress == '67'){
    console.log("c is being pressed");
    load_the_imag_block('cloud.jpg');
}
if(keyPress == '85'){
    console.log("u is being pressed");
    load_the_imag_block('unique.png');
}
if(keyPress == '38'){
    console.log('up');
    up();
}
if(keyPress == '40'){
    console.log('down');
    down();
}
if(keyPress == '37'){
    console.log('left');
    left();
}
if(keyPress == '39'){
    console.log('right');
    right();
}
if(keyPress == '79'){
    console.log("o is being pressed");
    load_the_imag_block('Dark_Oak_Door_JE3_BE2.png');
}
}
function up(){
    if(player_pos_y >= 0){
        player_pos_y = player_pos_y - block_height_img;
        console.log("player position y =" + player_pos_y + ", block height =" + block_height_img);
        canvas.remove(player_object);
        load_the_imag_player();
    }
}
function down(){
    if(player_pos_y <= 460){
        player_pos_y = player_pos_y + block_height_img;
        console.log("player position y =" + player_pos_y + ", block height =" + block_height_img);
        canvas.remove(player_object);
        load_the_imag_player();
    }
}
function right(){
    if(player_pos_x <= 850){
        player_pos_x = player_pos_x + block_width_img;
        console.log("player position x =" + player_pos_x + ", block width =" + block_width_img);
        canvas.remove(player_object);
        load_the_imag_player();
    }
}
function left(){
    if(player_pos_x >= -30){
        player_pos_x = player_pos_x - block_width_img;
        console.log("player position x =" + player_pos_x + ", block width =" + block_width_img);
        canvas.remove(player_object);
        load_the_imag_player();
    }
}
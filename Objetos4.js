img="";
status="";
objects=[];

function Start(){
    window.location="objetos.html";
}

function preload(){
    img=loadImage('Libros.jpg');
}

function setup(){
    canvas=createCanvas(500,650);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Estatus: detectando objetos";
}

function modelLoaded(){
    console.log("¡Modelo cargado!");
    status=true;
    objectDetector.detect(img,gotResult);
}

function draw(){
    image(img,0,0,640,700);
    if(status !="");
    {
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Estatus objeto detectado";
            fill("#FFFF00");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);
        objects=results;
}
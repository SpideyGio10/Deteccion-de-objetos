img="";
status="";
objects=[];

function Start(){
    window.location="Objetos2.html";
}

function preload(){
    img=loadImage('Objetos.jpg');
}

function setup(){
    canvas=createCanvas(550,650);
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
            document.getElementById("status").innerHTML="Hay tres objetos el modelo solo reconocio 2";
            fill("#FFFF00");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    fill("#FF0000");
    text("Cubo",265,450);
    noFill();
    stroke("#FF0000");
    rect(265,450,200,200);

    fill("#FF0000");
    text("Lampara",265,10);
    noFill();
    stroke("#FF0000");
    rect(155,10,250,420);

    fill("#FF0000");
    text("Bote",420,230);
    noFill();
    stroke("#FF0000");
    rect(420,230,130,210);

}

function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        objects=results;
    }
}
img="";
status="";
objects=[];

function preload(){
    img=loadImage('Sabri.jpg');
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
            document.getElementById("status").innerHTML="Hay 2 objetos el modelo reconocio todas";
            fill("#FFFF00");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    fill("#FF0000");
    text("Perrito",100,260);
    noFill();
    stroke("#FF0000");
    rect(100,260,400,300);

    fill("#FF0000");
    text("Peluche",10,500);
    noFill();
    stroke("#FF0000");
    rect(10,500,220,150);

}

function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        objects=results;
    }
}
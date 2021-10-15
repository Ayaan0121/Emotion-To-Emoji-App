var p1 ="";
var p2 ="";
//set webcamera property 
 Webcam.set({
     width:350,
     height:300,
     image_format:'png',
     png_quality:90
 });

 Camera=document.getElementById("camera");

 //display live webcam 
  Webcam.attach('#camera');

  function take_snapshot(){
      Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri +'"/>';
      });
  }
//console 
 console.log(ml5.version);

 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GxI8VML44C/model.json' , modelLoaded)

 function modelLoaded() {
    console.log("Model Loaded!");
 }

 function speak(){
 var synth=window.speechSynthesis;
 speak1="the first predicition is " + p1 + " and the second predicition is " + p2;
 var utterThis=new SpeechSynthesisUtterance(speak1);
 synth.speak(utterThis);
 }

 //define check func

 function check() {
   img=document.getElementById('captured_image');

   classifier.classify(img , gotResult);
 }

 function gotResult(error , results) {
   if (error) {
     console.error(error);
   }else{
    console.log(results);

    document.getElementById("result_emotion_name").innerHTML=results[0].label;

    document.getElementById("result_emotion_name2").innerHTML=results[1].label;

    p1=results[0].label;
    p2=results[1].label;

    speak();

   if (results[0].label == "Happy") {
     document.getElementById("update_emoji").innerHTML="&#128512;"; 
   }

   if (results[0].label == "sad") {
    document.getElementById("update_emoji").innerHTML="&#128532;"; 
  }

  if (results[0].label =="Angry") {
    document.getElementById("update_emoji").innerHTML="&#128545;"; 
  }

  if (results[1].label == "Happy") {
    document.getElementById("update_emoji2").innerHTML="&#128512;"; 
  }

  if (results[1].label == "sad") {
   document.getElementById("update_emoji2").innerHTML="&#128532;"; 
 }

 if (results[1].label =="Angry") {
   document.getElementById("update_emoji2").innerHTML="&#128545;"; 
 }
  

  }

 }
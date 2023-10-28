Webcam.set({
    width: 350, 
    height: 300,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
 
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("selfie_image").src = data_uri
})
}
console.log(ml5.version)
 
var classifier = ml5.imageClassifier( modelloaded)
 function modelloaded(){
    console.log("model is loaded")
 }
 function check(){
    img = document.getElementById("selfie_image")
 classifier.classify(img, gotresult)

}
function gotresult(error, results){
    if (error) 
    console.log(error)
        
 else {
    console.log(results)   
    document.getElementById("Object_Name").innerHTML = results[0].label
    document.getElementById("Accuracy").innerHTML = (results[0].confidence*100).toFixed()
    }
}
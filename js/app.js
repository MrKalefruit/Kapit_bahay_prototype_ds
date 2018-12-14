//scrollig
$(function() {
    //sourced from scrollify master code
    $.scrollify({
        //section : "app",
        sectionName : "section-name",
        
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
  });


  $(".scroll,.scroll-btn").click(function(e) {
    e.preventDefault();

    $.scrollify.next();



});

var y = 2;
function check() {
    y= window.scrollY;
    alert(y +" and place is"+place  );

}

var num =0;
var   place =0;
function jumpU() {
    //checking location
    y= window.scrollY;
    if(y<116) {
           place =1;
       } else
        place = Math.round((y-116)/910);
   
    alert(place)
   
    //making sure the num doesnt go out of array
    if(place-1 <0) {
        place =0;
    } else
    place -=1;
    document.getElementById("Up").href = "#" + place;
  
}  



function jumpD() {
    y= window.scrollY;
    if(y<116) {
         place =0;
       } else
        place = Math.round((y-116)/910);
   
    alert(place)

    if(num+1 >3) {
        place =3;
    } else
    place +=1;
    document.getElementById("Down").href = "#" + place;
    
    
    
}  

//for the moving top bar
var prePos = window.pageYOffset; 
window.onscroll = function() {
    //when scroll check the current location
    
    //based on this change the number of cards
  
   
    var curPos = window.pageYOffset;
    if(prePos > curPos) {
        //stay hidden
            document.getElementById("navbar").style.bottom = "-5%";
    }
    else { 
        //stay hidden
        document.getElementById("navbar").style.bottom = "-25%";
    }
    prePos = curPos;
}

var counter =0;
//open and closing the menu
function openclose() {

}


//var image = [20]; //holds all the pictures


//increments 910 each time
//offset by 116



  
function cStart() {
    document.getElementById("name").innerHTML = "Car Dealers";
    //creats default stuff
    var cars = ["Car related/car1.jpg", "Car related/car1.jpg", "Car related/car1.jpg", "Car related/car1.jpg"];
    var i;
    var image = [cars.length];
    var src = document.getElementById("x");
    
    //loop through the whole array for photos
    for (i = 0; i < 4; i++) {
        //creating div class
        var node = document.createElement("div");
        node.className = "section-name";
        node.setAttribute("id", i);
        document.getElementById('x').appendChild(node);        
        
        //creating the image
        image[i] = document.createElement("IMG");
        image[i].setAttribute("src", cars[i]);
        image[i].setAttribute("width", "50%");
        image[i].setAttribute("height", "auto");
        image[i].setAttribute("alt", "FISH");
        image[i].setAttribute("onclick", "replace();");
        image[i].setAttribute("class", "card");
        image[i].setAttribute("id", i);
        

        src.appendChild(image[i]);
        
        
    }
}



//creating insure stuff
function createI() {
    
   // remove();
    document.getElementById("name").innerHTML = "Insurance Broker";
    //creats default stuff
    var insureA = ["insure/insure1.jpg", "insure/insure1.jpg", "insure/insure1.jpg", "insure/insure1.jpg", "insure/insure1.jpg", "insure/insure1.jpg"];
    var j;
    var image1 =[insureA.length];
    var src = document.getElementById("x");

    //loop through the whole array for photos
    for (j = 0; j < 6; j++) {
        //creating div class
        var node1 = document.createElement("div");
        node1.className = "section-name";
        node1.setAttribute("id", j);
        document.getElementById('x').appendChild(node1);        

        
        image1[j] = document.createElement("IMG");
        image1[j].setAttribute("src", insureA[j]);
        image1[j].setAttribute("width", "50%");
        image1[j].setAttribute("height", "auto");
        image1[j].setAttribute("alt", "FISH");
        image1[j].setAttribute("onclick", "replace();");
        image1[j].setAttribute("class", "card");
        image1[j].setAttribute("id", j);
        
        src.appendChild(image1[j]);
        
    }
}

function remove() {
    var arm = document.getElementById("bob");
    var i;
    //method to remove all pictures
    for (i = 0; i < image.length; i++) {
        x.removeChild(image[i]);
    }
}



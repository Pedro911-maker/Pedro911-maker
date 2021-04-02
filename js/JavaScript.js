


var gallery = document.getElementById('gallery');// creation of the variable gallery

fetch('js/img.json') // link with the json

  .then(function (res) { //function the res to be able to link the json with
    res.json().then(function (json) {//link the json
      json.forEach(function (el) {// distribute for each on the json the function el


        // creation item anchor
        var galleryItem = document.createElement('a');

        galleryItem.setAttribute('class', 'gallery-item'); //SET ATTRIBUTE
        galleryItem.setAttribute('href', el.url);




        // creation image anchor
        var image = document.createElement('img');


        image.setAttribute('src', el.url);        //  url of the image
        image.setAttribute('alt', el.caption);    //  text
        image.setAttribute('title', el.caption);  //  title

        // creation caption anchor 
        var caption = document.createElement('caption');

        // add text caption
        caption.innerText = el.caption;

        // Append the elements to our gallery and gallery item 
        galleryItem.appendChild(image);
        galleryItem.appendChild(caption);


        gallery.appendChild(galleryItem);

      })
    })
  }).catch(function(err){ // if the fetch doesn't work
    var mess = document.createElement('p');
    mess.innerText= err; //message d'error
    gallery.appendChild(mess);//apend the mess to the gallery
  })





//anchor
    var images = document.getElementById('carouselImages');
    

    var caption = document.getElementById('carouselCaption');
  
    var prev = document.getElementById('carouselPrev');
    

    var next = document.getElementById('carouselNext');
    
    

    fetch('js/Constellations.json')
    
 // get response object 
    .then(function(res) {
    
      // Get the JSON representation of the response object for being able to link this json with a list of object because our json object is array
      res.json().then(function(json) {
    

        json.forEach(function(el, i) {

          var image3 = document.createElement('img');
    

          image3.setAttribute('src', el.url);       
          image3.setAttribute('alt', el.caption);    
          image3.setAttribute('title', el.caption);  
    

          images.appendChild(image3);
        });
        

        setupCarousel(json);
      });
    });
    
    


    // setupCarousel accepts the JSON object (array) of images as an argument
    function setupCarousel(json) {
      

    
      // Number of children in your carouselImages element
      var imageCount = images.childElementCount; // imageCount become the number of children element
    
      //how many image 
      var currentImage = 1;
    

      var imageWidth = 1200;

//for the previous button
      prev.addEventListener('click', function() {
    
        // If the image in view is not the first image...
        if(currentImage != 1) {
    
          // Decrement the current image reference until it's the first
          --currentImage;
    
          // move image marginleft property
          images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }
        
        //update
        caption.innerText = json[currentImage - 1].caption;
      });
    
;//other button so the code is the same execpt it's the last image that we want
      next.addEventListener('click', function() {
    

        if(currentImage != imageCount) {
    

          ++currentImage;
    

          images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }
        

        caption.innerText = json[currentImage - 1].caption;
      });
      

      caption.innerText = json[currentImage - 1].caption;
    }
    

  ;
  //creation of the buttonS for navigation
  const swiper = new Swiper('.swiper-container', {

    direction: 'vertical',
    loop: true, //for the images to be moved 
  

    pagination: {
      el: '.swiper-pagination',
    },
  
//arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });
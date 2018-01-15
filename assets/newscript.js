

var zooArray = [ "squirrel" , "dog", "cat", "lion" , " tiger", "rat", "rhino" ];
renderButtons();

// This function handles events where a animal search button is clicked
     $("#find-animal").on("click" , function() {
      // event.preventDefault();
      // This line grabs the input from the textbox
      var zoo = $("#animal-input").val().trim();
      // Adding movie from the textbox to our array
      zooArray.push(zoo);
       // Calling renderButtons which handles the processing of our movie array
       renderButtons();
     }); // Adding a click event listener to all elements with a class of "zoo"


     $("#find-animal").on("click" , ".zoo" , displayAnimal);
     // Calling the renderButtons function to display the intial buttons
     renderButtons();

 // This .on("click") function will trigger the AJAX Call
 // function display animal
   function renderButtons() {
         // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#gipfyImg").empty();
        // Looping through the array of zoo
        for (var i = 0; i < zooArray.length; i++) {
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("zoo")
           // Adding a data-attribute
          a.attr("data-zoo" ,  zooArray[i]);
          // Providing the initial button text
          a.text(zooArray[i]);
          $("#gipfyImg").append(a);

      }
    }
function displayAnimal (){

// animalInfo function re-renders the HTML to display the appropriate content
var animal = $(this).attr("zooArray");
    animal = encodeURI(animal);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=cKw5jPmDs2WUWIQGpR1N5MOvyI65Hu03"

// Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          console.log(response);
           // Creating a div to hold the animal
           var animalDiv = $("<div class = 'animal'>");
           // Storing the rating data
           var rating = response.Rated;
           // Creating an element to have the rating displayed
           var pOne = $("<p>").text("Rating: " + rating);
           // Retrieving the URL for the image
           var imgURl = response.Poster;
           // Creating an element to hold the image
           var image = $("<img>").attr("src", imgURl);
           // Appending the image
           animalDiv.append(image);
           $("animal-form").prepend(animalDiv);
        });
      }

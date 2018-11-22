$(function() {
    $(".change-eaten").on("click", function(event) {
      const id = $(this).data("id");
      const newEaten = $(this).data("neweaten");
  
      const newEatenState = {
        eaten: newEaten
      };
  
      // Send the PUT request.
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newEatenState
      }).then(
        () => {
          console.log("changed sleep to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", event => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      const id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax(`/api/burgers/${id}`, {
        type: "DELETE"
      }).then(
        () => {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
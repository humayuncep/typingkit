$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();


    // Write Something on browser
        $(function(){
          // The base speed per character
            time_setting = 30;
          // How much to 'sway' (random * this-many-milliseconds)
            random_setting = 100;
          // The text to use NB use \n not real life line breaks!
            input_text = "<section id='section' class='section'>\n\t<!-- It's a general section -->\n\t<h1>Introduction to Typingkit</h1>\n\t<p>Thanks for using Typingkit, Write everything here.</p>\n</section> <!-- /#section -->";
          // Where to fill up
            target_setting = $("#output");
            // target_setting = $(".content");
          // Launch that function!
            type(input_text, target_setting, 0, time_setting, random_setting);

            $("#btn-restart").click(function(){
            // When you click, remove the button
                $(this).fadeOut('fast', function(){
              // Remove all the text, then show the pre area again
                    target_setting.text("").show();
              // And start again!
                    type(input_text, target_setting, 0, time_setting, random_setting);
                });
            });
        });

        function type(input, target, current, time, random){
          // If the current count is larger than the length of the string, then for goodness sake, stop
            if(current > input.length){
            // Write Complete
                console.log("Complete.");
            // Wait a bit, then do the complete function
                setTimeout(function(){
                    finished(input, target, current, time, random);
                },3000);
                
            }
            else{
                console.log(current)
            // Increment the marker
                current += 1;
            // fill the target with a substring, from the 0th character to the current one
                target.text(input.substring(0,current));
            // Wait ...
                setTimeout(function(){
              // do the function again, with the newly incremented marker
                    type(input, target, current, time, random);
              // Time it the normal time, plus a random amount of sway
                },time + Math.random()*random);
            }
        }

        // when its finished
        function finished(input, target, current, time, random){
          // fade out the pre
            target.slideUp('fast', function(){
            // fade in the button
                $("#btn-restart").delay(100).fadeIn('slow');  
            });
        }
});
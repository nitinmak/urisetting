// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
                // window.localStorage.setItem("login",0);

    var islogin = window.localStorage.getItem("login");
myApp.alert(islogin); 

if(islogin == 1){
    $$('#home').trigger("click");
 //window.location.href = "home.html"
  }


   $('#login_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
       
        email: {
           
            required: true,
            email:true,
            
        },
         password: {
           
            required: true,
            
        },
        
    },
    messages: {
       
        
         email: {
           
            required: "Please enter  Email.",
            email:"Please Enter Proper Email",
            
        },
         password: {
           
            required: "Please enter  Password.",
            
            
        },
        
       
         
    },
        submitHandler: function (form) { // for demo
          form =$('#login_form').serialize();
          var  action = $('#action').val();
          var  email = $('#email').val();
        
     $.ajax({
            url: "https://digitalbcards.in/api/login/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              if(data.status == 0){
        //            $('#icon').html('<i class="fa fa-exclamation font-30 icon-circle icon-l bg-white color-black shadow-icon-large"></i>');
        // $('#error_msg_title').html('Login Failed');            
        myApp.alert(data.message);            
// $('#attention').addClass('active-menu-box-modal');

    
                // alert(data.message);
              }else{

                window.localStorage.setItem("login",1);
                window.localStorage.setItem("email",email);

               // alert(data.message);
                
              // $('#home').click();
              // $('#icon').html('<i class="fa fa-check font-30 icon-circle icon-l color-green-dark bg-white shadow-icon-large"></i>');
              // $('#error_msg_title').html('Login Succes');            
        myApp.alert(data.message);            
     $$('#home').trigger("click");    
// $('#attention').addClass('active-menu-box-modal');
 // window.location.href = "home.html"
              }
            //location.reload();
          }
        })
            return false; // for demo
        }
    });


});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="home"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes homee page');
     $(".select2").select2({
     'tags':true,
      placeholder: "Decide Segment"
      
    });


       var input = document.querySelector("#mobile");
    var a=window.intlTelInput(input, {
    initialCountry: "auto",
     geoIpLookup: function(success, failure) {


    $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      success(countryCode);
    });
    },

  hiddenInput: "full_phone",
  utilsScript: "js/utils.js?1537717752654" // just for formatting/placeholders etc
});


     $("#button").click(function() {
      
       var lable = $("#button").text().trim();

       if(lable == "Less") {
         $("#button").text("More");
         $("#test").hide();
       }
       else {
         $("#button").text("Less");
         $("#test").show();
       }
        
      });
    
      function AllowNumbersOnly(e) {
        var code = (e.which) ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
          e.preventDefault();
        }
    }
   

 $("#menu-1").load("sidebar.html");
      $(document).ready(function () {
 $("#logout").click(function() {
myApp.alert('logout');
localStorage.clear()
                window.localStorage.setItem("login",0);

           // window.location.href = "index.html";
            $$('#home').trigger("click"); 
});

 var email =  window.localStorage.getItem("email");
                        // alert('fdfd');
                         
   $('#preloader').show();
                     $.ajax({
            url: "https://digitalbcards.in/api/user_profile/", 
            method: "POST",
            data:{email:email,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
               window.localStorage.setItem("user_id",data.id);
               window.localStorage.setItem("language",data.language);
               window.localStorage.setItem("referral",data.Refferal_id);
               window.localStorage.setItem("name",data.name);
               //window.localStorage.setItem("username",data.name);
               window.localStorage.setItem("user_image",data.profile_img);
               // alert(data.name);
                $('#username').html(name);
                $('#user_image').css("background-image",'url(https://digitalbcards.in/upload/'+user_image+')');
                $('#user_image').css("height",'80px');
                $('#user_image').css("width",'80px');
               $('#preloader').hide();
                
              
            //location.reload();
          }
        })
                   
                      var user_id =  window.localStorage.getItem("user_id");
                      var language =  window.localStorage.getItem("language");
                      var referral =  window.localStorage.getItem("referral");
                      var name =  window.localStorage.getItem("name");
                      var user_image =  window.localStorage.getItem("user_image");
                       $('#username').html(name);
                $('#user_image').css("background-image",'url(https://digitalbcards.in/upload/'+user_image+')');
                 $('#user_image').css("height",'80px');
                $('#user_image').css("width",'80px');
// alert(user_id);
                     $.ajax({
            url: "https://digitalbcards.in/api/segment/", 
            method: "POST",
            data:{user_id:user_id,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
 // alert(data);
$('#segment').append(data);
// $("#segment").trigger('create');
            //    $('#username').html(data.name);
             //   $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
              
            //location.reload();
          }
        })

             var user =  window.localStorage.getItem("user_id");
             $('#user_id').val(user);
             $('#language').val(language);
             $('#referral').val(referral);
             $('#user_name').val(name);
        

          $('#share_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
        "segment[]": "required",
       
         name: {
           
            required: true,
            
        },
        
        
        
    },
    messages: {
       
        "segment[]": "Please Select Segment",
        
         name: {
           
            required: "Please enter  Reciver Name.",
            
            
        },
        
        
       
         
    },
        submitHandler: function (form) { // for demo
          form =$('#share_form').serialize();
         // alert(form);
          var  action = $('#action').val();
          var  email = $('#email').val();
          $('#myOverlay').show();
    $('#loadingGIF').show();
     $.ajax({
            url: "https://digitalbcards.in/api/send_whatsapp/",
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
               // alert(data);
              if(data.status == 0){
                 $('#toast').html(data.message);
                tost();
                // alert(data.message);
              }else if(data.status == 2){

                
                // alert(data.message);
                   $('#toast').html(data.message);
                tost();
            window.location.href = data.url;
              }else{
                $('#toast').html(data.message);
                tost();
              }
            //location.reload();
          }
        })
            return false; // for demo
        }
    }); 

                //called when key is pressed in textbox
              $("#mobile").keypress(function (e) {
                 //if the letter is not digit then display error and don't type anything
                 if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    //$("#errmsg").html("Digits Only").show().fadeOut("slow");
                           return false;
                }
               });
            });

function tost(){

$('#toast').addClass('show-toast');
setTimeout(function(){ 
$('#toast').removeClass('show-toast');
 }, 1200);
}

})
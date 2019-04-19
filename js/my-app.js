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
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})
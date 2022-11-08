
$(document).ready(function(){
   //nav dumbbele
      $(".dumbbell").click(function(){
         $(location).attr("href", "/newProject/new_main.html")
      });
      $(".protein").click(function(){
         $(location).attr("href", "/newProject/protein.html")
      });
      $(".product").click(function(){
         $(location).attr("href", "/newProject/product.html")
      });
     
      
      

     
      

   //nav-item react
      $('.nav-item').on('mouseover',(event)=>{
         $(event.currentTarget).css({
            textDecoration: 'underline',
            color:'white',
            cursor: 'pointer'
         })
      }).on('mouseleave',(event)=>{
         $(event.currentTarget).css({
            borderBottom: 'none',
            textDecoration: 'none',
            color:'black',
            cursor: 'none'
         })
      })

      // search and fade
      $('.search').on('click', () => {
         $( '.nav-menu' ).slideToggle();
         $('.blur-body').toggleClass('blur');   
         
      });
   





   

  //search words
   $('.nav-menu-item').on('mouseover',(event)=>{
      $(event.currentTarget).css({
         cursor:'pointer',
         color:'white'
      },200)
      
      }).on('mouseleave',(event)=>{
      $(event.currentTarget).css({
         color:'black'
      }).on('click',()=>{
         $('.search').text();
      })
      });

//click to scroll to location
      let yourselfMain = document.querySelector('#yourself-main')
      let scheduleMain = document.querySelector('#schedule-main')
      let exerciseMain = document.querySelector('#exercise-main')
      
      $('.yourself').on('click',()=>
      window.scrollTo(0,yourselfMain.offsetTop));
      $('.schedule').on('click',()=>
      window.scrollTo(0,scheduleMain.offsetTop));
      $('.exercise').on('click',()=>
      window.scrollTo(0,exerciseMain.offsetTop));
         
      //yourself calculattion
      let gender = $('#gender').value
      let height = $('#height').value
      let weight = $('#weight').value
      let age = $('#age').value
      let dailyCalorie = (height-100)*0.9*35;
      console.log(dailyCalorie); 



//exercise change
         //Level
      $('#basic').on('click', ()=>{
         $('#workOutInter').hide();
         $('#workOutAdvanced').hide();
         $('#workOutBasic').slideDown('slow');
         });

      $('#intermediate').on('click', ()=>{
         $('#workOutInter').slideDown('slow');
         $('#workOutBasic').hide();
         $('#workOutAdvanced').hide();
      
         });

      $('#advanced').on('click', ()=>{
         $('#workOutAdvanced').slideDown('slow');
         $('#workOutBasic').hide();
         $('#workOutInter').hide();
         
         });

   // variety of workout
   //yoga
      $('.workOut').on('mouseover',(event)=>{
         $(event.currentTarget).css({
            width:'70%',
            
         })

         $(event.currentTarget).siblings().css({
            width:'15%'
         });
   

         }).on('mouseleave',(event)=>{
            $(event.currentTarget).css({
               width:'33%', 
            });
            $(event.currentTarget).siblings().css({
               width:'33%'
            });
         });

         $('#yoga').on('click',()=>{
            $(location).attr('href', 'http://192.168.0.129:56069/newProject/yogaPage.html')
         })
         $('#stretching').on('click',()=>{
            $(location).attr('href', 'http://192.168.0.129:56069/newProject/yogaPage.html')
         })
         $('#fullbody').on('click',()=>{
            $(location).attr('href', 'http://192.168.0.129:56069/newProject/yogaPage.html')
         })

      
         

          

     
   
});
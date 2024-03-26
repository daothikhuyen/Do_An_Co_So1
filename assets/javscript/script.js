    
    var getSearchIcon = document.querySelector('.btn-seacrch');
    var getSearchTyping = document.getElementById('search-input');
    var searchToggle = false;
    getSearchTyping.style.display='none';
    getSearchIcon.addEventListener('click',function(){
        if(!searchToggle){
            getSearchTyping.style.display='block';
            searchToggle = ! searchToggle;
        }
        else{
            getSearchTyping.style.display='none';
            searchToggle = ! searchToggle;
        }
    });

    var getBtn = document.querySelector('.btnSeeAll');
    var getSeeAll = document.getElementById('SP-See-all');
    var SeeToggle = false;
    getSeeAll.style.display='none';
    getBtn.addEventListener('click', function(){
        if(!SeeToggle){
            getSeeAll.style.display='block';
            SeeToggle = ! SeeToggle;
            getBtn.style.display='none';
        }
    });

    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()){
                $('#backtop').fadeIn();
            }else{
                $('#backtop').fadeOut();
            }
        });
        $('#backtop').click(function(){
            $('html, body').animate({
                scrollTop: 0
            },500)
        });
    });

      

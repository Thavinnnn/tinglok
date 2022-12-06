var popup = '<div class="popup"></div>';
$(document).ready(function(){
    //click change form
    $('.btn-click .btn-1').click(function(){
        $(this).addClass('active-bg');
        $('.btn-2').removeClass('active-bg');
        $('.header #h1 , .register-frm').css({'display':'block'});
        $('.header #h2 , .login-frm').css({'display':'none'});
    });
    // click to login
    $('.btn-click .btn-2').click(function(){
        $(this).addClass('active-bg');
        $('.btn-1').removeClass('active-bg');
        $('.header #h1 , .register-frm').css({'display':'none'});
        $('.header #h2 , .login-frm').css({'display':'block'});
    });
    //click popup form
    $('.login').click(function(e){
        $html = $('html'); 
        $body = $('body'); 
        var initWidth = $body.outerWidth();
        var initHeight = $body.outerHeight();
    
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        $html.data('scroll-position', scrollPosition);
        $html.data('previous-overflow', $html.css('overflow'));
        $html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);   
    
        var marginR = $body.outerWidth()-initWidth;
        var marginB = $body.outerHeight()-initHeight; 
        $body.css({'margin-right': marginR,'margin-bottom': marginB});
        $('.popup-form').css({'visibility':'visible'})
        
    });
    //btn close popup form
    $('.btnClose').click(function(){
        $html = $('html');
    $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
        $('.popup-form').css({'visibility':'hidden'});
    });
    //onscroll top
    $('.onscroll').click(function(){
        $('html,body').scrollTop({behavior : 'smooth'});
    });
    // change background color 
    $('.ch-color .fa-moon').click(function(){
        $('.fa-sun').removeClass('active-color');
        $('.fa-moon').addClass('active-color');
        $('body').css({'background-color':'black'});
        $('.onscroll').css({'background-color':'white','color':'black'});
        $('.left-menu').css({'border-color':'red'})
    });
    // change backgorund return 
    $('.ch-color .fa-sun').click(function(){
        $('.fa-moon').removeClass('active-color');
        $('.fa-sun').addClass('active-color');
        $('body').css({'background-color':'white'});
        $('.onscroll').css({'background-color':'black','color':'white'});
        $('.left-menu').css({'border-color':'black'})
    });
    //slide 
    var slide = $('.slide');
    var numSlide = slide.length; 
    slide.hide();
    var x = 0;
    slide.eq(x).show();
    //btn-next
    $('.btn-next').click(function(){
        slide.eq(x).hide();
        $('.paginition ul').find('li').eq(x).removeClass('active');
        x++;
        if(x >= numSlide){
            x = 0;
        }
        slide.eq(x).show();
        $('.paginition ul').find('li').eq(x).addClass('active');
    });
    //btn-prev
    $('.btn-prev').click(function(){
        slide.eq(x).hide();
        $('.paginition ul').find('li').eq(x).removeClass('active');
        if(x == 0){
            x = numSlide;
        }
        x--;
        slide.eq(x).show();
        $('.paginition ul').find('li').eq(x).addClass('active');
    });
    // get paginition
    get_page_slide();
    function get_page_slide(){
        var li = '';
        for(var i = 0; i < numSlide; i++){
            li += '<li></li>'; //
        }
        $('.paginition ul').html(li);
        $('.paginition ul').find('li').eq(0).addClass('active');
    }
    // slide with click on page slide
    $('.paginition ul').on('click','li',function(){
        slide.eq(x).hide();
        $('.paginition ul').find('li').eq(x).removeClass('active');
        x = $(this).index();
        slide.eq(x).show();
        $('.paginition ul').find('li').eq(x).addClass('active');
    });
    // left menu
    $('.left-menu').on('click','.drop',function(){
        var eThis = $(this);
        var Parent = eThis.parent();
        Parent.find('.subMenu').slideToggle();
        var num = eThis.find('.fa-chevron-right');
        
        // if(num.length > 0){
        //     eThis.find('i').removeClass('fa-chevron-right');
        //     eThis.find('i').addClass('fa-chevron-down');
        //     eThis.css({'color':'red'});
        // }
        // else {
        //     eThis.find('i').removeClass('fa-chevron-down');
        //     eThis.find('i').addClass('fa-chevron-right');
        //     eThis.css({'color':'black'});
        // }
        var num2 = eThis.find('.rotate');
        if(num2.length == 0){
            eThis.find('i').addClass('rotate');
            eThis.css({'color':'red'});
        }
        else {
            eThis.find('i').removeClass('rotate');
            eThis.css({'color':'black'});
        }
        
    });
    //drop down menu
    var menu2 = {
        'Apple' : ['iphone','imac','ipad','iwatch'],
        'Google' : ['Google','Drive','Play Store'],
        'Facebook': ['Facebook','Instargram','Messenger'],
        'Microsoft':['Window','Firebase','Office'],
        'Asus':['laptop','Phone'],
        'Sport':['National','International']
    }
    get_menu2();
    function get_menu2(){
        var txt = '';
        for(var keys in menu2){
            var txt2='';
            var subMenuData = menu2[keys];
            for(i in subMenuData){
                txt2 += '<li><a href="">'+subMenuData[i]+'</a></li>';
            }
            var subMenu = '<div class="sub-menu"><ul>'+txt2+'</ul></div>';
            txt += '<li><a href="">'+keys+'</a>'+subMenu+'</li>';
        }
        $('.menu ul').append(txt);
    }
    var menuData = [
        {name: "html"},
        {name: "css"},
        {name: "php"},
        {name: "javascript"},
        {name: "kotlin"}
    ];
    getMenu();
    function getMenu(){
        var txt='';
        for(var i in menuData){
            txt+='<li><a href="">'+menuData[i].name+'</li>';
        }
        // $('.menu ul').append(txt);  
        $('.popMenu ul').append(txt);     
    }
    $('#btnMenu').click(function(){
        $('body').append(popup);
        $('.popMenu').css({'left':'0px'});
    });
    $('body').on('click','.popup',function(){
        $(this).remove();
        $('.popMenu').css({'left':'-285px'})
    });
});


   
// navbar script



// movie dropdown
const navbarMovieButton = document.querySelector('.navbarMovieButton');
navbarMovieButton.addEventListener('click',function(event){
    if(document.querySelector('.moviesDropdown').style.visibility==='hidden')
    {
        document.querySelector('.moviesDropdown').style.visibility='visible'
    navbarMovieButton.style.cursor='pointer'
document.querySelector('.navbarMovieButton>p').innerText='Movies▲'
document.querySelector('.moviesDropdown').innerHTML=
`   
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/list/1170x658withlogo53bc7b3413e44a1bbcc3cf8476880513.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133622/list/1170x658withlogode814598fc2e466d9b3dd1c2bee3f4439f332420f5a849fd9246d9e96ef9f5b1.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-1z5127658/list/1170x658withlogo8147f3d6aa394921a0117bc474c5b8a5.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-1z5117565/list/1170x658withlogo6bc94ccb45f24eb68a524599b311fd28.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-1z595840/list/1170x658withlogof46f21943471432e97c8a751e182e158.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-1z562203/list/1170x658withlogofd3100c808534a68b3a530a2589d152b.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-73415/list/thetashkentfiles1170x658pxl21d6af317305d4844ae06122d956088aeb22968de2b764ff09063917374b74d30.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-369273/list/1170x658withlogo80fcaf37a7d042238f92afd28a3ebde3.jpg" alt=""></div>
<div><img class="navbarmovieImage" src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-0-1z544916/list/1170x658withlogo68f7d11875894c2c88dee6da8a42ac8bbe8a0f6694444ee0a093a0448e376a6f.jpg" alt=""></div>
 
`
    }
    else{
        document.querySelector('.moviesDropdown').style.visibility='hidden'
        document.querySelector('.navbarMovieButton>p').innerText='Movies▼'
    }

})

// movie dropdown end

// news dropdown
const navbarNewsButton = document.querySelector('.navbarNewsButton');
navbarNewsButton.addEventListener('click',function(event){
    if(document.querySelector('.moviesDropdown').style.visibility==='hidden')
    {
        document.querySelector('.moviesDropdown').style.visibility='visible'
    navbarNewsButton.style.cursor='pointer'
document.querySelector('.navbarNewsButton>p').innerText='News▲'
document.querySelector('.moviesDropdown').innerHTML=
`   
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-aajtak/list/aajtak1170c5f0b30a23f8405f9e4e05691ee3e6f2.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-zeenews/list/zeenews11701f0a8d3030bbd46e195a8fd0e9a61f203.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-indiatoday/list/indiatoday1170x658bgb3d3b03ed4a94a9ba15bf5ddda21c92f.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-zee24taas/list/zee24taas11707d845042f4ef453a8568b6ba22b3f568.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-zeebusiness/list/zeebusiness117070a1a621ebfe49689982517efaa02515.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-257/list/tv9marathi1170c5bded27d1644b18a5624c7dd3c33d3b.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-wion/list/wion117003209f9bda764c35a9c85d78648577f9.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-206/list/e24newslogob1170a9b7f276c2f04efaaa79aa5c0062de3d.jpg" alt=""></div>
<div><img src="https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-400/list/abpmajha1170cb8e2b94f9244846a3be5bdaa87792f8.jpg" alt=""></div>
 
`
    }
    else{
        document.querySelector('.moviesDropdown').style.visibility='hidden'
        document.querySelector('.navbarNewsButton>p').innerText='News▼'
    }

})
// news dropdown end 

const navbarmovieImage = document.querySelector('.moviesDropdown');
navbarmovieImage.addEventListener('click',function(event){
    window.location.href=''
})

// catagory dropdown

const navbarCatagoryButton = document.querySelector('.navbarCatagoryButton');
navbarCatagoryButton.addEventListener('click',function(event){
    if(document.querySelector('.catagoryDropdown').style.visibility==='hidden')
    {
        document.querySelector('.catagoryDropdown').style.visibility='visible'
        navbarCatagoryButton.style.cursor='pointer'
        document.querySelector('.catagoryDropdown').innerHTML=
`   
        <div><a href="">Live TV</a></div>
        <div><a href="">Play</a></div>
        <div><a href="">Kids</a></div>
        <div><a href="">ZEEPLEX</a></div>
        <div><a href="">Music</a></div>
        <div><a href="">Stories</a></div>
`
    }
  
  else{
        document.querySelector('.catagoryDropdown').style.visibility='hidden'
      }
})
// catagory dropdown end

const navbarCatagory = document.querySelector('.catagoryDropdown');
navbarCatagory.addEventListener('click',function(event){
    window.location.href=''
})

// menu dropdown

const menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click',function(event){
    if(document.querySelector('.menuDropdown').style.visibility==='hidden')
    {document.querySelector('.menuDropdown').style.visibility='visible'
        menuButton.style.cursor='pointer'
document.querySelector('.menuDropdown').innerHTML=
`   
        <div><a href="index.html">Home</a></div>
        <div><a href="">Buy Plan</a></div>
        <div><a href="https://www.zee5.com/aboutus">About Us</a></div>
        <div><a href="https://www.zee5.com/help/?translation=en&country=IN&hextoken=null&platform=desktop_web&user_type=guest&app_version=2.51.46">Help Center</a></div>
        <div><a href="https://www.zee5.com/termsofuse">Terms Of Use</a></div>
        <div><a href="https://www.zee5.com/privacypolicy">Privacy Policy</a></div>
`
    }
    else{
        document.querySelector('.menuDropdown').style.visibility='hidden'
    }
})


// menu dropdown end



// navbar script end



// body script 




// body script end




// footer script
    const play_store = document.querySelector('.play_store');
    play_store.style.cursor='pointer'
    play_store.addEventListener('click',function(event){
        window.location.href='https://play.google.com/store/apps/details?id=com.graymatrix.did'
        
    })
    const apple_store = document.querySelector('.apple_store');
    apple_store.style.cursor='pointer'
    apple_store.addEventListener('click',function(event){
        window.location.href='https://apps.apple.com/in/app/zee5-shows-live-tv-movies/id743691886'  
    })
    const facebook = document.querySelector('.facebook');
    facebook.style.cursor='pointer'
    facebook.addEventListener('click',function(event){
        window.location.href='https://www.facebook.com/ZEE5/'  
    })
    const instagram = document.querySelector('.instagram');
    instagram.style.cursor='pointer'
    instagram.addEventListener('click',function(event){
        window.location.href='https://www.instagram.com/zee5/'  
    })
    const twitter = document.querySelector('.twitter');
    twitter.style.cursor='pointer'
    twitter.addEventListener('click',function(event){
        window.location.href='https://twitter.com/zee5india' 
    })
    const youtube = document.querySelector('.youtube');
    youtube.style.cursor='pointer'
    youtube.addEventListener('click',function(event){
        window.location.href='https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ' 
    })
    const backToTop = document.querySelector('.backToTop');
    backToTop.style.cursor='pointer'
    backToTop.addEventListener('click',function(event){
        window.location.reload()  
    })
    // footer script end
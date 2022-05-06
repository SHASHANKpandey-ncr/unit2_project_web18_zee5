document.querySelector(".im1").addEventListener("click",function(){
    window.location.href="https://appleid.apple.com/"
})

document.querySelector(".im2").addEventListener("click",function(){
    window.location.href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.zee5.com%3Fid%3Dauth11474&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=171585693881-93jei1bqpoaejkq5ha63iemuq8bbmoar.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.zee5.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
})

document.querySelector(".im3").addEventListener("click",function(){
    window.location.href="https://www.facebook.com/login.php?skip_api_login=1&api_key=771609066382248&kid_directed_site=0&app_id=771609066382248&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.10%2Fdialog%2Foauth%3Fapp_id%3D771609066382248%26cbt%3D1651803984806%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfe638d1dfa76dc%2526domain%253Dwww.zee5.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.zee5.com%25252Ff2a2ad07bd5c0bc%2526relation%253Dopener%26client_id%3D771609066382248%26display%3Dpopup%26domain%3Dwww.zee5.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.zee5.com%252Fsignin%26locale%3Den_US%26logger_id%3Df1b6246290612d4%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df3c674c8544563%2526domain%253Dwww.zee5.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.zee5.com%25252Ff2a2ad07bd5c0bc%2526relation%253Dopener%2526frame%253Df2a46766ba6e78c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26sdk%3Djoey%26version%3Dv2.10%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3c674c8544563%26domain%3Dwww.zee5.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.zee5.com%252Ff2a2ad07bd5c0bc%26relation%3Dopener%26frame%3Df2a46766ba6e78c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"
})

document.querySelector(".im4").addEventListener("click",function(){
    window.location.href="https://api.twitter.com/oauth/authenticate?oauth_token=NyJvWQAAAAAA2CPSAAABgJcxBM0&force_login"
})


var getDATA=JSON.parse(localStorage.getItem("userData"))
console.log(getDATA)

document.querySelector("button").addEventListener("click",function(event){
    event.preventDefault()

    var data={
        name:document.getElementById("name").value,
        password:document.getElementById("password").value
    }
    console.log(data)

    if(getDATA==null) {alert("Please create an account");
    window.location.href="register.html"}


    else if(getDATA.name==data.name &&
    getDATA.password==data.password)
    {alert("Login successful");
    window.location.href='index.html'
}
// ***********************username***************
    // localStorage.setItem("userData",JSON.stringify(data))
})

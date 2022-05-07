document.querySelector("#img1").addEventListener("click",function(){
    window.location.href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.zee5.com%3Fid%3Dauth520360&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=171585693881-93jei1bqpoaejkq5ha63iemuq8bbmoar.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.zee5.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
})
    



document.querySelector("button").addEventListener("click",function(event){
    event.preventDefault()

    
var dataObj={
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    password:document.querySelector("#password").value
}



localStorage.setItem("userData",JSON.stringify(dataObj))
alert('Sign-Up Successful')
window.location.href="login.html"

})
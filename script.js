const signIn = ()=>{
    let oauth2EndPoint ="https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement('form')
    form.setAttribute('method',"GET")
    form.setAttribute('action',oauth2EndPoint)

    let params = {
        'client_id':'42180616098-o8k1tdm8k6rh3di1o6224f6capngpffb.apps.googleusercontent.com',
        'redirect_uri':"http://127.0.0.1:5500/uploadImage.html",
        'response_type':'token',
        'scope':'https://www.googleapis.com/auth/userinfo.profile',
        'include_granted_scopes':'true',
        'state':'pass-through-value'
    }
    // console.log(form);
    for(var p in params){
        let input = document.createElement('input')
        input.setAttribute('type','hidden')
        input.setAttribute('name',p)
        input.setAttribute('value',params[p])
        form.appendChild(input)
    }
    document.body.appendChild(form);
    form.submit()
}


const el = document.getElementById('login-btn');
el.addEventListener('click',signIn)


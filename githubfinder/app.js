//Github user
github = new Github();

document.getElementById('searchUser').addEventListener('keyup',loadUser);
function loadUser(e){
    const user = e.target.value;
    if(user !== ''){
      github.getUser(user)
            .then(data=>{
                if(data.profile.message === "Not Found"){
                    console.log(data.profile.message);
                }
                else{
                    console.log(data.profile);
                }
            })
    }
    else{
        //clear profile
    }

}
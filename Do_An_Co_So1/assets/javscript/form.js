const btnSignIn = document.querySelector("#btn-signin");
const btnSignUp = document.querySelector("#btn-signup");
const content = document.querySelector(".main");

btnSignUp.addEventListener('click', function(){
    content.classList.add("sign-up-mode");
});

btnSignIn.addEventListener('click', function(){
    content.classList.remove("sign-up-mode");
});


// Tạo tài khoản
const username = document.querySelector(".username-sigUp");
const email = document.querySelector(".email-sigUp");
const password = document.querySelector(".password-sigUp");
// const passagain = document.querySelector(".passagin")
const btn = document.querySelector(".btn-signup");

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(username.value === ""|| password.value==="" || email.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: 'Thông tin không được để trống!',
          });
    }
    else{
        if (!filter.test(email.value)) { 
            Swal.fire({
                icon: 'error',
                title: 'Lỗi...',
                text: 'Email không đúng định dạng!',
              });
            email.focus; 
            return false; 
        }
        else{ 
                const user = {
                    username1:username.value,
                    password1:password.value,
                };
                let json = JSON.stringify(user);
                localStorage.setItem(username.value,json);
                Swal.fire({
                    icon: 'success',
                    title: 'Đăng kí thành công',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(() => {
                    // Chờ hiệu ứng kết thúc, sau đó chuyển hướng trang
                        content.classList.remove("sign-up-mode");
                  });
        }
    }
});

// user.username và user.password ở phần đăng kí và đăng nhập phải giống nhau
const usernameDN = document.querySelector(".username-Login");
const passwordDN = document.querySelector(".password-Login");
const btnDN = document.querySelector(".btn-login");

btnDN.addEventListener("click",(e)=>{
    e.preventDefault();  
    if(usernameDN.value === ""|| passwordDN.value===""){
        Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: 'Thông tin không được để trống!',
          });
    }
    else{
        const user = JSON.parse(localStorage.getItem(usernameDN.value));
        if(
            user.username1 === usernameDN.value && 
            user.password1 === passwordDN.value
            // username1 phải cùng với username1 trên đăng kí
        ){
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                // Chờ hiệu ứng kết thúc, sau đó chuyển hướng trang
                localStorage.setItem("isLogin",true);
                window.location.href ="../../index.html";
              });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Lỗi...',
                text: 'Đăng nhập thất bại',
              });
        }
    }
});

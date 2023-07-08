
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const passagain = document.querySelector(".passagin")
const btn = document.querySelector(".btn");

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(username.value === ""|| password.value==="" || email.value === "" || passagain === ""){
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
            if(password.value === passagain.value){
                const user = {
                    username1:username.value,
                    password1:password.value,
                };
                let json = JSON.stringify(user);
                localStorage.setItem(username.value,json);
                // alert("Đăng Ký Thành Công");
                // window.location.href="../../DangNhap.html";
                Swal.fire({
                    icon: 'success',
                    title: 'Đăng kí thành công',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(() => {
                    // Chờ hiệu ứng kết thúc, sau đó chuyển hướng trang
                    window.location.href="../../DangNhap.html";
                  });
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi...',
                    text: 'Mật khẩu không trùng khớp!',
                  });
            }
        }
    }
});

// user.username và user.password ở phần đăng kí và đăng nhập phải giống nhau
const usernameDN = document.querySelector(".userDN");
const passwordDN = document.querySelector(".passDN");
const btnDN = document.querySelector(".btnDN");

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
                window.location.href ="../../index.html";
              });
            // alert("Đăng nhập thành công");
            // window.location.href ="../../index.html";
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
const buy = document.getElementById('buy1');

buy.addEventListener('click', function() {
    if (!buy.classList.contains('sold')) {
        buy.classList.add('sold');
        buy1.innerText = "Order Shipped!";
    } else {
        buy.classList.remove('sold');
        buy1.innerText = "$3,900,000";
    }
})
const buy2 = document.getElementById('buy2');

buy2.addEventListener('click', function() {
    if (!buy2.classList.contains('sold2')) {
        buy2.classList.add('sold2');
        buy2.innerText = "Order Shipped!";
    } else {
        buy2.classList.remove('sold2');
        buy2.innerText = "$230,500";
    }
})
const buy3 = document.getElementById('buy3');

buy3.addEventListener('click', function() {
    if (!buy3.classList.contains('sold3')) {
        buy3.classList.add('sold3');
        buy3.innerText = "Order Shipped!";
    } else {
        buy3.classList.remove('sold3');
        buy3.innerText = "$344,778";
    }
})

const buy4 = document.getElementById('buy4');

buy4.addEventListener('click', function() {
    if (!buy4.classList.contains('sold4')) {
        buy4.classList.add('sold4');
        buy4.innerText = "Order Shipped!";
    } else {
        buy4.classList.remove('sold4');
        buy4.innerText = "$67,795";
    }
})

const buy5 = document.getElementById('buy5');

buy5.addEventListener('click', function() {
    if (!buy5.classList.contains('sold5')) {
        buy5.classList.add('sold5');
        buy5.innerText = "Order Shipped!";
    } else {
        buy5.classList.remove('sold5');
        buy5.innerText = "$2,290,000";
    }
})

const buy6 = document.getElementById('buy6');

buy6.addEventListener('click', function() {
    if (!buy6.classList.contains('sold6')) {
        buy6.classList.add('sold6');
        buy6.innerText = "Order Shipped!";
    } else {
        buy6.classList.remove('sold6');
        buy6.innerText = "$2,350,000";
    }
})

const buy7 = document.getElementById('buy7');

buy7.addEventListener('click', function() {
    if (!buy7.classList.contains('sold7')) {
        buy7.classList.add('sold7');
        buy7.innerText = "Order Shipped!";
    } else {
        buy7.classList.remove('sold7');
        buy7.innerText = "$209,000";
    }
})

const buy8 = document.getElementById('buy8');
buy8.addEventListener('click', function() {
    if (!buy8.classList.contains('sold8')) {
        buy8.classList.add('sold8');
        buy8.innerText = "Order Shipped!"; // Change text if needed
    } else {
        buy8.classList.remove('sold8');
        buy8.innerText = "$4,315,861"; // Change text if needed
    }
});

const buy9 = document.getElementById('buy9');
buy9.addEventListener('click', function() {
    if (!buy9.classList.contains('sold9')) {
        buy9.classList.add('sold9');
        buy9.innerText = "Order Shipped!";
    } else {
        buy9.classList.remove('sold9');
        buy9.innerText = "$2,700,000";
    }
});

const buy10 = document.getElementById('buy10');
buy10.addEventListener('click', function() {
    if (!buy10.classList.contains('sold10')) {
        buy10.classList.add('sold10');
        buy10.innerText = "Order Shipped!";
    } else {
        buy10.classList.remove('sold10');
        buy10.innerText = "$2,300,000";
    }
});

const buy11 = document.getElementById('buy11');
buy11.addEventListener('click', function() {
    if (!buy11.classList.contains('sold11')) {
        buy11.classList.add('sold11');
        buy11.innerText = "Order Shipped!";
    } else {
        buy11.classList.remove('sold11');
        buy11.innerText = "$2190,000";
    }
});


const user = document.getElementById('user');
const pass = document.getElementById('pass');
const regbut = document.getElementById('regbut');
const indicator = document.getElementById('indicator');

regbut.addEventListener('click', function() {
  const username = user.value.trim().toLowerCase();
  const password = pass.value.trim();
  
  if (!username || !password) {
    indicator.innerText = "Please Fill In The Field";
    return;
  }
  
  let rawAccounts = JSON.parse(localStorage.getItem('accounts')) || {};
  accounts = {};
  for (let key in rawAccounts) {
    accounts[key.toLowerCase()] = rawAccounts[key];
  }
  
  if (accounts.hasOwnProperty(username)) {
    indicator.innerText = "This Username has already been taken";
    return;
  }
  
  accounts[username] = password;
  localStorage.setItem("accounts", JSON.stringify(accounts))
  
  indicator.innerText = "Registered Successfully";
  user.value = "";
  pass.value = "";
  
})
const logbut = document.getElementById('logbut');
const loguser = document.getElementById('loguser');
const logpass = document.getElementById('logpass');
const login = document.getElementById('login');

logbut.addEventListener('click', function() {
  const logusername = loguser.value.trim().toLowerCase();
  const logpassword = logpass.value.trim();
  
  if (!logusername || !logpassword) {
    login.innerText = "Please Fill In The Field";
    return;
  }
  
    let rawAccounts = JSON.parse(localStorage.getItem('accounts')) || {};
  accounts = {};
  for (let key in rawAccounts) {
    accounts[key.toLowerCase()] = rawAccounts[key];
  }
  if (!accounts.hasOwnProperty(logusername)) {
    login.innerText = "Username Unavailable";
    return;
  }
  
  if (accounts[logusername] !== logpassword) {
    login.innerText = "Wrong Password";
    return;
  }
  
  login.innerText = "Login Successful!";
  loguser.value = "";
  logpass.value = "";
  localStorage.setItem("currentUser", logusername);
  let currentUser = localStorage.getItem('currentUser');
  document.getElementById('displayname').innerText = currentUser;
  document.getElementById('displayname2').innerText = currentUser;
});
const registerbtn = document.getElementById('registerbtn');
const signup = document.getElementById('signupform');

registerbtn.addEventListener('click', function() {
    if (signup.style.display === "none") {
        signup.style.display = "block";
    } else {
        signup.style.display = "none";
    }
})
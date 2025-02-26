function user_role(name, role, active){
  
    let user = role == "admin"? (active==true? "Admin Access Granted!":"Admin Access Revoked") :
               role == "user"? (active==true? "User Access Granted!":"User Access Revoked") : "Access Denied";
    console.log(user);                   
}
  user_role("Alice","admin", false);
  user_role("Bob", "user", true);
function access(role, experience, active, department){
    let person = role == "admin"? 
                          active==true?
                                  experience > 5?
                                              department=="IT"?
                                              "Full IT Admin Access":"Full General Admin Access":
                                  "Limited Admin Access":
                          "Admin Access Revoked":
                  role == "manager"?
                          active == true?
                                    experience>3?
                                               department=="Sales"?
                                               "Full Sales Manager Access":"Full Manager Access":
                                    "Limited Manager Access":
                          "Manager Access Revoked":  
                  role == "user"?
                          active == true?
                                    department=="Support"?
                                    "Priority Support Access" :"User Access":
                          "User Access Revoked":
                  "Invalid Role"; 
    console.log(person);
}
  access("admin", 7 , true, "IT");
  access("manager",4,true,"Marketing");
  access("user",2,true,"Support");
  access("admin",3,false,"Finance");
  
  
let resume=[
    {
        "personaldetails": {
          "name": "SUBHASHINI BALASUBRAMANIAN",
          "email": "subhashiniulk@gmail.com",
          "phone": 93049033224,
        },
        "profilesummary":{
            "intro":"Self-motivated and hardworking person ",
            "experience":"fresher",
        },
        "education": 
          {
                "degree": "Bachelor of Engineering",
                "college": "Sona College Of Technology",
                "department": "ECE",
                "cgpa": 7.95
          },
          "skills": 
      {
        "techkills":"HTML, CSS, JS",
        "softskills":"Open-minded team player, Fast learner, good communication skills"
        
      },
    }
       
     ];
     //for loop
for(var i = 0; i < resume.length; i++) {
    console.log(resume[i]);  

}
// //for In
for (let key in resume) 
    console.log(resume[key]);
    //for Each
resume.forEach(function(obj) { console.log(obj); });

//for of
for (const value of resume) {
  console.log(value); 
}
  

    
      
    
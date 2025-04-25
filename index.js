const express=require("express")

const app= express();
const PORT =8000;
const users= require("./MOCK_DATA.json");

//ROUTES

app.get("/api/users", (req, res)=>{
    return res.json(users);
})

// app.get("/api/users/:id" , (req,res)=>{
//     const id= Number(req.params.id);
//     const user= users.find((user)=> id===id);
//     return res.json(user);
// })

app.post("/api/users" , (req,res)=>{
    //create new user
    return res.json("Status Pending");
})

// app.patch("/api/users/:id" , (req,res)=>{
//     //edit user with id
//     return res.json("Status Pending");
// })

// app.delete("/api/users/:id" , (req,res)=>{
//     //Delete user with id
//     return res.json("Status Pending");
// })







/// we have noticed that get id , patch , delete have same route so lets grouped them.



app.route("/api/users/:id").get((req,res)=>{
    const id= Number(req.params.id);
    const user= users.find((user)=> id===id);
     return res.json(user);

})
.patch((req,res)=>{
    //edit user with id
    return res.json("Status Pending");

})
.delete((req,res)=>{
    //Delete user with id
    return res.json("Status Pending");

})





app.listen(PORT , ()=>console.log(`Server started at Port: ${PORT}`));
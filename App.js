import express, { response } from "express"
const app=express();
app.use(express.static('public'));
app.set("view engine", "ejs")
// app.set("views", "./views");
app.get('/home',(request,response)=>
{
    response.render("home");  
});
app.get('/about',(request,response)=>
{
    response.render("about")
})
app.get('/contact',(request,response)=>
{
    response.render("contact")
})
app.listen(3002,()=>
{
    console.log("Server running on port 3002");
})
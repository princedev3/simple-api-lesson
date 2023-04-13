const express = require("express")
const members = require("../Members")
const uuid = require("uuid")

const router = express.Router()


router.get("/",(req,res)=>{
    res.json(members)
  })

router.get("/:id",(req,res)=>{
  
  const found = members.some(member => member.id === parseInt(req.params.id))
  
  if(found){
      res.json(members.filter(member=>member.id=== parseInt(req.params.id)))
  
  }else{
      res.status(400).json({msg:"no member with that id found"})
  }
  }
  )

router.post("/",(req,res)=>{
    const newmember = {
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email,
        status: "active"
    }

    if(!newmember.name || !newmember.email){
        return res.status(400).json({msg:"please add full details"})
    }

    members.push(newmember)

   // res.json(members)
   res.redirect("/")

})

router.put("/:id",(req,res)=>{
    const found = members.some(member =>{
        if( member.id === parseInt(req.params.id)){
            member.name = req.params.name?req.params.name:member.name
            member.email = req.params.email? req.params.email:member.email
            res.json({member})
        }})
    if(found){
        members.forEach(member=>member.id === parseInt(req.params.id))
    }else{
        res.status(400).json({messag:"there is no member with that id"})
    }
})

router.delete("/:id",(req,res)=>{
    const found = members.some(member=>member.id === parseInt(req.params.id))
    if(found){
        const filtered = members.filter(member=>member.id !== parseInt(req.params.id))

        res.json({filtered})
    }else{
        res.status(400).json({message: " there is no memmber with that id"})
    }
})
//[]  {}

  module.exports = router
  
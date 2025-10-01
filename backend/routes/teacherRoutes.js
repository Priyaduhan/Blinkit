import express, { response } from "express";
const router = express.Router();
import fs from "fs";

import teacherData from "../MOCK_DATA.json" with { type: "json" };

router.get("/teachers", async(req, res) => {
  return res.json(teacherData);

//   const result = await SignupUser.create({

//   })
});

router.get("/teachers/:teachId",(req,res)=>{
    const teachId =Number( req.params.teachId);
    const data = teacherData.find(((u)=> u.id === teachId));
    return res.json(data);
})
router.post("/teachers",(req,res)=>{
    const body = req.body;
    teacherData.push({...body,id:teacherData.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(teacherData),(err,responseData)=>{
        return res.json({staus:"success",id:teacherData.length});
    })
    // console.log("body is:",body);
    
})
router.delete("/teachers/:teachId",(req,res)=>{
    const teachId =Number( req.params.teachId);
    const data = teacherData.filter(((u)=> u.id !== teachId));
    return res.json(data);
    

})
// router.patch("/teacher/:teachId",(req,res)=>{
//     const teachId =Number( req.params.teachId);
// const data = teacherData.find((u)=>u.id === teachId);
// return res.json(data);
// })

export default router;
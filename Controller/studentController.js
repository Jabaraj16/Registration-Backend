const students = require("../Model/studentModel")


exports.student=async(req,res)=>{
    const {firstname,lastname,address,email,gender,phone,password,dob,course}=req.body

    try{
        const existingStudent=await students.findOne({email})

        if(existingStudent){
            res.status(406).json("Email alredy exist !!")
        }else{
            const newStudent=new students({
                firstname,lastname,address,email,gender,phone,password,dob,course
            })

            await newStudent.save()
            res.status(200).json(newStudent)
        }
    }catch(err){
        console.log(err);
        res.status(401).json(err)
    }
}

//allstudent
exports.getStudent=async(req,res)=>{


    try{
        const existingStudent=await students.find()
        res.status(200).json(existingStudent)
    }catch(err){
        console.log(err);
        res.status(401).json(err)
    }
}
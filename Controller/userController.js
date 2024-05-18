const prisma = require('../DM/db.config');


const createUser = async(req,res)=>{

    const {name,email,password}= req.body;
    const findUser = await prisma.User.findUnique({
        where:{
            email:email
        }
    })

    if(findUser)
        {
            return res.json({msg:"email already"});
        }

    else
    {
        const newuser = await prisma.User.create({
            data:{
                name:name,
                email:email,
                 password:password
            }
        })

        return res.json({"user":newuser});
    }
}

module.exports = createUser;
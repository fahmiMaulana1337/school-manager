const { encodeToken, hash } = require("../helpers/helper");
const { compare } = require("../helpers/helper");
const { User } = require('../models/index');
const {Teacher}=require('../models')
class AdminController {
    static async addTeacher(req, response) {
        try {
            const { name, idguru, gender, address, phone, jobtitle, department, UserId,image } = req.body;
            if(!name||!idguru||!gender||!address||!phone||!jobtitle||!department||!UserId){
                throw{msg:"Semua Input Harus Di isi"}
            }

            const user = await User.findOne({
                where:{
                    id:UserId
                }
            })
            if(user){
                throw{msg:`Guru dengan Username Tersebut Sudah Ada`}
            }
            const data = await Teacher.create({
                name,
                idguru,
                gender,
                address,
                phone,
                jobtitle,
                department,
                UserId,
                image
            })
          
            response.status(200).json( data)
        } catch (error) {
            console.log(error)
            if (error.msg) {
                response.status(400).json(error)
            } else {
                response.status(500).json(error)
            }
        }
    }
    static async deleteTeacher(req,response){
        try {
            const {id}=req.params
            await Teacher.destroy({
                where:{
                    id
                }
            })
            response.status(200).json({msg:'Berhasil Menghapus Data Guru'})
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }
    }


}

module.exports = AdminController
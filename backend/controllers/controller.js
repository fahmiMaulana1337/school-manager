const { encodeToken, hash } = require("../helpers/helper");
const { compare } = require("../helpers/helper");
const { User, Teacher, Student, Class,Schedule } = require('../models/index');
class Controller {
    static async login(req, response) {
        try {
            const { username, password } = req.body;

            const data = await User.findOne({
                where: {
                    username
                }
            })
            if (!data) {
                throw { msg: 'Invalid Username/Password' }
            }
            const user = compare(password, data.password)
            if (!user) {
                throw { msg: 'Invalid Username/Password' }
            }
            const payload = { id: data.id, username: data.username, role: data.role }
            const access_token = encodeToken(payload)
            response.status(200).json({ access_token:access_token,role:data.role,username:data.username })
        } catch (error) {
            console.log(error)
            if (error.msg) {
                response.status(401).json(error)
            } else {
                response.status(500).json({ msg: "Internal Server Error" })
            }
        }
    }
    static async register(req, response) {
        try {
            let { username, password, role } = req.body
            console.log('masuk sini')
            if (!username || !password) {
                throw { msg: "Semua Input Harus Di isi" }
            }
            const user = await User.create({
                username,
                password: hash(password),
                role
            })
            response.status(200).json({ msg: "Register Berhasil" })
        } catch (error) {
            if (error.msg) {
                response.status(400).json(error)
            } else {
                response.status(500).json(error)
            }
        }
    }
    static async getTeacher(req, response) {
        try {
            const data = await Teacher.findAll()
            response.status(200).json(data)
        } catch (error) {
            response.status(500).json(error)
        }
    }
    static async getStudent(req, response) {
        try {
            const student = await Student.findAll()
            response.status(200).json(student)
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }
    }
    static async getClass(req, response) {
        try {
            const clas = await Class.findAll({
                include:Schedule
            })
            response.status(200).json(clas);
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }

    }


}

module.exports = Controller
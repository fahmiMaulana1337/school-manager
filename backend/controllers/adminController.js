const { encodeToken, hash } = require("../helpers/helper");
const { compare } = require("../helpers/helper");
const { User } = require("../models/index");
const { Teacher, Class, Schedule } = require("../models");
class AdminController {
    static async addAccount(req, response) {
        try {
            const { username, password, role } = req.body
            if (!username || !password || !role) {
                throw { msg: "All Input is required" }
            }
            const check = await User.findOne({
                where:{
                    username
                }
            })
            if(check){
                throw { msg:"Username Sudah Terdaftar"}
            }
            const user = await User.create({
                username,
                password: hash(password),
                role
            })
            response.status(201).json(user)
        } catch (error) {
            console.log(error);
            response.status(500).json(error)
        }
    }
    static async addTeacher(req, response) {
        try {
            const {
                name,
                idguru,
                gender,
                address,
                phone,
                jobtitle,
                department,
                UserId,
                image,
            } = req.body;
            if (
                !name ||
                !idguru ||
                !gender ||
                !address ||
                !phone ||
                !jobtitle ||
                !department ||
                !UserId
            ) {
                throw { msg: "Semua Input Harus Di isi" };
            }

            const user = await User.findOne({
                where: {
                    id: UserId,
                },
            });
            if (user) {
                throw { msg: `Guru dengan Username Tersebut Sudah Ada` };
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
                image,
            });

            response.status(200).json(data);
        } catch (error) {
            console.log(error);
            if (error.msg) {
                response.status(400).json(error);
            } else {
                response.status(500).json(error);
            }
        }
    }
    static async deleteTeacher(req, response) {
        try {
            const { id } = req.params;
            await Teacher.destroy({
                where: {
                    id,
                },
            });
            response.status(200).json({ msg: "Berhasil Menghapus Data Guru" });
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    }
    static async editTeacher(req, response) {
        try {
            const id = req.params.id;
            const {
                name,
                idguru,
                gender,
                address,
                phone,
                jobtitle,
                department,
                UserId,
                image,
            } = req.body;

            const data = await Teacher.update({
                name,
                idguru,
                gender,
                address,
                phone,
                jobtitle,
                department,
                UserId,
                image,
            }, {
                where: {
                    id
                }
            });
            response.status(200).json({msg:'Berhasil Mengedit data Guru'})
        } catch (error) { 
            console.log(error)
            response.status(500).json(error)
        }
    }
    static async detailTeacher(req, response) {
        try {
            const id = req.params.id

            const teacher = await Teacher.findOne({
                where: {
                    id
                }
            })

            response.status(200).json(teacher)
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }
    }
    static async addSchedule(req, response) {
        try {
            const { senin, selasa, rabu, kamis, jumat, sabtu, minggu } = req.body;

            const addSchedule = await Schedule.create({
                senin,
                selasa,
                rabu,
                kamis,
                jumat,
                sabtu,
                minggu,
            });
            response.status(201).json(addSchedule);
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    }
    static async detailSchedule(req, response) {
        try {
            const id = req.params.id;

            const schedule = await Schedule.findOne({
                where: {
                    id
                }
            })
            response.status(200).json(schedule);
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    }
    static async deleteSchedule(req, response) {
        try {
            const id = req.params.id;

            const deleteSchedule = await Schedule.destroy({
                where: {
                    id,
                },
            });

            response.status(200).json({ message: "Berhasil Menghapus Jadwal" });
        } catch (error) {
            response.status(500).json(error);
        }
    }
    static async editSchedule(req, response) {
        try {
            const id = req.params.id;
            const { senin, selasa, rabu, kamis, jumat, sabtu, minggu } = req.body;
            const addSchedule = await Schedule.update(
                {
                    senin,
                    selasa,
                    rabu,
                    kamis,
                    jumat,
                    sabtu,
                    minggu,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            response.status(201).json(addSchedule);
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    }
    static async addClass(req, response) {
        try {
            const { name, TeacherId, ScheduleId } = req.body;

            const addClass = await Class.create({
                name,
                TeacherId,
                ScheduleId,
                isActive: false,
            });
            response.status(201).json(addClass);
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    }
    static async editClass(req, response) {
        try {
            const id = req.params.id;
            const { name, TeacherId, ScheduleId } = req.body;

            const editClass = await Class.create(
                {
                    name,
                    TeacherId,
                    ScheduleId,
                    isActive: false,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            response.status(200).json(editClass);
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    }
    static async detailClass(req, response) {
        try {
            const id = req.params.id

            const classes = await Class.findOne({
                where: {
                    id
                }
            })
            response.status(200).json(classes)
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }
    }
    static async activeClass(req, response) {
        try {
            const id = req.params.id
            const classes = await Class.update({
                isActive: true,
            }, {
                where: {
                    id
                }
            })
            response.status(200).json("Berhasil Mengaktifkan Class")
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }
    }
    static async deactiveClass(req, response) {
        try {
            const id = req.params.id
            const data = await Class.update({
                isActive: false,
            }, {
                where: {
                    id
                }
            })
        } catch (error) {

        }
    }

}

module.exports = AdminController;

import { Request, Response } from "express";

import db from "../database/connection";
import ScheduleItem from "../interfaces/scheduleItem";
import convertHoursToMinutes from "../utils/convertHoursToMinutes";

    class ClassesController {
        async create(request: Request, response: Response) {
            const { name, avatar, whatsapp, biography, matter, cost, schedule } = request.body;
            const trx = await db.transaction();
            
                try {
                    const insertedTeachersIds = await trx("teachers").insert({ name, avatar, whatsapp, biography });
                    const teacher_id = insertedTeachersIds[0];
                    const insertedClassesIds = await trx("classes").insert({ matter, cost, teacher_id });
                    const class_id = insertedClassesIds[0];
                    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                        return {
                            class_id,
                                week_day: scheduleItem.week_day,
                                from: convertHoursToMinutes(scheduleItem.from),
                                to: convertHoursToMinutes(scheduleItem.to)
                        };
                    });

                        await trx("class_schedule").insert(classSchedule);
                        await trx.commit();
                        
                            return response.status(201).send();
                } catch(error) {
                    await trx.rollback();

                        return response.status(400).send();
                };
        };

        async index(request: Request, response: Response) {
            const filters = request.query;
            const week_day = filters.week_day as String;
            const matter = filters.matter as String;
            const time = filters.time as String;

                if(!filters.week_day || !filters.matter || !filters.time) {
                    return response.status(400).json();
                };

            const timeInMinutes = convertHoursToMinutes(time);
            const classes = await db("classes")
                .whereExists(function() {
                    this.select("class_schedule.*")
                        .from("class_schedule")
                        .whereRaw('`class_schedule`.`class_id`=`classes`.`id`')
                        .whereRaw('`class_schedule`.`week_day`=??', [Number(week_day)])
                        .whereRaw('`class_schedule`.`from`<=??', [timeInMinutes])
                        .whereRaw('`class_schedule`.`to`>??', [timeInMinutes])
                })
                .where("classes.matter", "=", matter)
                .join("teachers", "classes.teacher_id", "=", "teachers.id")
                .select(["classes.*", "teachers.*"]);

                    return response.json(classes);
        };
    };

        export default ClassesController;
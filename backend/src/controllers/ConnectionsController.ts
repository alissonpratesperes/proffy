import { Request, Response } from "express";

import db from "../database/connection";

    class ConnectionsController {

        async create(request: Request, response: Response) {
            const {
                teacher_id
            } = request.body;

                await db("connections").insert({
                    teacher_id
                });

                    return response.status(201).send();
        };

        async index(request: Request, response: Response) {
            const totalConnections = await db("connections").count("* as total");
            const {
                total
            } = totalConnections[0];

                return response.status(200).json({
                    total
                });
        };
    };

        export default ConnectionsController;
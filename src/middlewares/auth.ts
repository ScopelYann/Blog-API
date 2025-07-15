import auth from "@/config/auth";
import e from "express";
import jwt from "jsonwebtoken"


interface CreateNewRequest extends e.Request {
    userInfo: string,
    userName: string
}

function authMiddlewares(req: CreateNewRequest, res: e.Response, next: e.NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        res
            .status(400)
            .json({ message: "Token Not Provided" })
    }

    
    const tokenSplit: string | any = authToken?.split(' ')[1]

    jwt.verify(tokenSplit, auth.secret, (err: string | any, UserInfo: string | any) => {
        if (err) {
            return res
                .status(300)
                .json({ message: "Invalid or Expired Token" })
        }

        req.userInfo = UserInfo.id
        req.userName = UserInfo.name
        return next()
    })
}

export default authMiddlewares
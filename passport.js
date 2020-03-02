import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
// 쿠키에 id 만 담아서 보내라(id로 user를 식별함)
passport.deserializeUser(User.deserializeUser());
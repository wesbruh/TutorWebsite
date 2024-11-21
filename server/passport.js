import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "./models/userModel.js";

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1045305769855-reb8h4k2cs21alj6mfrihgvig23hljgg.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8080/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find or create user in your database
        let user = await userModel.findOne({ googleId: profile.id });

        if (!user) {
          user = await new userModel({
            googleId: profile.id,
            firstName: profile.name.givenName, //
            lastName: profile.name.familyName, //
            name: profile.displayName,
            email: profile.emails[0].value,
            role: "student",
            password: null, // not applicable for OAuth users
            answer: "",
          }).save();
        }

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  let user = await userModel.findById(id);
  done(null, user);
});

export default passport;

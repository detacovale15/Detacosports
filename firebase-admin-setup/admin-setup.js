import admin from "firebase-admin";
import fs from "fs";
import path from "path";

// ruta a tu archivo serviceAccountKey.json
const serviceAccountPath = path.resolve(
  "./firebase-admin-setup/serviceAccountKey.json",
);

// leemos y parseamos el JSON
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uid = "Ao1eHIwbh1Mqv6rVycQxb4nzs8r2";
const user = await admin.auth().getUser(uid);

console.log("Custom Claims:", user.customClaims);

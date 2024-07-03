import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/db";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
const client = await clientPromise;
const db = client.db("myApp");

export async function GET(req, res) {
    const session = await getServerSession({ req });
    if (!session || session.user.email !== req.nextUrl.searchParams.get("q")) {
        return NextResponse.json({ error: "unauthorised request" });
    }
    const email = (req.nextUrl.searchParams.get("q"));
    const user = await db.collection("users").findOne({ email: email })
    let obj = {}
    for (const [key, value] of Object.entries(user)) {
        if (key != "_id" && key != "password") {
            obj[key] = value;
        }
    }
    return NextResponse.json({ user: obj });
}

export async function POST(req, res) {
    try {
        const session = await getServerSession({ req });
        const formData = await req.formData();
        if (!session || session.user.email !== formData.get("email")) {
            return NextResponse.json({ error: "unauthorised request" });
        }
        const isUser = await db.collection("users").findOne({ phone: formData.get("phone") })
        if (!isUser) {
            for (const key of formData.keys()) {
                if (formData.get(key) !== "") {
                    let myObj = {}
                    myObj[key] = formData.get(key)
                    await db.collection("users").updateOne({ email: formData.get("email") }, { $set: myObj })
                }
            }
            return NextResponse.json({ message: "success" });
        }
        else {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
    catch (e) {
        return NextResponse.json({ error: "unauthorised request" });
    }
}


export async function PATCH(req, res) {
    const formData = await req.formData();
    const session = await getServerSession({ req });
    if (!session) {
        return NextResponse.json({ error: "unauthorised request" });
    }
    if (formData.get("currentPassword") && formData.get("newPassword")) {
        const user = await db.collection("users").findOne({ email: session.user.email })
        if (!bcrypt.compareSync(formData.get("currentPassword"), user.password)) {
            return NextResponse.json({ error: "Current Password is Incorrect" });
        }
        else {
            const hash = bcrypt.hashSync(formData.get("newPassword"), 10);
            let myPass =
            {
                password: hash
            }
            await db.collection("users").updateOne({ email: session.user.email }, { $set: myPass })
            return NextResponse.json({ message: "Password Changed" });
        }
    }
    const isUser = await db.collection("users").findOne({ email: formData.get("email") })
    if (!isUser) {
        return NextResponse.json({ message: "success" });
    }
    else {
        return NextResponse.json({ error: "Email Already Registered" });
    }
}
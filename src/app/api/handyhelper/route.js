import clientPromise from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
const client = await clientPromise;
const db = client.db("myApp");

export async function GET(req, res) {
    if (req.nextUrl.searchParams.get("q")) {
        const findUser = await db.collection("users").findOne({ name: req.nextUrl.searchParams.get("q") })
        if (!findUser) return NextResponse.json({ error: "No User Found" })
        let obj = {}
        for (const [key, value] of Object.entries(findUser)) {
            if (key != "_id" && key != "password") {
                obj[key] = value;
            }
        }
        return NextResponse.json(obj)
    }
    const users = await db.collection("users").find({ role: { $exists: true }, bio: { $exists: true }, phone: { $exists: true }, gstin: { $exists: true }, company: { $exists: true } }).toArray();
    
    const filtered = users.map(({ name, role, phone, bio, image }) => {
        return { name, role, phone, bio, image }
    })
    return NextResponse.json(filtered)
}

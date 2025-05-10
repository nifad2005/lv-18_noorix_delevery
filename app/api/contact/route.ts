import connectDB  from "@/lib/connectDB";
import { Contact } from "@/lib/models/contact.model";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    
    const {name,email,phone,subject,description} = await req.json();
    try {
        await connectDB();
        // Proceed with your logic here
        const contact = await Contact.create({
            name,
            email,
            phone,
            subject,
            description
        });
        return NextResponse.json({ succesfull:true });
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Database connection failed");
    }
}

export const GET = async (req: Request) => {
    try {
        const {searchParams} = new URL(req.url);
        const userEmail = searchParams.get("userEmail");
        await connectDB();
        const contacts = await Contact.find({ email: userEmail });
        return NextResponse.json(contacts);
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Database connection failed");
    }
}


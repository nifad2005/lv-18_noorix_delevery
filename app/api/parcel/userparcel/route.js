import { NextResponse } from "next/server";
import { Parcel } from "../../../../lib/models/parcel.model";
import connectDB from "../../../../lib/connectDB";
export const GET = async (req) => {
    console.log("Get User parcels");
    try {
        await connectDB()
        const {searchParams } = new URL(req.url)
        const email = searchParams.get('userEmail')
        console.log("User email ",email);

        const parcels = await Parcel.find({"sender.email":email});
        console.log("Parcels ",parcels);
        return NextResponse.json(parcels, { status: 200 });
    } catch (error) {
        console.error('Error fetching parcels:', error);
        return NextResponse.json({ error: 'Failed to fetch parcels' }, { status: 500 });
    }
}
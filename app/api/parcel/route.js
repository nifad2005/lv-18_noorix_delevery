import { NextResponse } from "next/server";
import {Parcel} from "../../../lib/models/parcel.model";
import connectDB from "../../../lib/connectDB";

export const POST = async (req) => {
    const parcel= await req.json();
    console.log("Parcel ",parcel);
    try {
        await connectDB()        
        const newParcel = await Parcel.create(parcel);
        console.log("New Parcel ",newParcel.id);
        return NextResponse.json({id: newParcel.id}, { status: 201 });
    } catch (error) {
        console.error('Error creating parcel:', error);
        return NextResponse.json({ error: 'Failed to create parcel' }, { status: 500 });
        
    }
}

export const GET = async (req) => {
    console.log("Get parcels");
    try {
        await connectDB()
        const {searchParams } = new URL(req.url)
        const id = searchParams.get('id')
      
        const parcel = await Parcel.findOne({_id:id});
        console.log("Parcel ",parcel);
        return NextResponse.json(parcel, { status: 200 });
    } catch (error) {
        console.error('Error fetching parcels:', error);
        return NextResponse.json({ error: 'Failed to fetch parcels' }, { status: 500 });
    }
}
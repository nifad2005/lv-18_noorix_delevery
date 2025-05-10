
import { model, models, Schema } from "mongoose"


const parcelSchema = new Schema({

        sender: { 
                senderId: { type: String, required: true },
                name: { type: String, required: true },
                email: { type: String, required: true },
                phone: { type: String, required: true },
                address: { type: String, required: true },


        },
        receiver: {

            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            address: { type: String, required: true },

        },
        additionalInfo: {
            weight: { type: Number, minimum: 0, required: true, default: 0.1},
        
            status: { type: String, required: true, enum: ["pending", "in-transit", "delivered"] , default: "pending" },
        },

},{
    timestamps: true,
}
)

export const Parcel = models.Parcel || model('Parcel', parcelSchema)
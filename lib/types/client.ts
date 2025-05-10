export type Messages ={
    name: string;
    email: string;
    phone: string;
    subject: string;
    description: string;
    createdAt: string;
}[]    

export type Parcel = {
    _id: string;
    sender: {
        name: string;
        email: string;
        phone: string;
    };
    receiver: {
        name: string;
        email: string;
        phone: string;
    };
    additionalInfo: {
        status: string;
        trackingNumber: string;
        deliveryDate: string;
    };
    createdAt: string;
}
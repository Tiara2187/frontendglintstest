export interface Subscription {
    _id: string;
    productName: string;
    productTag: string;
    eligibleUser: string;
    productStatus: string

}

export class UpdateSubscription{
    productName : string | undefined;
    productTag : string | undefined;
    eligibleUser: string | undefined;
    productStatus: string | undefined;
}
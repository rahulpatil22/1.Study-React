export interface IProduct {
    id:string;
    title: string;
    description: string;
}

// export const dummyProductList : IProduct[] = [{
//     id: new Date().toJSON().toString(),
//     title: "Dummy1",
//     description: "Dummy11"
// }];

export enum PageEnum {
    list,
    add,
    edit
}
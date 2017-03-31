import { Edm } from "odata-v4-server"
import { Category } from "./category"

@Edm.Annotate({
    term: "UI.DisplayName",
    string: "Products"
})
export class Product{
    @Edm.Key
    @Edm.Computed
    @Edm.String
    _id:ObjectID
 
    @Edm.EntityType("Category")
    @Edm.Partner("Products")
    Category:Category
 
    @Edm.String
    @Edm.Required
    CategoryId:ObjectID
 
    @Edm.Boolean
    Discontinued:boolean
 
    @Edm.String
    Name:string
 
    @Edm.String
    QuantityPerUnit:string
 
    @Edm.Decimal
    UnitPrice:number
}
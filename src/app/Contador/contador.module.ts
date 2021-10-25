import { NgModule } from "@angular/core";
import { ContadorComponnet } from "./Contador/contador.component";
@NgModule({
    declarations:[
        ContadorComponnet
    ],
    exports:[
        ContadorComponnet
    ],
    imports:[

    ]
})
export class ContadorModule{}
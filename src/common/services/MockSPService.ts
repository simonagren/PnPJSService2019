import { PageContext } from "@microsoft/sp-page-context";
import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
import { ISPService } from ".";
import { sp } from "@pnp/sp";
import { IStuff } from "../models";

export class MockSPService {
    public static readonly serviceKey: ServiceKey<ISPService> = ServiceKey.create<ISPService>('Anders:MockSPService', MockSPService);

    constructor(serviceScope: ServiceScope) {
        //No need to set up
    }

    public async getStuff(input: string): Promise<IStuff[]> {
        return new Promise<IStuff[]>((resolve, reject) => {
            const stuff: IStuff[] = [];
            resolve(stuff);
        });
    }
}


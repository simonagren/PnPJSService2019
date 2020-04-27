import { PageContext } from "@microsoft/sp-page-context";
import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
import { ISPService } from "./ISPService";
import { sp } from "@pnp/sp";
import { IStuff } from "../models";

export class SPService {
    public static readonly serviceKey: ServiceKey<ISPService> = ServiceKey.create<ISPService>('Anders:SPService', SPService);

    constructor(serviceScope: ServiceScope) {
        serviceScope.whenFinished(async () => {
            const pageContext = serviceScope.consume(PageContext.serviceKey);

            sp.setup({
                spfxContext: {
                    pageContext: pageContext
                }
            });
        });
    }

    public async getStuff(input: string): Promise<IStuff[]> {
        try {
            const stuff = await sp.web.lists.get();
            return stuff;
        } catch (error) {
            Promise.reject(error);
        }
    }
}


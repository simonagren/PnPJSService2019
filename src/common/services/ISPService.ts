import { IStuff } from "../models";

export interface ISPService {
    getStuff(): Promise<IStuff[]>;
}
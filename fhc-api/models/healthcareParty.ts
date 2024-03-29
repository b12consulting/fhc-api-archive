/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';


export interface HealthcareParty {
    addresses?: Array<Address>;
    bankAccount?: string;
    bic?: string;
    cbe?: string;
    civility?: string;
    companyName?: string;
    ehp?: string;
    firstName?: string;
    gender?: HealthcareParty.GenderEnum;
    invoiceHeader?: string;
    languages?: Array<string>;
    lastName?: string;
    name?: string;
    nihii?: string;
    proxyBankAccount?: string;
    proxyBic?: string;
    speciality?: string;
    ssin?: string;
    type?: string;
}
export namespace HealthcareParty {
    export type GenderEnum = 'M' | 'F' | 'I' | 'C' | 'Y' | 'X' | 'U';
    export const GenderEnum = {
        M: 'M' as GenderEnum,
        F: 'F' as GenderEnum,
        I: 'I' as GenderEnum,
        C: 'C' as GenderEnum,
        Y: 'Y' as GenderEnum,
        X: 'X' as GenderEnum,
        U: 'U' as GenderEnum
    }
}

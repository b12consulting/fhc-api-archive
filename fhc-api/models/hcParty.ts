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
import { CDHCPARTY } from './cDHCPARTY';
import { IDHCPARTY } from './iDHCPARTY';


export interface HcParty {
    applicationID?: string;
    cbe?: string;
    cds?: Array<CDHCPARTY>;
    ehp?: string;
    familyName?: string;
    firstName?: string;
    hubId?: string;
    ids?: Array<IDHCPARTY>;
    inss?: string;
    name?: string;
    nihii?: string;
    type?: string;
}

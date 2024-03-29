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


export interface CDTELECOM {
    dn?: string;
    l?: string;
    s?: CDTELECOM.SEnum;
    sv?: string;
    value?: string;
}
export namespace CDTELECOM {
    export type SEnum = 'CD_ADDRESS' | 'CD_TELECOM';
    export const SEnum = {
        ADDRESS: 'CD_ADDRESS' as SEnum,
        TELECOM: 'CD_TELECOM' as SEnum
    }
}

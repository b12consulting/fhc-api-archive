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


export interface CDCONSENT {
    dn?: string;
    l?: string;
    s?: CDCONSENT.SEnum;
    sl?: string;
    sv?: string;
    value?: CDCONSENT.ValueEnum;
}
export namespace CDCONSENT {
    export type SEnum = 'CD_CONSENTTYPE' | 'LOCAL';
    export const SEnum = {
        CDCONSENTTYPE: 'CD_CONSENTTYPE' as SEnum,
        LOCAL: 'LOCAL' as SEnum
    }
    export type ValueEnum = 'LOCAL' | 'PROSPECTIVE' | 'RETROSPECTIVE';
    export const ValueEnum = {
        LOCAL: 'LOCAL' as ValueEnum,
        PROSPECTIVE: 'PROSPECTIVE' as ValueEnum,
        RETROSPECTIVE: 'RETROSPECTIVE' as ValueEnum
    }
}
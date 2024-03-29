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


export interface IDPATIENT {
    s?: IDPATIENT.SEnum;
    sl?: string;
    sv?: string;
    value?: string;
}
export namespace IDPATIENT {
    export type SEnum = 'ID_PATIENT' | 'INSS' | 'EID_CARDNO' | 'SIS_CARDNO' | 'ISI_CARDNO' | 'LOCAL';
    export const SEnum = {
        IDPATIENT: 'ID_PATIENT' as SEnum,
        INSS: 'INSS' as SEnum,
        EIDCARDNO: 'EID_CARDNO' as SEnum,
        SISCARDNO: 'SIS_CARDNO' as SEnum,
        ISICARDNO: 'ISI_CARDNO' as SEnum,
        LOCAL: 'LOCAL' as SEnum
    }
}

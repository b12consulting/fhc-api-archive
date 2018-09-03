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


export interface ZoneDescription {
    label?: string;
    length?: number;
    position?: number;
    type?: ZoneDescription.TypeEnum;
    value?: string;
    zone?: string;
    zones?: Array<string>;
    zonesList?: string;
}
export namespace ZoneDescription {
    export type TypeEnum = 'ALPHANUMERICAL' | 'NUMERICAL';
    export const TypeEnum = {
        ALPHANUMERICAL: 'ALPHANUMERICAL' as TypeEnum,
        NUMERICAL: 'NUMERICAL' as TypeEnum
    }
}

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


export interface Insurability {
    ambulatory?: boolean;
    dental?: boolean;
    endDate?: number;
    hospitalisation?: boolean;
    identificationNumber?: string;
    insuranceId?: string;
    parameters?: { [key: string]: string; };
    startDate?: number;
    titularyId?: string;
}

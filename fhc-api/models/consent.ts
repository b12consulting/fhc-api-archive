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
import { AuthorWithPatientDto } from './authorWithPatientDto';
import { KmehrCd } from './kmehrCd';
import { PatientId } from './patientId';


export interface Consent {
    author?: AuthorWithPatientDto;
    cds?: Array<KmehrCd>;
    patient?: PatientId;
    revokedate?: number;
    signdate?: number;
}

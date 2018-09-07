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
import { Eattest } from './eattest';
import { EattestAcknowledgeType } from './eattestAcknowledgeType';


export interface SendAttestResultWithResponse {
    acknowledge?: EattestAcknowledgeType;
    attest?: Eattest;
    invoicingNumber?: string;
    kmehrMessage?: Array<string>;
    xades?: Array<string>;
}
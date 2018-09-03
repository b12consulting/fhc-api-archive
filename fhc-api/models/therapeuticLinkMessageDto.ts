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
import { ErrorDto } from './errorDto';
import { TherapeuticLinkDto } from './therapeuticLinkDto';


export interface TherapeuticLinkMessageDto {
    complete?: boolean;
    errors?: Array<ErrorDto>;
    therapeuticLink?: TherapeuticLinkDto;
}

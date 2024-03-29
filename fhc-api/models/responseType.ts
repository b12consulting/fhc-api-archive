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
import { AuthorType } from './authorType';
import { IDKMEHR } from './iDKMEHR';
import { RequestType } from './requestType';


export interface ResponseType {
    author?: AuthorType;
    date?: Date;
    id?: IDKMEHR;
    request?: RequestType;
    time?: Date;
}

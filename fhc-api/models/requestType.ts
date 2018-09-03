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


export interface RequestType {
    author?: AuthorType;
    breaktheglass?: string;
    date?: Date;
    id?: IDKMEHR;
    maxrows?: number;
    time?: Date;
}

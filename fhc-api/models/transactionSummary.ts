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
import { AuthorDto } from './authorDto';
import { KmehrCd } from './kmehrCd';
import { KmehrId } from './kmehrId';


export interface TransactionSummary {
    author?: AuthorDto;
    authorsList?: string;
    cds?: Array<KmehrCd>;
    date?: number;
    desc?: string;
    ids?: Array<KmehrId>;
    iscomplete?: boolean;
    isvalidated?: boolean;
    recorddatetime?: number;
    time?: number;
}

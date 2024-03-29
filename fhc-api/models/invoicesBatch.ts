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
import { Invoice } from './invoice';
import { InvoiceSender } from './invoiceSender';


export interface InvoicesBatch {
    batchRef?: string;
    invoices?: Array<Invoice>;
    invoicingMonth?: number;
    invoicingYear?: number;
    ioFederationCode?: string;
    numericalRef?: number;
    sender?: InvoiceSender;
    uniqueSendNumber?: number;
}

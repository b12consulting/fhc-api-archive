import { XHR } from './XHR';
import { FormattingUtil as Formatter } from '@medispring/util';

const FormattingUtil = new Formatter();

export interface EattestCardReading {
  date?: number;
  inputType: number;
  manualInputReason?: number;
  mediaType: number;
  serial?: string;
  time?: number;
}

export interface EattestHcParty {
  cdHcParty?: string;
  firstName?: string;
  lastName?: string;
  idHcParty?: string;
  idSsin?: string;
}

export interface EattestRequestor {
  date?: number;
  hcp?: EattestHcParty;
}

export interface EattestCode {
  cardReading?: EattestCardReading;
  date?: number;
  doctorSupplement?: number;
  fee: number;
  gmdManager?: EattestHcParty;
  internship?: EattestHcParty;
  location?: EattestHcParty;
  norm?: number;
  quantity?: number;
  reglementarySupplement?: number;
  reimbursement: number;
  relativeService?: string;
  requestor?: EattestRequestor;
  riziv: string;
}

export interface Eattest {
  codes: Array<EattestCode>;
}

export interface MycarenetError {
  path: string;
  regex: string;
  locFr: string;
  msgFr: string;
  code: string;
  uid: string;
  value: string;
  locNl : string;
  msgNl: string;
}

export interface EattestAcknowledgeType {
  errors: Array<MycarenetError>;
}

export interface EattestResult {
  acknowledge: EattestAcknowledgeType;
  attest: Eattest;
  invoicingNumber: string;
  kmehrMessage: string;
  xades: string;
}


export class FHCEattest {
  host: string;
  headers: Array<XHR.Header>;

  constructor(host: string, headers: any) {
    this.host = host;
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]));
  }

  handleError(e: XHR.Data) {
    if (e.status === 401) throw Error('auth-failed');
    else throw Error('api-error' + e.status);
  }

  sendEattest(
    patientSsin: string,
    keystoreId: string,
    tokenId: string,
    passPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    hcpCbe: string,
    attest: Eattest,
    date?: number,
  ): Promise<EattestResult> {
    const url = this.host + '/eattest/send/' + patientSsin + '/verbose';
    const params = { keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, hcpCbe, date: date ? date.toString() : undefined };
    const urlParams = FormattingUtil.toUrlParams(params);
    const headers = [new XHR.Header('Content-Type', 'application/json')];
    return XHR.sendCommand('POST', url + '?' + urlParams, headers, JSON.stringify(attest))
      .then((res) => {
        return res.body as EattestResult;
      })
      .catch(err => {
        this.handleError(err);
        return null;
      });
  }
}

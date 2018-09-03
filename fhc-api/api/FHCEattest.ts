import { XHR } from './XHR';
import { FormattingUtil as Formatter } from '@medispring/util';
import { Eattest } from '../models/eattest';
import { SendAttestResultWithResponse } from '../models/sendAttestResultWithResponse';

const FormattingUtil = new Formatter();

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
  ): Promise<SendAttestResultWithResponse> {
    const url = this.host + '/eattest/send/' + patientSsin + '/verbose';
    const params = { keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, hcpCbe, date: date ? date.toString() : undefined };
    const urlParams = FormattingUtil.toUrlParams(params);
    const headers = [new XHR.Header('Content-Type', 'application/json')];
    return XHR.sendCommand('POST', url + '?' + urlParams, headers, JSON.stringify(attest))
      .then((res) => {
        return res.body as SendAttestResultWithResponse;
      })
      .catch(err => {
        this.handleError(err);
        return null;
      });
  }
}

import { XHR } from './XHR';
import { TarificationConsultationResultDto } from '@medispring/icure-api';
import * as _ from 'lodash';

export class FHCTarificationApi {
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

  consultTarification(ssin: string,
                      tokenId: string,
                      keystoreId: string,
                      passPhrase: string,
                      hcpFirstName: string,
                      hcpLastName: string,
                      hcpNihii: string,
                      hcpSsin: string,
                      codes: Array<string>,
                      date?: number,
                      gmdNihii?: string,
                      justification?: string,
                      ): Promise<TarificationConsultationResultDto> {
    const url = this.host + '/tarif/' + ssin;
    const params = { tokenId, keystoreId, passPhrase, hcpFirstName, hcpLastName, hcpNihii, hcpSsin, date, gmdNihii, justification };
    const urlParams = _.filter(_.map(params, (value, key) => value ? key + '=' + value: undefined)).join('&');
    const codeData = '["' + codes.join('","') + '"]';
    const headers = [new XHR.Header('Content-Type', 'application/json')];
    return XHR.sendCommand('POST', url + '?' + urlParams, headers, codeData)
      .then((res) => {
        return res.body as TarificationConsultationResultDto;
      })
      .catch(err => {
        this.handleError(err);
        return null;
      });
  }
}

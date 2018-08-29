import { XHR } from './XHR';
import { TarificationConsultationResultDto } from '@medispring/icure-api';
import { FormattingUtil as Formatter } from '@medispring/util';
import * as _ from 'lodash';

const FormattingUtil = new Formatter();


export class FHCTarificationApi {
  host: string;
  headers: Array<XHR.Header>;

  constructor(host: string, headers: any) {
    this.host = host;
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]));
  }

  handleError(e: XHR.Data): never {
    if (e.status === 401) throw Error('auth-failed');
    else throw Error('api-error' + e.status);
  }

  /**
   * A GET call to retrieve data from the eTar(ification) service
   * @param {string} ssin
   * @param {string} tokenId
   * @param {string} keystoreId
   * @param {string} passPhrase
   * @param {string} hcpFirstName
   * @param {string} hcpLastName
   * @param {string} hcpNihii
   * @param {string} hcpSsin
   * @param {Array<string>} codes
   * @param {number} date
   * @param {string} gmdNihii
   * @param {string} justification
   * @returns {Promise<TarificationConsultationResultDto>}
   */
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
    const params = { tokenId, keystoreId, passPhrase, hcpFirstName, hcpLastName, hcpNihii, hcpSsin, date: date ? date.toString() : undefined, gmdNihii, justification };
    const urlParams = FormattingUtil.toUrlParams(params);
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

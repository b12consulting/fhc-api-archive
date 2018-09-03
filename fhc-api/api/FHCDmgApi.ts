import { XHR } from './XHR';
import { FormattingUtil } from '@medispring/util';

export class FHCDmgApi {
  host: string;
  headers: Array<XHR.Header>;

  constructor(host: string, headers: any) {
    this.host = host;
    this.headers = headers;
  }

  handleError(e: XHR.Data): never {
    if (e.status === 401) throw Error('auth-failed');
    else throw Error('api-error' + e.status);
  }

  consultDmg(
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpFirstName,
    hcpLastName,
    patientSsin?,
    patientGender?,
    oa?,
    regNrWithMut?,
    requestDate?
  ) {
    const params = { keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientGender, oa, regNrWithMut, requestDate};
    const urlParams = new FormattingUtil().toUrlParams(params);
    const _url =
      this.host +
      '/gmd' +
      '?ts=' +
      new Date().getTime() +
        urlParams;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  notifyDmg(
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpFirstName,
    hcpLastName,
    nomenclature,
    patientSsin?,
    oa?,
    regNrWithMut?,
    patientFirstName?,
    patientLastName?,
    patientGender?,
    requestDate?
  ) {
    const params = { keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, nomenclature, patientSsin, oa, regNrWithMut, patientFirstName, patientLastName, patientGender, requestDate};
    const urlParams = new FormattingUtil().toUrlParams(params);
    const _url =
      this.host +
      `/gmd/notify/${nomenclature}` +
      '?ts=' +
      new Date().getTime() +
        urlParams;
    return XHR.sendCommand('POST', _url, this.headers).catch(err => this.handleError(err));
  }

  postDmgsListRequestUsingPOST(
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpFirstName,
    hcpLastName,
    oa?,
    requestDate?
  ) {
    const params = { keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, oa, requestDate };
    const urlParams = new FormattingUtil().toUrlParams(params);
    const _url =
      this.host +
      `/gmd/reqlist` +
      '?ts=' +
      new Date().getTime() +
        urlParams;
    return XHR.sendCommand('POST', _url, this.headers).catch(err => this.handleError(err));
  }

  registerDoctorUsingPOST(
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpFirstName,
    hcpLastName,
    oa,
    bic,
    iban
  ) {
    const params = { keystoreId, tokenId, passPhrase, hcpNihii,hcpSsin, hcpFirstName, hcpLastName, bic, iban };
    const urlParams = new FormattingUtil().toUrlParams(params);
    const _url =
      this.host +
      `/gmd/register/${oa}` +
      '?ts=' +
      new Date().getTime() +
      urlParams;
    return XHR.sendCommand('POST', _url, this.headers).catch(err => this.handleError(err));
  }
}

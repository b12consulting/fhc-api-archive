import { XHR } from './XHR';

export class FHCDmgApi {
  host: string;
  headers: Array<XHR.Header>;

  constructor(host: string, headers: any) {
    this.host = host;
    this.headers = headers;
  }

  handleError(e: XHR.Data) {
    if (e.status === 401) throw Error('auth-failed');
    else throw Error('api-error' + e.status);
  }

  postDmgsListRequestUsingPOST(
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpFirstName,
    hcpLastName,
    oa,
    requestDate
  ) {
    const _url =
      this.host +
      `/gmd/reqlist` +
      '?ts=' +
      new Date().getTime() +
      (keystoreId ? '&keystoreId=' + keystoreId : '') +
      (tokenId ? '&tokenId=' + tokenId : '') +
      (passPhrase ? '&passPhrase=' + passPhrase : '') +
      (hcpNihii ? '&hcpNihii=' + hcpNihii : '') +
      (hcpSsin ? '&hcpSsin=' + hcpSsin : '') +
      (hcpFirstName ? '&hcpFirstName=' + hcpFirstName : '') +
      (hcpLastName ? '&hcpLastName=' + hcpLastName : '') +
      (oa ? '&oa=' + oa : '') +
      (requestDate ? '&requestDate=' + requestDate : '');
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
    const _url =
      this.host +
      `/gmd/register/${oa}` +
      '?ts=' +
      new Date().getTime() +
      (keystoreId ? '&keystoreId=' + keystoreId : '') +
      (tokenId ? '&tokenId=' + tokenId : '') +
      (passPhrase ? '&passPhrase=' + passPhrase : '') +
      (hcpNihii ? '&hcpNihii=' + hcpNihii : '') +
      (hcpSsin ? '&hcpSsin=' + hcpSsin : '') +
      (hcpFirstName ? '&hcpFirstName=' + hcpFirstName : '') +
      (hcpLastName ? '&hcpLastName=' + hcpLastName : '') +
      (bic ? '&bic=' + bic : '') +
      (iban ? '&iban=' + iban : '');
    return XHR.sendCommand('POST', _url, this.headers).catch(err => this.handleError(err));
  }
}

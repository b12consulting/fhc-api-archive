import { XHR } from './XHR';

export class FHCGeninsApi {
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

  getGeneralInsurabilityUsingGET(
    ssin,
    tokenId,
    keystoreId,
    passPhrase,
    hcpNihii, //inami
    hcpSsin,
    hcpName,
    hcpQuality?, //doctor, dentiste
    date?,
    hospitalized?
  ) {
    const _url =
      this.host +
      `/genins/${ssin}` +
      '?ts=' +
      new Date().getTime() +
      (tokenId ? '&tokenId=' + tokenId : '') +
      (keystoreId ? '&keystoreId=' + keystoreId : '') +
      (passPhrase ? '&passPhrase=' + encodeURIComponent(passPhrase) : '') +
      (hcpNihii ? '&hcpNihii=' + hcpNihii : '') +
      (hcpSsin ? '&hcpSsin=' + hcpSsin : '') +
      (hcpName ? '&hcpName=' + hcpName : '') +
      (hcpQuality ? '&hcpQuality=' + hcpQuality : '') +
      (date ? '&date=' + date : '') +
      (hospitalized ? '&hospitalized=' + hospitalized : '');
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  getGeneralInsurabilityByMembershipUsingGET(
    io,
    ioMembership,
    tokenId,
    keystoreId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpName,
    hcpQuality?,
    date?,
    hospitalized?
  ) {
    const _url =
      this.host +
      `/genins/${io}/${ioMembership}` +
      '?ts=' +
      new Date().getTime() +
      (tokenId ? '&tokenId=' + tokenId : '') +
      (keystoreId ? '&keystoreId=' + keystoreId : '') +
      (passPhrase ? '&passPhrase=' + passPhrase : '') +
      (hcpNihii ? '&hcpNihii=' + hcpNihii : '') +
      (hcpSsin ? '&hcpSsin=' + hcpSsin : '') +
      (hcpName ? '&hcpName=' + hcpName : '') +
      (hcpQuality ? '&hcpQuality=' + hcpQuality : '') +
      (date ? '&date=' + date : '') +
      (hospitalized ? '&hospitalized=' + hospitalized : '');
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }
}

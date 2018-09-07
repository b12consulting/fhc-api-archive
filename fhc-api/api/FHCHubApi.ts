import { XHR } from './XHR';
import * as _ from 'lodash';

export class FHCHubApi {
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

  getPatientConsentUsingGET(
    endpoint,
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpZip,
    patientSsin
  ) {
    const params = { endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin };
    const queryString = _.filter(_.map(params, (value, key) => value ? key + '=' + value: undefined)).join('&');
    const _url = `${this.host}/hub/consent/${patientSsin}?ts=${new Date().getTime()}&${queryString}`;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  getHCPConsentUsingGET(
    endpoint,
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpZip
  ) {
    const params = { endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip };
    const queryString = _.filter(_.map(params, (value, key) => value ? key + '=' + value: undefined)).join('&');
    const _url = `${this.host}/hub/consent/${hcpNihii}?ts=${new Date().getTime()}&${queryString}`;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  getTransactionListUsingGET(
    endpoint,
    keystoreId,
    tokenId,
    passPhrase,
    hcpLastName,
    hcpFirstName,
    hcpNihii,
    hcpSsin,
    hcpZip,
    patientSsin,
    from?,
    to?,
    authorNihii?,
    authorSsin?,
    breakTheGlassReason?,
    isGlobal = false
  ) {
    console.log(arguments);
    const params = { endpoint, keystoreId, tokenId, passPhrase, hcpLastName, hcpFirstName, hcpNihii, hcpSsin, hcpZip, patientSsin, from, to, authorNihii, authorSsin, breakTheGlassReason, isGlobal };
    const queryString = _.filter(_.map(params, (value, key) => value ? key + '=' + value: undefined)).join('&');
    const _url = `${this.host}/hub/list/${patientSsin}?ts=${new Date().getTime()}&${queryString}`;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  getPatientUsingGET(
    endpoint,
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpZip,
    patientSsin,
  ) {
    const params = { endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin };
    const queryString = _.filter(_.map(params, (value, key) => value ? key + '=' + value: undefined)).join('&');
    const _url = `${this.host}/hub/list/${hcpNihii}?ts=${new Date().getTime()}&${queryString}`;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  getTransactionUsingGET(
    endpoint,
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpZip,
    ssin,
    sv,
    sl,
    value
  ) {
    const params = { endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, ssin, sv, sl, value };
    const queryString = _.filter(_.map(params, (val, key) => val ? key + '=' + val: undefined)).join('&');
    const _url = `${this.host}/hub/t/${ssin}/${sv}/${sl}/${value}?ts=${new Date().getTime()}&${queryString}`;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  getTherapeuticLinksUsingGET(
    endpoint,
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpZip,
    patientSsin,
    therLinkType?,
    from?,
    to?
  ) {
    const params = { endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin, therLinkType, from, to };
    const queryString = _.filter(_.map(params, (val, key) => val ? key + '=' + val: undefined)).join('&');
    const _url = `${this.host}/hub/therlink/${hcpNihii}/${patientSsin}?ts=${new Date().getTime()}&${queryString}`;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }

  getTransactionSetUsingGET(
    endpoint,
    keystoreId,
    tokenId,
    passPhrase,
    hcpNihii,
    hcpSsin,
    hcpZip,
    ssin,
    sv,
    sl,
    value
  ) {
    const params = { endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, ssin, sv, sl, value };
    const queryString = _.filter(_.map(params, (val, key) => val ? key + '=' + val: undefined)).join('&');
    const _url = `${this.host}/hub/ts/${ssin}/${sv}/${sl}/${value}?ts=${new Date().getTime()}&${queryString}`;
    return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
  }
}

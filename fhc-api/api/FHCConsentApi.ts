import { XHR } from './XHR';

export class FHCConsentApi {
    host: string;
    headers: Array<XHR.Header>;

    constructor(host: string, headers: any) {
        this.host = host;
        this.headers = headers; //Object.keys(headers).map(k => new XHR.Header(k, headers[k]));
    }

    handleError(e: XHR.Data): never {
        if (e.status === 401) throw Error('auth-failed');
        else throw Error('api-error' + e.status);
    }

    getPatientConsentUsingGET(keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName) {
        const _url = this.host+`/consent/${patientSsin}` + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "")
        return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
    }

    registerPatientConsentUsingPOST (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber?, isiCardNumber?) {
        const _url = this.host+`/consent/${patientSsin}` + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "")
        return XHR.sendCommand('POST', _url, this.headers).catch(err => this.handleError(err));
    }

    revokePatientConsentUsingPOST (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, existingConsent, eidCardNumber?, isiCardNumber?) {
        const _url = this.host+`/consent/revoke/${patientSsin}` + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "")
        return XHR.sendCommand('POST', _url,this.headers, JSON.stringify(existingConsent)).catch(err => this.handleError(err));
    }
}

import { XHR } from './XHR';

export class FHCTerlinkApi {
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

    doesLinkExistUsingPOST (keystoreId, tokenId, passPhrase, therLink) {
        const _url = this.host + "/therlink/check" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return XHR.sendCommand('POST', _url,this.headers, JSON.stringify(therLink)).catch(err => this.handleError(err));
    }

    getAllTherapeuticLinksUsingGET (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber?, isiCardNumber?, startDate?, endDate?, type?, sign?) {
        const _url = this.host+`/therlink/${patientSsin}/${hcpNihii}` + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "") + (startDate ? "&startDate=" + startDate : "") + (endDate ? "&endDate=" + endDate : "") + (type ? "&type=" + type : "") + (sign ? "&sign=" + sign : "")
        return XHR.sendCommand('GET', _url, this.headers).catch(err => this.handleError(err));
    }

    getAllTherapeuticLinksWithQueryLinkUsingPOST (keystoreId, tokenId, passPhrase, queryLink, sign?) {
        const _url = this.host+"/therlink/query" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (sign ? "&sign=" + sign : "")
        return XHR.sendCommand('POST', _url,this.headers, JSON.stringify(queryLink)).catch(err => this.handleError(err));
    }

    registerTherapeuticLinkUsingPOST1 (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber?, isiCardNumber?, start?, end?, therLinkType?, comment?, sign?) {
        const _url = this.host+"/therlink/register" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientSsin ? "&patientSsin=" + patientSsin : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "") + (start ? "&start=" + start : "") + (end ? "&end=" + end : "") + (therLinkType ? "&therLinkType=" + therLinkType : "") + (comment ? "&comment=" + comment : "") + (sign ? "&sign=" + sign : "")
        return XHR.sendCommand('POST', _url,this.headers).catch(err => this.handleError(err));
    }

    revokeLinkUsingPOST (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber?, isiCardNumber?, start?, end?, therLinkType?, comment?, sign?) {
        const _url = this.host+`/therlink/revoke/${patientSsin}/${hcpNihii}` + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "") + (start ? "&start=" + start : "") + (end ? "&end=" + end : "") + (therLinkType ? "&therLinkType=" + therLinkType : "") + (comment ? "&comment=" + comment : "") + (sign ? "&sign=" + sign : "")
        return XHR.sendCommand('POST', _url,this.headers).catch(err => this.handleError(err));
    }
    revokeLinkUsingPOST1 (keystoreId, tokenId, passPhrase, therLink, sign?) {
        const _url = this.host+"/therlink/revoke" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (sign ? "&sign=" + sign : "")
        return XHR.sendCommand('POST', _url,this.headers, JSON.stringify(therLink)).catch(err => this.handleError(err));
    }
}

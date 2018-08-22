import {XHR} from "./XHR"

export class FHCStsApi {
    host : string
    headers : Array<XHR.Header>

    constructor(host: string, headers: any) {
        this.host = host
        this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
    }

    handleError(e: XHR.Data): never {
        if (e.status == 401) throw Error('auth-failed')
        else throw Error('api-error'+ e.status)
    }

	uploadKeystoreUsingPOST(file) {
        const _body = new FormData();
        _body.append('file', new Blob(file, { type: "application/octet-stream" }));

        const _url = this.host + "/sts/keystore" + "?ts=" + new Date().getTime();
        return XHR.sendCommand('POST', _url , this.headers, _body)
                .catch(err => this.handleError(err))
    }

    requestTokenUsingGET(passPhrase, ssin, keystoreId) {
        const _url = this.host + `/sts/token/${keystoreId}` + "?ts=" + new Date().getTime() + (ssin ? "&ssin=" + ssin : "") + (passPhrase ? "&passPhrase=" + encodeURIComponent(passPhrase) : "");

		return XHR.sendCommand('GET', _url , this.headers)
                .catch(err => this.handleError(err))
	}
}

import { HttpHeaders } from '@angular/common/http';

export class Headers {
    public static readonly HEADER_TEXT = new HttpHeaders({'Content-type': 'text/plain'});
    public static readonly HEADER_JSON = new HttpHeaders({'Content-type': 'application/json'});
}

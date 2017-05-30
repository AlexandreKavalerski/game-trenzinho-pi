import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

import { Cenario } from './cenario';

@Injectable()
export class CenariosService {
    constructor(private http: Http) {
    }

    all(): Observable<[Cenario]> {
        return this.http.get('http://localhost:3000/cenarios')
            .map(response => response.json() as Cenario[]);
    }

    find(id: number = 1): Observable<Cenario> {
        return this.all()
            .map(cenarios => cenarios.find(cenario => cenario.id === id));
    }
}

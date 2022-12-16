import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../entities/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>('/assets/contracts.json');
  }
}

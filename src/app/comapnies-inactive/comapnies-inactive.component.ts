import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../services/company-service.service';

@Component({
  selector: 'app-comapnies-inactive',
  templateUrl: './comapnies-inactive.component.html',
  styleUrls: ['./comapnies-inactive.component.css']
})
export class ComapniesInactiveComponent implements OnInit {

  // Cria variável company sendo uma Company;
  company = {} as Company;

  // Cria variável companies sendo uma Company Array
  companies = [] as Company[];

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  // Criando método getCompanies que busca de nosso serviço CompanyServiceService
  getCompanies() {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies
    })
  }

}

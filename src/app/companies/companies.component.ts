import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../services/company-service.service';
import { Company } from '../models/company';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {


  // Cria variável company sendo uma Company;
  company = {} as Company;

  // Cria variável companies sendo uma Company Array
  companies = [] as Company[];

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit(): void {
    // Chama o método getComapanies() ao inicializar o módulo
    this.getCompanies();
  }

  // Criando método getCompanies que busca de nosso serviço CompanyServiceService
  getCompanies() {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies
    })
  }

}

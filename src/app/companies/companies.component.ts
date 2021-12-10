import { DialogCreationComponent } from './../dialog-creation/dialog-creation.component';
import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../services/company-service.service';
import { Company } from '../models/company';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private companyService: CompanyServiceService,
              private dialog: MatDialog) { }

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

  // Criar companhia
  newCompany(){
    let dialogRef = this.dialog.open(DialogCreationComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.company = result;
      this.companyService.saveCompany(this.company)
    });
  }

  updateCompany(company: Company){
    let dialogRef = this.dialog.open(DialogCreationComponent, {data: { ...company }});
    dialogRef.afterClosed().subscribe(result => {
      this.company = result;
      this.companyService.updateCompany(this.company);
    });
  }

  // Limpa o form

}

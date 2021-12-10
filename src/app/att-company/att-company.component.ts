import { CompanyServiceService } from './../services/company-service.service';
import { Company } from './../models/company';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-company',
  templateUrl: './att-company.component.html',
  styleUrls: ['./att-company.component.css']
})
export class AttCompanyComponent implements OnInit {

  descricao: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AttCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Company,
    private comapnyService: CompanyServiceService) {
    this.descricao = this.formBuilder.group({
      id: [0],
      nomeFantasia: [null, [Validators.required]],
      razaoSocial: [null, Validators.required],
      qtdeFuncionarios: [null, Validators.required],
      active: [true]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.descricao = this.formBuilder.group({
        id: [this.data.id],
        nomeFantasia: [this.data.nomeFantasia, [Validators.required]],
        razaoSocial: [this.data.razaoSocial, Validators.required],
        qtdeFuncionarios: [this.data.qtdeFuncionarios, Validators.required],
        active: [true]
      });
    }
  }

  closeModal(){
    this.dialogRef.close();
  }

  excludeCompany(){
    this.comapnyService.deleteCompany(this.data);
    this.dialogRef.close();
  }

}

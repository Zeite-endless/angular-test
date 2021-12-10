import { Company } from './../models/company';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-creation',
  templateUrl: './dialog-creation.component.html',
  styleUrls: ['./dialog-creation.component.css']
})
export class DialogCreationComponent implements OnInit {

  descricao: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogCreationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Company) {
    this.descricao = this.formBuilder.group({
      id: [0],
      nomeFantasia: [null, [Validators.required]],
      razaoSocial: [null, Validators.required],
      qtdeFuncionarios: [null, Validators.required],
      avatarUrl: [null, Validators.required],
      active: [true]
    });
  }

  ngOnInit(): void {
    if(this.data){
      this.descricao = this.formBuilder.group({
        id: [this.data.id],
        nomeFantasia: [this.data.nomeFantasia, [Validators.required]],
        razaoSocial: [this.data.razaoSocial, Validators.required],
        qtdeFuncionarios: [this.data.qtdeFuncionarios, Validators.required],
        avatarUrl: [this.data.avatarUrl, Validators.required],
        active: [true]
      });
    }
  }

  closeModal(): void {
    this.dialogRef.close(this.descricao.value);
  }

  updateModal(): void {
    this.dialogRef.close(this.descricao.value)
  }

}

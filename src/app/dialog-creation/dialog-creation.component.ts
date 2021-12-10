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
    private dialogRef: MatDialogRef<DialogCreationComponent>) {
    this.descricao = this.formBuilder.group({
      id: [0],
      nomeFantasia: [null, [Validators.required]],
      razaoSocial: [null, Validators.required],
      qtdeFuncionarios: [null, Validators.required],
      active: [true]
    });
  }

  ngOnInit(): void {

  }

  closeModal(): void {
    this.dialogRef.close(this.descricao.value);
  }

}

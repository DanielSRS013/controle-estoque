import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControleService } from 'src/app/controle-estoque/services/controle.service';
import { ControleModel } from '../model/controle.model';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.css']
})
export class ControleComponent implements OnInit {
  controleForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private controleService: ControleService) {}

  ngOnInit(): void {
    this.controleForm = this.formBuilder.group({
      inputNome: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputId: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputQuantidadeProduto: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputFornecedor: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputValidade: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
      inputCategoria: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150)
        ]
      ],
    });
  } //

  cadastrarProduto() {
    const produto = this.controleForm.getRawValue() as ControleModel;
    produto.id = this.controleForm.get('inputId')!.value;
    produto.nomeProduto = this.controleForm.get('inputNome')!.value;
    produto.quantidadeProduto = this.controleForm.get('inputQuantidadeProduto')!.value;
    produto.fornecedor = this.controleForm.get('inputFornecedor')!.value;
    produto.validade = this.controleForm.get('inputValidade')!.value;
    produto.categoria = this.controleForm.get('inputCategoria')!.value;

    this.controleService.cadastrarProduto(produto);
  }

  get getId() { return this.controleForm.get('inputId')!; }
  get getNome() { return this.controleForm.get('inputNome')!; }
  get getQuantidadeProduto() { return this.controleForm.get('inputQuantidadeProduto')!; }
  get getFornecedor() { return this.controleForm.get('inputFornecedor')!; }
  get getValidade() { return this.controleForm.get('inputValidade')!; }
  get getCategoria() { return this.controleForm.get('inputCategoria')!; }
}

import { Component, OnInit } from '@angular/core';
import { ControleService } from 'src/app/controle-estoque/services/controle.service';
import { ControleModel } from '../model/controle.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  produtos!:ControleModel[];
  // displayedColumns: string[] = ['todo', 'status', 'dataCriacao', 'dataFinalizacao', 'edit', 'remove'];
  displayedColumns: string[] = ['produto', 'id', 'categoria', 'validade', 'quantidadeProduto', 'fornecedor'];
  dataSource!:MatTableDataSource<ControleModel>;
  clickedRow!:ControleModel;

  constructor(
    private controleService: ControleService
  ) {}

  ngOnInit(): void {
    this.produtos = this.controleService.listarProdutos();
    this.dataSource = new MatTableDataSource(this.produtos);
  }

  listarProdutos(): ControleModel[] {
    return this.produtos;
  }

  // removerProduto(id:string): void {
  //   this.controleService.removerProduto(id);
  // }

}

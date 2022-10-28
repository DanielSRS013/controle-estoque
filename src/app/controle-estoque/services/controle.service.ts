import { Injectable } from '@angular/core';
import { ControleModel } from '../model/controle.model';

@Injectable({
  providedIn: 'root'
})
export class ControleService {

  constructor() { }

  cadastrarProduto(produto: ControleModel): void {
    let produtos:ControleModel[] = this.listarProdutos();
    produtos.push(produto);
    console.log(produtos);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

  atualizarProduto(produto: ControleModel): void {
    let produtos: ControleModel[] = this.listarProdutos();

    for(let i = 0; i < produtos.length; i++) {
      if (produto.id === produtos[i].id) {
        produtos[i] = produto;
      }
      localStorage.setItem('produtos', JSON.stringify(produtos));
    }
  }


   listarProdutos(): ControleModel[] {
    return JSON.parse(localStorage.getItem('produtos')!) as ControleModel[] ?? [];
  }

  removerProduto(id:string): void {
    let produtos:ControleModel[] = this.listarProdutos();

    let novoProduto:ControleModel[] = [];

    for(let i = 0; i < produtos.length; i++) {
      if(produtos[i].id !== id) {
        novoProduto.push(produtos[i]);
      }
    }

    produtos = novoProduto;

    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

  localizarProduto(id:string): ControleModel {
    const produtos:ControleModel[] = this.listarProdutos();
    let produto!:ControleModel;
    for(let i = 0; i < produtos.length; i++) {
      if(produtos[i].id === id) {
        produto = produtos[i];
        break;
      }
    }
    return produto;
  }
}

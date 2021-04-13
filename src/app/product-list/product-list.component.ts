import { TransitiveCompileNgModuleMetadata } from "@angular/compiler";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  private data: any = [];
  constructor(private http: HttpClient) {}
  getData() {
    const url = "/users";
    this.http.get(url).subscribe(res => {
      console.log(res);
    });
  }
  products = products;
  nameValidText: string = "";

  share(title: string) {
    window.alert("The product " + title + " has been shared!");
  }

  checkUnique(event: any) {
    var text = event.target.value;
    var uniqueName = false;

    this.products.forEach(function(product) {
      if (product.name == text) {
        uniqueName = true;
      }
    });

    if (!text.trim()) {
      this.nameValidText = "Invalid name";
    } else if (uniqueName) {
      this.nameValidText = "Name is taken";
    } else {
      this.nameValidText = "Name is available";
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

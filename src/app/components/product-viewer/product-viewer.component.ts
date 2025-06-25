import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product/product.module';

// PrimeNG modules
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product-viewer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    TableModule,
    InputTextModule,
    CardModule
  ],
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.scss']
})
export class ProductViewerComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterText = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  onFilterChange() {
    const query = this.filterText.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }
}

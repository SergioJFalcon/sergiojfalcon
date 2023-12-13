import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { CreateProductDTO } from './dtos/create-product.dto';
import { FilterProductDTO } from './dtos/filter-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getProduct(id: string): Promise<Product | null> {
    const product = await this.productModel.findById(id).exec();
    return product;
  }

  async addProduct(CreateProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = new this.productModel(CreateProductDTO);
    return newProduct.save();
  }

  async updateProduct(
    id: string,
    CreateProductDTO: CreateProductDTO,
  ): Promise<Product | null> {
    const updateProduct = await this.productModel.findByIdAndUpdate(
      id,
      CreateProductDTO,
      {
        new: true,
      },
    );
    return updateProduct;
  }

  async deleteProduct(id: string): Promise<any> {
    const deleteProduct = await this.productModel.findByIdAndDelete(id);
    return deleteProduct;
  }

  async getFilteredProducts(
    FilterProductDTO: FilterProductDTO,
  ): Promise<Product[]> {
    const { category, search } = FilterProductDTO;
    let products = await this.getAllProducts();

    if (search) {
      products = products.filter(
        (product) =>
          product.name.includes(search) || product.description.includes(search),
      );
    }

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    return products;
  }
}

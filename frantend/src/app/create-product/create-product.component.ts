import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productTitle:string
  productPrice: any
  productQuantity:any
  productDescription:string
  productImage:any

  constructor() { }

  onFileChange(e: any) {
    this.productImage = e.target.files[0]
  }

  postData() {
    console.log(this.productTitle, this.productDescription, this.productPrice, this.productImage)
    let formData = new FormData()
    formData.append('name', this.productTitle)
    formData.append('price', this.productPrice)
    formData.append('description', this.productDescription)
    formData.append('image', this.productImage)

    const configAxios = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }

    axios.post('http://localhost:5000/api/post', formData, configAxios).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
  }
 

}

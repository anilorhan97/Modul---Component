import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Burada routes import edilmiş ve Roustes'den miras alınarak import edilmiş. İşlemler aşağıdaki routes'e göre yapılır.
//Gösterilmek istenen componenti import etmeliyiz. Otomatik doldurulması için parantez içi başta boş bırakılır.
import {PlaceholdersHomeComponent} from './placeholders-home/placeholders-home.component' //Componentini import ettik.

const routes: Routes = [
  //Buraya path verilecek.
  {path:'',component: PlaceholdersHomeComponent} //urlde nasıl görünmesi isteniyor. Lazy loading yaptığımız için içini boş yaptık.
  //Virgülden sonrası burada hangi component geçerli olacak sorusuna placeholdersHomeComponent verildi.
  //Yukarıdaki kodda özet olarak -> Eğer placeholders gibi bi url varsa PlaceholderHomeComponent'in içeriğini GÖSTEREBİLİRİM DEMEK..
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholdersRoutingModule { }

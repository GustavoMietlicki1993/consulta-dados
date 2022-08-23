import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from 'src/app/components/tela-principal/tela-principal.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { BodyComponent } from 'src/app/components/body/body.component';

@NgModule({
  declarations: [
    TelaPrincipalComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
  ],
  imports: [CommonModule],
  exports: [
    TelaPrincipalComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
  ],
})
export class ConsultasModuleModule {}

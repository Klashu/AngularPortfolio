import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciaComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

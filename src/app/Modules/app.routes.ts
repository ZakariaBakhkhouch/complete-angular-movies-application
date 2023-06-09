import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";
import { DetailsComponent } from "../components/details/details.component";
import { SearchComponent } from "../components/search/search.component";
import { DetailsActorsComponent } from "../components/details-actors/details-actors.component";
import { DetailsMoviesComponent } from "../components/details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../components/details-reviews/details-reviews.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";

const routes : Routes = [
    {path: '' , component : HomeComponent},
    {path: 'home' , component : HomeComponent},
    {path: 'search' , component : SearchComponent},
    {path: 'details' , component : DetailsComponent},
    // {path: 'feedback' , component : DetailsComponent},
    {path: 'details/actors' , component : DetailsActorsComponent},
    {path: 'details/movies' , component : DetailsMoviesComponent},
    {path: 'details/reviews' , component : DetailsReviewsComponent},
    {path: '**' , component : NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutesModule { }
  
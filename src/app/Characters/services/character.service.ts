import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseAPICharacter } from '../interfaces/ResponseAPICharacter';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private base_url = 'https://rickandmortyapi.com/api/character';
  private page : number = 1;

  private http = inject(HttpClient);
  constructor() { }

  async getCharacters(): Promise<ResponseAPICharacter>{
     try{
        const response = await firstValueFrom(this.http.get<ResponseAPICharacter>(this.base_url));
        return Promise.resolve(response);
     }catch(error){
       console.error(error);
       return Promise.reject(error);
     }
  }
  

 async getCharactersByPage(page: number): Promise<ResponseAPICharacter>{
    try{
      const response = await firstValueFrom(this.http.get<ResponseAPICharacter>(`${this.base_url}/?page=${page}`));
      return Promise.resolve(response);
    }catch(error){
      console.error(error);
      return Promise.reject(error);
    }
  }

  async getCharactersBySearch(search: string): Promise<ResponseAPICharacter>{
    try{
      const response = await firstValueFrom(this.http.get<ResponseAPICharacter>(`${this.base_url}/?name=${search}`));
      return Promise.resolve(response);
    }catch(error){
      console.error(error);
      return Promise.reject(error);
    }
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private githubApiUrl = 'https://api.github.com/repos/angular/angular.js/stats/commit_activity?client_id=175435e1e7ad36315e2d&client_secret=8f3905d2902173f369bdb9b8f4bed8fad1fb6d7e';

  constructor (private http:Http) { }


   getGitHubData(): Promise<any> {
    return this.http.get(this.githubApiUrl)
               .toPromise()
               .then(response => (response.json()))
               .catch(this.handleError);
  }


	private handleError (error: any): Promise <any>{
	console.error('An error occured',error);
	return Promise.reject(error.message || error);
	}
}




  





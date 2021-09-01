import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Friend {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public department: string,
    public email: string,
    public country: string
  ) {
  }
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  // @ts-ignore
  friends: Friend[];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getFriends();
  }

  // tslint:disable-next-line
  getFriends() {
    this.httpClient.get<any>('http://localhost:9001/friends').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }

}

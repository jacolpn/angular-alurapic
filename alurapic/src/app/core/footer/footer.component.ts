import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserServico } from "../user/user.service";

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    user$: Observable<User>;
    
    constructor(private userService: UserServico) {}
    
    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }

}
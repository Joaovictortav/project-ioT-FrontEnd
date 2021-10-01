import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loadingBtn = false;
	public token: any;

  public formulario: FormGroup = this.formBuilder.group({
		email: [null, [
      Validators.required,
			Validators.email
    ]],
    senha: [null, [Validators.required, Validators.minLength(4)]],
	});

  constructor(
    private formBuilder: FormBuilder,
    private serviceLogin: LoginService
    ) { }

  esqueceSenha() {
    console.log('Mudar senha');
  }

  fazerLogin() {
    this.loadingBtn = true;
    const model = {
      email: this.formulario.controls.email.value,
      password: this.formulario.controls.senha.value
    }
    this.serviceLogin.login(model).subscribe(data => {
      console.log(data);
      this.loadingBtn = false;
    }, (erro) => {
      this.loadingBtn = false;
      console.log(erro);
    })
  }

  verificaEmail(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}

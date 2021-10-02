import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private serviceLogin: LoginService,
    private router: Router
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
    localStorage.removeItem('token');
    this.serviceLogin.login(model).subscribe(data => {
      if (data.body?.token) {
        localStorage.setItem('token', data.body?.token);
        this.router.navigate(['/home/dashboard']);
      } else {
        // Chama um modal informando o erro ao achar usuário 
      }
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

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
		documento: [null, [
      Validators.required,
			Validators.minLength(11),
			Validators.maxLength(14),
    ]],
    senha: [null, [Validators.required, Validators.minLength(4)]],
	});

  constructor(private formBuilder: FormBuilder) { }

  esqueceSenha() {
    console.log('Mudar senha');
  }

  fazerLogin() {
    this.loadingBtn = true;
    console.log('Realizar login');
  }

  verificaCPF(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}

import React from "react";
import { login } from "../services/loginService";

class Login extends React.Component {

    state = {
        error: false
    }


    handleLogin(event) {
        event.preventDefault();

        //pasar auth
        const body = {
            username: event.target.user.value,
            password: event.target.password.value
        }

        //llamada al servicio
        login(body)
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token); 
                    this.setState(() => {
                        return {
                            error: true
                        };
                    }, () => {
                        this.props.onLoginComplete(true);
                    });
                }
            }).catch(() => {
                this.setState({
                    error: true
                })
            })
    }
    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center login">
                {this.state.error ?  
                    <div className="mb-1 text-center login-validation">
                        <span>Usuario o contraseña incorrectos.</span>
                    </div>: null}
                <form onSubmit={(event) => this.handleLogin(event)}>
                    <h1 className="text-center mt-2">Login</h1>
                    <div className="mb-3">
                        <label for="user" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="user" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Constraseña</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="text-center mb-2 mt-4">
                        <button type="submit" className="btn btn-primary btnLogin">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login; 
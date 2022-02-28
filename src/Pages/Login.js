import "./Login.css"
import { Link } from "react-router-dom"

function Login(props) {

    function formSubmitLogin()
    {
        props.setLogin(true);
    }

    return (
        <div className="container login-container text-center d-flex">
            <form onSubmit={() => formSubmitLogin()}>

                <img className="" src="https://th.bing.com/th/id/R.0b562de767b80bfa845150849a5c1f42?rik=vsJBTMe5%2fmSh7w&pid=ImgRaw&r=0" alt="" width="150" height="80" />

                <div className="form-floating mt-1">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required minLength="8"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <Link to="/categories">
                    <button className="w-100 btn btn-lg mt-3 login-btn text-white" type="button">Log in</button>
                </Link>
            </form>
        </div>
    )
}

export default Login
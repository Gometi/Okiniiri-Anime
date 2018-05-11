import React from 'react';
import './Login.css';


function Login{
	 render() {
    return (
      <div className="Login">
       <h1>=P Welcome</h1>
       <h1>Yōkoso '_'</h1>
       <form onSubmit={this.handleSubmit}>
       	<label>
       		<h2>user name</>
       		<input
       			type='text'
       		/>
       	</label>
       	<label>
       		<h2>email</>
       		<input
       			type='text'
       		</input>
       	</label>
       	<label>
       		<h2>password</h2>
       		<input
       			type='text'
       		</input>
       	</label>
       <button type='submit'>LOGIN</button>
       </form>
      </div>
    );
  }
}
}


export default Login;
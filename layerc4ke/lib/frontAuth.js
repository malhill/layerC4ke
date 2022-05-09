import decode from 'jwt-decode';
import swal from 'sweetalert';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('id_token');
    }
    
  }

  login(idToken) {
    // Saves user token to localStorage
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      localStorage.setItem('id_token', idToken);
    }
    swal({
      title: "Welcome!",
      text: "Login Sucessful!",
      icon: "success",
      button: "Start Shopping!",
    }).then( () => {
      window.location.assign('/products');
    })
  }

  logout() {
    // Clear user token and profile data from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('id_token');
    } 
    // this will reload the page and reset the state of the application
    swal("We hope you had a great experience. Come back soon!")
    .then( () => {
      window.location.assign('/');
    });
    
    
  }
}

export default new AuthService();
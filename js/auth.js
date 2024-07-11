import {CONFIG} from '../utils/config.js';

let register_form = document.getElementById('register');

let register_form_input = register_form.querySelectorAll('input');

// every input under form
let every_label = register_form.querySelectorAll('label');
console.log('🚀 ~ every_lable:', every_label);
// every span under form
let every_span = register_form.querySelectorAll('span.focus-border');
console.log('🚀 ~ every_span:', every_span);

// Use the Fetch API to register
register_form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    let email = register_form.querySelector(
        'input[name="register-email"]'
    ).value;
    let username = register_form.querySelector(
        'input[name="register_user"]'
    ).value;
    let password = register_form.querySelector(
        'input[name="register_password"]'
    ).value;
    let conpassword = register_form.querySelector(
        'input[name="register_conpassword"]'
    ).value;

    // Prepare the data to be sent in the request
    let formData = {
        email: email,
        username: username,
        password: password,
        conpassword: conpassword,
    };

    let res = await postData(formData);
    console.log('🚀 ~ register_form.addEventListener ~ res:', res);
    if (res.status == 'false') {
        console.log('🚀 ~ register_form.addEventListener ~ res:', res.message);
        every_label.forEach((label) => {
            // make color  to var -bs-danger
            label.style.color = 'var(--bs-danger)';
        });
        every_span.forEach((span) => {
            // make color  to var -bs-danger
            span.style.backgroundColor = 'var(--bs-danger)';
        });
        showModal(res);
    }
});
async function postData({ email, username, password, conpassword }) {
    const api_header = CONFIG.API_URL;
    const url = `${api_header}/api/register`;
    console.log('🚀 ~ postData ~ url:', url);
    const data = {
        email: email,
        username: username,
        password: password,
        password_confirmation: conpassword,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': 'ar',
            },
            body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
        });
        console.log('🚀 ~ postData ~ data:', data);
        console.log('🚀 ~ postData ~ data:', response);
        console.log('🚀 ~ postData ~ data:', response.message);
        if (response.status === 422) {
            const errorJson = await response.json(); // Parse the response body to JSON
            return errorJson;
        } else if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        // if (!response.ok) {
        //   throw new Error(`Response status: ${response}`);
        // }
        const json = await response.json();
        showModal(json);
        console.log(json);
    } catch (error) {
        const error_message = await error;
        console.log('🚀 ~ postData ~ error:', error_message.json());
        console.log('🚀 ~ postData ~ error:', error);
        console.error(error.message);
    }
    console.log('🚀 ~ postData ~ ll:', ll);
    console.log('🚀 ~ postData ~ ll:', ll);
}

function showModal(res) {
    let model = document.createElement('div');
    model.innerHTML = `
  <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: block; padding-right: 17px;" aria-modal="true" role="dialog">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${res.status ? 'Success' : 'Error'}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  ${res.message}
              </div>
          </div>
      </div>
  </div>
  `;
    document.body.appendChild(model);

    // remove the model popup after 5 seconds
    setTimeout(() => {
        model.remove();
    }, 5000);

    // remove if clicked outside the model popup
    model.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            model.remove();
        }
    });
}

/* 
<div class="rbt-contact-form contact-form-style-1 max-width-auto">
    <h3 class="title">Login</h3>
    <form class="max-width-auto" id="login">
        <div class="form-group">
            <input name="con_name" type="text" />
            <label>Username or email *</label>
            <span class="focus-border"></span>
        </div>
        <div class="form-group">
            <input name="con_email" type="pass" />
            <label>Password *</label>
            <span class="focus-border"></span>
        </div>

        <div class="row mb--30">
            <div class="col-lg-6">
                <div class="rbt-checkbox">
                    <input type="checkbox" id="rememberme" name="rememberme" />
                    <label for="rememberme">Remember me</label>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="rbt-lost-password text-end">
                    <a class="rbt-btn-link" href="#">Lost your password?</a>
                </div>
            </div>
        </div>

        <div class="form-submit-group">
            <button
                type="submit"
                class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
            >
                <span class="icon-reverse-wrapper">
                    <span class="btn-text">Log In</span>
                    <span class="btn-icon"
                        ><i class="feather-arrow-right"></i
                    ></span>
                    <span class="btn-icon"
                        ><i class="feather-arrow-right"></i
                    ></span>
                </span>
            </button>
        </div>
    </form>
</div>
*/

let login_form = document.getElementById('login');
console.log('🚀 ~ login_form:', login_form)

let login_every_label = login_form.querySelectorAll('label');
console.log('🚀 ~ login_every_label:', login_every_label)
let login_every_span = login_form.querySelectorAll('span.focus-border');
console.log('🚀 ~ login_every_span:', login_every_span)

login_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('🚀 ~ login_form.addEventListener ~ e:', e)
    

    // Get form data
    let username_or_email = login_form.querySelector(
        'input[name="con_name"]'
    ).value;
    let password = login_form.querySelector(
        'input[name="con_email"]'
    ).value;

    // Prepare the data to be sent in the request
    let formData = {
        username_or_email: username_or_email,
        password: password,
    };

    let res = await login(formData);
    console.log('🚀 ~ login_form.addEventListener ~ res:', res);
    if (res.status == 'false') {
        console.log('🚀 ~ login_form.addEventListener ~ res:', res.message);
        console.log('🚀 ~ login_ false:', res.message);
        
        login_every_label.forEach((label) => {
            // make color  to var -bs-danger
            label.style.color = 'var(--bs-danger)';
        });
        login_every_span.forEach((span) => {
            // make color  to var -bs-danger
            span.style.backgroundColor = 'var(--bs-danger)';
        });
    }
});

async function login({ username_or_email, password }) {
    const api_header = CONFIG.API_URL 
    const url = `${api_header}/api/login`;
    console.log('🚀 ~ postData ~ url:', url);
    let data = {
        username_or_email: username_or_email,
        password: password,
    };  
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': 'ar',
            },
            body: JSON.stringify(data),
        });
        console.log('🚀 ~ login ~ response:', response)
       
        if (response.status === 422) {
            let errorJson = await response.json();
            return errorJson;
        } else if (!response.ok) {
            let json = await response.json();
            showModal(json);
            throw new Error(`Response status: ${response.status}`);
        }

        let json = await response.json();
        showModal(json);
        console.log('🚀 ~ login ~ json:', json)
    } catch (error) {
        let error_message = await error;
        console.log('🚀 ~ login ~ error:', error);
        console.error(error.message);
    }
}
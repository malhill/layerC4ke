import Head from "next/head";

export default function Contact() {
  return (
    <>
      <section>
        <Head>
          <title>Contact Us</title>
        </Head>
        <h2>Contact Page</h2>
      </section>

      {/* Form Breakdown (In the Works!) */}
      {/* Create Grid Here */}
      <div>

        {/* Basic Schedule */}
        <div>
          <b>
            <p> Hq Adress here </p>
          </b>
          <ul>
            <li>
              <b>Best Call Times! 9–11AM</b>
            </li>

            <li>
              <b>Monday-Friday: 5–7AM + 6–8PM</b>
            </li>
            <li>
              <b>Saturday: 9–11AM</b>
            </li>
            <li>
              <b>Sunday: Closed</b>
            </li>
          </ul>
        </div>

        {/* Full form below */}

        {/* Name */}
        <form
          class="kwes-form"
          action="https://kwes.io/api/foreign/forms/P7ZzIo51lKx37Ywm0R9N"
        >
          <div class="form-row">
            <div class="col">
              <label for="fullName">
                Full name
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  class="form-control"
                  placeholder="John Doe"
                />
              </label>
            </div>
          </div>
        </form>

        {/* Email */}
        <div class="form-row">
          <div class="col">
            <label for="email">
              Email address
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="JohnDoe@email.com"
              />
            </label>
          </div>
        </div>

        {/* Text content from user */}
        <div class="form-row">
          <div class="col">
            <label for="message">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
                row="8"
                col="4"
                class="form-control"
                placeholder="Text questions here"
              ></textarea>
            </label>
          </div>
        </div>

        {/* Basic send button  */}
        <div class="form-row">
          <div class="col">
            <button class="btn btn-success" type="submit">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>

      <script src="https://kwes.io/v2/kwes-script.js" defer></script>

      {/* End of Form Breakdown  */}
    </>
  );
}

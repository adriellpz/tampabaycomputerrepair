import emailjs from "emailjs-com";
import {
  Input,
  Field,
  DialogContent,
  Dialog,
  DialogActions,
  DialogSurface,
  DialogBody,
  Button,
  DialogTrigger,
  Textarea,
  DialogTitle,
} from "@fluentui/react-components";

function Appointment() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const btn = document.getElementById("button") as HTMLInputElement;
    const form = document.getElementById("form") as HTMLFormElement;

    if (btn && form) {
      btn.value = "Sending...";
      const userID = "5XFf1bRTj2Gt71M8x";
      const serviceID = "default_service";
      const templateID = "template_4w2ozxo";

      emailjs.sendForm(serviceID, templateID, form, userID).then(
        () => {
          btn.value = "Send Email";
          alert("Appointment booked!");
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
    }
  };

  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button>Book an Appointment</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogContent>
            <form id="form" onSubmit={handleSubmit}>
              <div className="field">
                <Field label="Name">
                  <Input type="text" name="name" id="name"></Input>
                </Field>
              </div>
              <div className="field">
                <Field label={"Email"}>
                  <Input type="text" name="email" id="email"></Input>
                </Field>
              </div>
              <div className="field">
                <Field label="Address">
                  <Input type="text" name="address" id="address"></Input>
                </Field>
              </div>
              <div className="field">
                <Field label="Phone Number">
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                  ></Input>
                </Field>
              </div>
              <div className="field">
                <Field label="Issue">
                  <Textarea name="issue" id="issue"></Textarea>
                </Field>
              </div>
              <div className="field">
                <Field label="Preferred Date and Time">
                  <input
                    type="datetime-local"
                    name="selectedDate"
                    id="selectedDate"
                  ></input>
                </Field>
              </div>
              <DialogActions>
                <Button
                  appearance="primary"
                  style={{ marginTop: "10px" }}
                  type="submit"
                  value="Send Email"
                  id="button"
                >
                  Book Appointment
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

export default Appointment;

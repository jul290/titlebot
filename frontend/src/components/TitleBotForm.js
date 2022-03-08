import { TextField, Button } from "@material-ui/core";
import "../styles/TitleBotForm.css";
const TitleBotForm = () => {
  return (
    <form>
      <div class="TextField">
        <TextField
          id="outlined-basic"
          label="Website URL"
          variant="outlined"
          fullWidth
        />
      </div>

      <Button variant="contained">Grab</Button>
    </form>
  );
};

export default TitleBotForm;

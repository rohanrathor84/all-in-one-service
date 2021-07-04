import { createStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/ToolBar";
import colors from "../resources/colors";
import util from "../utils/util";

function MyAppBar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Link variant="h6" underline="none" href="" style={style.appName}>
            {util.getString("app_name")}
          </Link>
          <Box>
            <Link variant="h6" underline="none" href="#" style={style.signIn}>
              {util.getString("label_signIn")}
            </Link>
            <Link variant="h6" underline="none" href="#" style={style.signUp}>
              {util.getString("label_signUp")}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const style = createStyles({
  appName: {
    fontFamily: "monospace",
    fontSize: 24,
    color: colors.white,
  },
  signIn: {
    marginRight: 40,
    textTransform: "uppercase",
    fontFamily: "monospace",
    fontSize: 16,
    color: colors.white,
  },
  signUp: {
    textTransform: "uppercase",
    fontFamily: "monospace",
    fontSize: 16,
    color: colors.white,
  },
});

export default MyAppBar;

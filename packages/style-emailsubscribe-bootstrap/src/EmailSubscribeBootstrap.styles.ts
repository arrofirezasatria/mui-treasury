import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { Theme, alpha } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunEmailSubscribe">>;

const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const getInputStyles = ({ palette }: Theme): CSSProperties => {
  const { white } = palette.common;
  const inputRadius = 4;
  const borderWidth = 1;
  const inputPadding = ".375rem .75rem";
  const borderColor = "#ced4da";
  const normalColor = "#80bdff";
  return {
    boxSizing: "border-box",
    borderRadius: inputRadius,
    position: "relative",
    backgroundColor: white,
    borderWidth,
    borderStyle: "solid",
    borderColor,
    fontSize: 16,
    height: "calc(1.5em + .75rem + 2px)",
    padding: inputPadding,
    lineHeight: 1.5,
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    // Use the system font instead of the default Roboto font.
    fontFamily,
    "&:hover": {
      borderColor,
      boxShadow: "none",
      backgroundColor: white,
    },
    "&:focus": {
      outline: "none",
      borderRadius: inputRadius,
      borderColor: normalColor,
      backgroundColor: white,
      boxShadow: `0 0 0 0.2rem ${alpha(
        normalColor,
        palette.mode === "dark" ? 0.48 : 0.75
      )}`,
    },
  };
};

const getSubmitStyles = ({ spacing }: Theme): CSSProperties => ({
  marginLeft: "0.5rem",
  fontFamily,
  fontSize: "1rem",
  padding: spacing(1, 1.5),
  backgroundColor: "#007bff",
  borderRadius: 4,
  color: "#fff",
  lineHeight: 1.2,
  "&:hover, &:focus": {
    backgroundColor: "#0069d9",
    border: "none",
  },
});

export const getEmailSubscribeBootstrapStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSProperties => ({
  [`& .${emailSubscribeClasses.input}`]: getInputStyles(theme),
  [`& .${emailSubscribeClasses.submit}`]: getSubmitStyles(theme),
});

export const getEmailSubscribeBootstrapTheme = (theme: Theme): Output => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        input: getInputStyles(theme),
        submit: getSubmitStyles(theme),
      },
    },
  };
};

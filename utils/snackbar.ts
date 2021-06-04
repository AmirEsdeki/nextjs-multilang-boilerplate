import snackbar from "node-snackbar/dist/snackbar";
import "node-snackbar/dist/snackbar.css";
import "../styles/others/snackbar.css";

type NotifyPosition =
  | "bottom-right"
  | "bottom-center"
  | "bottom-left"
  | "top-right"
  | "top-center"
  | "top-left";
interface INotify {
  text?: string;
  textColor: string;
  width: string | number;
  showAction: boolean;
  actionText: string;
  actionTextColor: string;
  backgroundColor: string;
  pos: NotifyPosition;
  duration: number;
  customClass: string;
  onClose: (element: HTMLDivElement) => void;
  onActionClick: (element: HTMLDivElement) => void;
  [setting: string]: any;
}
type Notify = Partial<INotify>;
export const showNotify = (settings: Notify | Error | String): void => {
  if (settings) {
    return snackbar.show({
      customClass: "snack-bar-custom",
      actionText: "بستن",
      showAction: true,
      actionTextColor: "#85edaf",
      pos: "bottom-left",
      duration: 3000,
      ...settings,
    } as Notify);
  }
};

export const closeNotify = (): void => snackbar.close();

export default showNotify;

import Grid from "@mui/material/Grid2";
import CancelButton from "../buttons/CancelButton";
import CreationButton from "../buttons/CreationButton";
import UploadButton from "../buttons/UploadButton";
import InputError from "../forms/InputError";
import ServiceForm from "../forms/ServiceForm";
import UserForm from "../forms/UserForm";
import UserInput from "../forms/UserInput";
import ReceiptRevisionPage from "@/pages/ReceiptRevisionPage";
import ReceiptRevision from "../ReceiptRevision";
import CardAlert from "../CardAlert";
import AddressForm from "../AddressForm";
import AddSign from "../AddSign";
import Agenda from "../Agenda";
import AppNavbar from "../AppNavbar";
import AppointmentCreation from "../AppointmentCreation";
import ChartUserByCountry from "../ChartUserByCountry";
import Checkout from "../Checkout";
import Content from "../Content";
import CustomDatePicker from "../CustomDatePicker";
import CustomizedDataGrid from "../CustomizedDataGrid";
import CustomizedTreeView from "../CustomizedTreeView";
import DateCalendarValue from "../DateCalendarValue";
import FileItem from "../FileItem";
import { FileData } from "@/types/FileData";
import ForgotPassword from "../ForgotPassword";
import Header from "../Header";
import HighlightedCard from "../HighlightedCard";
import Info from "../Info";
import InfoMobile from "../InfoMobile";
import InvoiceView from "../InvoiceView";
import MainGrid from "../MainGrid";
import MenuButton from "../MenuButton";
import MenuContent from "../MenuContent";
import NavbarBreadcrumbs from "../NavbarBreadcrumbs";
import NotFound from "../NotFound";
import OptionsMenu from "../OptionsMenu";
import OverviewPersona from "../OverviewPersona";
import PageViewsBarChart from "./PageViewsBarChart";
import PanelProfesional from "../PanelProfesional";
import PaymentForm from "../PaymentForm";
import PopoverMenu from "../PopoverMenu";
import Profile from "../Profile";
import ProTip from "../ProTip";
import Review from "../Review";
import Search from "../Search";
import SelectContent from "../SelectContent";
import SessionsChart from "./SessionsChart";
import SideMenu from "../SideMenu";
import SideMenuMobile from "../SideMenuMobile";
import SignIn from "../SignIn";
import SignInCard from "../SignInCard";
import SignInSide from "../SignInSide";
import SignUp from "../SignUp";
import SitemarkIcon from "../SitemarkIcon";
import ReceiptRevisionData from "@types/ReceiptRevisionData";
import Typography from "@mui/material/Typography";

export default function Pruebas() {
  const receiptRevision: ReceiptRevisionData = {
    id: 1,
    paciente: "Carlos Perez",
    representante: "Ana Perez",
    cedula_paciente: "0912345678",
    url_comprobante_pago: "https://example.com/comprobantes/pago_1.pdf",
  };
  const fileData: FileData = {
    name: "comprobante_pago.pdf",
    lastModified: "2025-04-18T10:23:00Z",
    file: new File(["Contenido del archivo"], "comprobante_pago.pdf", {
      type: "application/pdf",
      lastModified: new Date("2025-04-18T10:23:00Z").getTime(),
    }),
  };
  const handleToggleDrawer = (newOpen: boolean) => () => {
    console.log("Drawer toggled:", newOpen);
  };
  return (
    <Grid container>
      <Grid size={12}>
        <CancelButton onClick={() => {}} />
      </Grid>
      <Grid size={12}>
        <CreationButton onClick={() => {}} text="Hola Mundo" />
      </Grid>
      <Grid size={12}>
        <UploadButton />
      </Grid>
      <Grid size={12}>
        <InputError message="Error" />
      </Grid>
      <Grid size={12}>
        <ServiceForm isEditMode={true} serviceId="1212212" />
      </Grid>
      {/*Sirve para editar y crear servicios*/}
      <Grid size={12}>
        <UserForm />
      </Grid>
      <Grid size={12}>
        <ReceiptRevisionPage />
      </Grid>
      <Grid size={12}>
        <ReceiptRevision pagoData={receiptRevision} />
      </Grid>

      <Grid size={12}>
        <AddressForm />
      </Grid>
      <Grid size={12}>
        <AddSign />
      </Grid>
      <Grid size={12}>
        <Agenda />
      </Grid>
      {/*<AppNavbar />*/}
      <Grid size={12}>
        <AppointmentCreation />
      </Grid>
      <Grid size={12}>
        <CardAlert />
      </Grid>
      <Grid size={12}>
        <ChartUserByCountry />
      </Grid>
      <Grid size={12}>
        <Checkout />
      </Grid>
      <Grid size={12}>
        <Content />
      </Grid>
      <Grid size={12}>
        <CustomDatePicker />
      </Grid>
      <Grid size={12}>
        <CustomizedDataGrid />
      </Grid>
      <Grid size={12}>
        <CustomizedTreeView />
      </Grid>
      <Grid size={12}>
        <DateCalendarValue />
      </Grid>
      <Grid size={12}>{/*<FileItem data={fileData} />*/}</Grid>
      <Grid size={12}>
        {/*<ForgotPassword open={true} handleClose={() => {}} />*/}
      </Grid>
      <Grid size={12}>{/*<Header />*/}</Grid>
      <Grid size={12}>
        <HighlightedCard />
      </Grid>
      <Grid size={12}>
        <Info totalPrice="23" />
      </Grid>
      <Grid size={12}>
        <InfoMobile totalPrice="23" />
      </Grid>
      <Grid size={12}>
        <Typography>InvoiceView</Typography>
        <InvoiceView />
      </Grid>
      <Grid size={12}>
        <Typography>MainGrid</Typography>
        <MainGrid />
      </Grid>
      <Grid size={12}>
        <MenuButton />
      </Grid>
      <Grid size={12}>
        <MenuContent />
      </Grid>
      <Grid size={12}>
        <NavbarBreadcrumbs />
      </Grid>
      <Grid size={12}>
        <NotFound />
      </Grid>
      <Grid size={12}>
        <OptionsMenu />
      </Grid>
      <Grid size={12}>
        <PageViewsBarChart />
      </Grid>
      <Grid size={12}>
        <PaymentForm />
      </Grid>
      <Grid size={12}>
        <PopoverMenu />
      </Grid>
      <Grid size={12}>
        <Profile />
      </Grid>
      <Grid size={12}>
        <ProTip />
      </Grid>
      <Grid size={12}>
        <ReceiptRevision pagoData={receiptRevision} />
      </Grid>
      <Grid size={12}>
        <Review />
      </Grid>
      <Grid size={12}>
        <Search />
      </Grid>
      <Grid size={12}>
        <SelectContent />
      </Grid>
      <Grid size={12}>
        <SessionsChart />
      </Grid>
      <Grid size={12}>
        <SideMenu />
      </Grid>
      <Grid size={12}>
        {/*<SideMenuMobile open={true} toggleDrawer={handleToggleDrawer} />*/}
      </Grid>
      <Grid size={12}>
        <SignIn />
      </Grid>
      <Grid size={12}>
        <SignInCard />
      </Grid>
      <Grid size={12}>
        <SignInSide />
      </Grid>
      <Grid size={12}>
        <SignUp />
      </Grid>
      <Grid size={12}>
        <SitemarkIcon />
      </Grid>
    </Grid>
  );
}

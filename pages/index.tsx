import Landing from "../components/templates/landing/Landing";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function LandingPage() {
  return Landing();
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landing"])),
  },
});

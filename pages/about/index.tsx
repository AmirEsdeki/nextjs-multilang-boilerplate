import { useRouter } from "next/router";
import About from "../../components/templates/about/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AboutPage() {
  const router = useRouter();
  // const { pid } = router.query;

  return <About />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landing"])),
  },
});

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar"
import  {
  AdvisoryCommittee,
  CallForPapers,
  Contact,
  HomePage,
  ImportantDates,
  OrganizingCommittee,
  ProgramSchedule,
  Registration,
  ReviewProcess,
  Speakers,
  TechnicalCommittee,
  JournalPublication,
  PublicationProcess,
  AbstractSubmission,
  FullPaperSubmission
} from './pages'
import PublicationsTemp from "./pages/PublicationsTemp";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/committee/advisory-committee",
    element: <AdvisoryCommittee />,
  },
  {
    path: "/committee/organizing-committee",
    element: <OrganizingCommittee />,
  },
  {
    path: "/committee/technical-committee",
    element: <TechnicalCommittee />,
  },
  {
    path: "/for-authors/call-for-papers",
    element: <CallForPapers />,
  },
  {
    path: "/for-authors/abstract-submission",
    element: <AbstractSubmission />,
  },
  {
    path: "/for-authors/important-dates",
    element: <ImportantDates />,
  },
  {
    path: "/for-authors/full-paper-submission",
    element: <FullPaperSubmission />,
  },
  {
    path: "/publications/review-process",
    element: <ReviewProcess />,
  },
  {
    path: "/publications/publication-process",
    element: <PublicationProcess />,
  },
  // {
  //   path: "/publications/journal-publication",
  //   element: <JournalPublication />,
  // },
  {
    path: "/speakers",
    element: <Speakers />,
  },
  {
    path: "/program-schedule",
    element: <ProgramSchedule />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/publications/journal-publication",
    element: <PublicationsTemp />,
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
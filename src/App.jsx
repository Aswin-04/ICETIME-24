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
} from './pages'

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
    path: "/for-authors/important-dates",
    element: <ImportantDates />,
  },
  {
    path: "/for-authors/review-process",
    element: <ReviewProcess />,
  },
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
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
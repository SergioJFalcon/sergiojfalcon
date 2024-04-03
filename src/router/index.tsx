import { Route } from "@solidjs/router";
import { lazy } from "solid-js";

const DashboardLayout = lazy(() => import('../screens/Dashboard/dashboard.layout'));
const Home = lazy(() => import('../screens/home'));
const Shop = lazy(() => import('../screens/Shop/shop'));
const About = lazy(() => import('../screens/About/about'));
const Blog = lazy(() => import('../screens/Blog/blog'));
const ProjectsPortfolio = lazy(() => import('../screens/ProjectsPortfolio/projectsPortfolio'));
const NotFound = lazy(() => import('../screens/[...404]'));
const MainLayout = lazy(() => import('../screens/mainlayout'));
const Terms = lazy(() => import('../screens/terms'));
const Privacy = lazy(() => import('../screens/privacy'));

export default function AppRouter(){
  return (
    <>
      {/* Home Dashboard */}
      <Route path="/" component={DashboardLayout}>
        <Route path="" component={Home} />
      </Route>

      
      {/* About */}
      <Route path="/about" component={MainLayout}>
        <Route path="" component={About} />
      </Route>

      {/* Projects */}
      <Route path="/projects" component={MainLayout}>
        <Route path="" component={ProjectsPortfolio} />
        <Route path="/:id" component={ProjectsPortfolio} />
      </Route>

      {/* Blog */}
      <Route path="/blog" component={MainLayout}>
        <Route path="" component={Blog} />
        <Route path="/:id" component={Blog} />
      </Route>
      
        {/* Shop */}
      <Route path="/shop" component={MainLayout}>
        <Route path="" component={Shop} />
        <Route path="/:id" component={Shop} />
      </Route>

        {/* Legal */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />

      {/* Not Found */}
      <Route path="*404" component={NotFound} />
    </>
  );
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./Layouts/DefaultLayout";
import React from "react";

function App() {
  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout == null) {
              Layout = React.Fragment;
            } else {
              Layout = DefaultLayout;
            }
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page title={route.helmet} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

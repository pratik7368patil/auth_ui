import React from "react";
import { tests } from "./../../utils/dummyData";
import TestCard from "../TestCard";
import Dialog from "../Dialog";
import "./dashboard.css";

function Dashboard(props) {
  const [bookingTest, setBookingTest] = React.useState({});
  const [dialogStatus, setDialogStatus] = React.useState(false);

  function bookTest(test) {
    setBookingTest(test);
    setDialogStatus(true);
  }

  return (
    <div>
      <div className="dashboard-container">
        {tests.map((test) => {
          if (test.isActive) {
            return <TestCard key={test.id} test={test} booktest={bookTest} />;
          }
          return null;
        })}
      </div>
      <Dialog
        test={bookingTest}
        dialogStatus={dialogStatus}
        setDialogStatus={setDialogStatus}
      />
    </div>
  );
}

export default Dashboard;

import React from "react";
import UserAnalytics from "../components/UserAnalytics";
import { useStoreContext } from "../utils/GlobalState";
import CompanyAnalytics from "../components/CompanyAnalytics";
export default function Analytics() {
  const [state, dispatch] = useStoreContext();
  return (
    <div className="home-container">
      <h2 className="mt-2 text-center">Analytics</h2>
      {state.currentUser.role === "Job Seeker" ? (
        <UserAnalytics />
      ) : (
        <CompanyAnalytics />
      )}
    </div>
  );
}

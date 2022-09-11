import React from "react";
import { useEffect } from "react";

const Profile = () => {
  useEffect(function () {
    document.title = "Profile";
  }, []);
  return (
    <>
      <h1>Ini adalah Profile</h1>
    </>
  );
};

export default Profile;

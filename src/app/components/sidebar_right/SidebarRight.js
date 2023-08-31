import React from "react";

const SidebarRight = async () => {
  const url =
    "https://instagram28.p.rapidapi.com/media_info_v2?short_code=CA_ifcxMjFR";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0d65a6360emsh42a3d108869b507p125bfdjsn909506c01efe",
      "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return (
    <div className="sticky z-50 top-0 right-0">
      <h1>Sidebar_right</h1>
    </div>
  );
};

export default SidebarRight;
